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
            // req.body.userId = req.us
            const newPost = await postsService.create(req.body)
            return res.send(newPost)
        } catch (error) {
            next(error)
        }
    }
}