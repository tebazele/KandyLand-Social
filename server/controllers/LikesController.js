import { Auth0Provider } from "@bcwdev/auth0provider";
import { likesService } from "../services/LikesService.js";
import BaseController from "../utils/BaseController.js";

export class LikesController extends BaseController {
    constructor() {
        super('api/likes')
        this.router
            .get('', this.getLikes)
            // .get('/:id', this.getLikesByPostId)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.likePost)
        // .delete('/:id', this.unLikePost)
    }

    async getLikes(req, res, next) {
        try {
            const likes = await likesService.getLikes()
            return res.send(likes)
        } catch (error) {
            next(error)
        }
    }

    // async getLikesByPostId(req, res, next) {
    //     try {
    //         const likes = await likesService.getLikesByPostId(req.params.id)
    //         return res.send(likes)
    //     } catch (error) {
    //         next(error)
    //     }

    // }

    async likePost(req, res, next) {
        try {
            req.body.accountId = req.userInfo.id
            req.body.likedByCurrUser = true
            const like = await likesService.likePost(req.body)
            return res.send(like)
        } catch (error) {
            next(error)
        }
    }

    async unLikePost(req, res, next) {
        try {
            const message = await likesService.unlikePost(req.params.postId, req.params.accountId)
            return res.send(message)
        } catch (error) {
            next(error)
        }
    }
}