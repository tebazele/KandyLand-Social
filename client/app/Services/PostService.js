import { appState } from "../AppState.js"
import { Post } from "../Models/Post.js"
import { server } from "./AxiosService.js"



class PostService {


    async getCandy() {
        const res = await server.get('api/posts')
        appState.posts = res.data.map(p => new Post(p))
        console.log(appState.posts, 'got it');
    }


}

export const postService = new PostService()