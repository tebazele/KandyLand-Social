import { dbContext } from "../db/DbContext.js";

class PostsService {
    async getAll(query) {
        const posts = await dbContext.Posts.find(query)
        return posts
    }
    async create(postData) {
        const newPost = await dbContext.Posts.create(postData)
        return newPost
    }

}

export const postsService = new PostsService()