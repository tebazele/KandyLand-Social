import { Auth0Provider } from "@bcwdev/auth0provider";
import { postsService } from "../services/PostsService.js";
import BaseController from "../utils/BaseController.js";

export class PostsController extends BaseController {
    constructor() {
        super('api/posts')
        this.router
            .get('', this.getAll)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.create)
            .put('/:id', this.editPost)
            .delete('/:id', this.remove)
    }

    async getAll(req, res, next) {
        try {
            let query = req.query
            const posts = await postsService.getAll(query)
            return res.send(posts)
        } catch (error) {
            next(error)
        }
    }
    async create(req, res, next) {
        try {
            req.body.userId = req.userInfo.id

            const newPost = await postsService.create(req.body)
            return res.send(newPost)
        } catch (error) {
            next(error)
        }
    }
    async editPost(req, res, next) {
        try {
            const updatedPost = await postsService.editPost(req.params.id, req.body, req.userInfo.id)
            return res.send(updatedPost)
        } catch (error) {
            next(error)
        }
    }

    async remove(req, res, next) {
        try {
            const message = await postsService.removePost(req.params.id, req.userInfo)
            res.send(message)
        } catch (error) {
            next(error)
        }
    }

}
