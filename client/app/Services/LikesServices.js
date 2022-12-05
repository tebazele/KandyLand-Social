import { appState } from "../AppState.js"
import { Like } from "../Models/Like.js"
import { server } from "./AxiosService.js"
import { postService } from "../Services/PostService.js"

class LikesService {
    async createLike(postId) {
        console.log(postId);
        const res = await server.post('api/likes', postId)
        console.log(res.data);
        let newLike = new Like(res.data)
        appState.likes.push(newLike)
        appState.emit('likes')

        let likedPost = appState.posts.find(p => newLike.postId == p.id)
        newLike.likedByCurrUser = true
        // console.log(likedPost);
        likedPost.likes.push(newLike)
        appState.emit('posts')


        // let posts = await postService.getCandy()
        // console.log(appState.Posts);

    }



}

export const likesService = new LikesService()
