import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"

class LikesService {

    async getLikesByPostId(postId) {
        const likes = await dbContext.Likes.find({ postId }).populate('account', 'name picture')
        return likes
    }

    async likePost(body) {
        const like = await dbContext.Likes.create(body)
        return like

    }

    async unlikePost(postId, postData) {
        const original = await dbContext.Likes.findById(postId)
        if (!original) throw new BadRequest('no post at id:' + postId)
        original.likeId = postData.likeId ? postData.likeId : original.likeId
        await original.remove(original.likeId)
        return original
    }


}

export const likesService = new LikesService()