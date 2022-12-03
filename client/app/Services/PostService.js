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
        console.log(formData)
        const res = await server.post('api/posts', formData)
        console.log(res.data + 'this is the res data')
        appState.posts.push(new Post(res.data))
        appState.emit('posts')
    }

    setActivePost(postId) {
        const post = appState.posts.find(p => p.id == postId)
        appState.activePost = post
        console.log(post)
    }

}

export const postService = new PostService()