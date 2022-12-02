import { appState } from "../AppState.js"
import { Post } from "../Models/Post.js"
import { server } from "./AxiosService.js"



class PostService {


    async getCandy() {
        const res = await server.get('api/posts')
        appState.posts = res.data.map(p => new Post(p))
        console.log(appState.posts, 'got it');
    }

    async postCandy(formData) {
        const res = await server.post('api/posts', formData)
        appState.posts.push(new Post(res.data))
        appState.emit('posts')
    }

}

export const postService = new PostService()