
import { appState } from "../AppState.js";
import { likesService } from "../Services/LikesServices.js";
import { Pop } from "../Utils/Pop.js";





export class LikesController {
    constructor() {
        console.log('hello from the likes controller');
        // console.log(appState.account);
        // setTimeout(() => console.log(appState.account), 2000)


    }

    async createLike(postId) {
        try {
            console.log(postId);
            await likesService.createLike({ "postId": postId })
            console.log(appState.posts);
        } catch (error) {
            Pop.error(error)
        }
    }

    // unLike() {
    //     console.log('unlike that post!');
    // }

}