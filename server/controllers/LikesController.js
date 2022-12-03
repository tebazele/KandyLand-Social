import { Auth0Provider } from "@bcwdev/auth0provider";
import { likesService } from "../services/LikesService.js";
import BaseController from "../utils/BaseController.js";

export class LikesController extends BaseController {
    constructor() {
        super('api/likes')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.likePost)
    }

    async likePost(req, res, next) {
        try {
            req.body.accountId = req.userInfo.id
            const like = await likesService.likePost(req.body, req.userInfo)
            return res.send(like)
        } catch (error) {
            next(error)
        }
    }

    async unLikePost(req, res, next) {
        try {
            const like = await likesService.unlikePost(req.params.postId, req.body)
            return res.send(like)
        } catch (error) { }
    }
}