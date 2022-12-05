import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"

class LikesService {
    async getLikes() {
        const likes = await dbContext.Likes.find()
        return likes
    }

    // async getLikesByPostId(postId) {
    //     const likes = await dbContext.Likes.find({ postId }).populate('account', 'name picture')
    //     return likes
    // }

    async likePost(body) {
        const like = await dbContext.Likes.create(body)
        return like

    }

    async unlikePost(postId, accountId) {
        // find like to be deleted by postId and then accountId within that post's likes
        const post = await dbContext.Posts.findById(postId)
        if (!post) throw new BadRequest('no post at id:' + postId)
        const likeToDelete = post.likes.findById(accountId)
        if (!likeToDelete) throw new BadRequest('no like for this account on this post')
        await likeToDelete.remove(likeToDelete.id)
        return `deleted yo`
    }


}

export const likesService = new LikesService()