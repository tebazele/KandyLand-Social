import { dbContext } from "../db/DbContext.js";
import { BadRequest, Forbidden } from "../utils/Errors.js";

class PostsService {
    async getAll(query) {
        const posts = await dbContext.Posts.find(query).populate('user', 'name picture').populate({ path: 'likes', populate: { path: 'account' } })
        return posts
    }
    async create(postData) {
        const newPost = await dbContext.Posts.create(postData)
        return newPost
    }

    async editPost(id, body, userId) {
        const originalPost = await dbContext.Posts.findById(id)

        if (!originalPost) throw new BadRequest('nope')

        const user = await dbContext.Account.findById(originalPost.userId)

        if (user.id.toString() !== userId) throw new Forbidden('not allowed to edit this post')
        originalPost.imgUrl = body.imgUrl ? body.imgUrl : originalPost.imgUrl
        originalPost.description = body.description ? body.description : originalPost.description
        originalPost.likeCount = originalPost.likeCount
        originalPost.userId = originalPost.userId

        originalPost.populate('user', 'name picture')
        return originalPost
    }
    async removePost(postId, userInfo) {
        const foundPost = await dbContext.Posts.findById(postId)
        if (!foundPost) throw new BadRequest('no post by that id')
        if (foundPost.userId != userInfo.id) {
            throw new Forbidden('cannot delete other peoples posts')
        }
        await foundPost.remove()
        return 'Your post was removed'
    }


}

export const postsService = new PostsService()