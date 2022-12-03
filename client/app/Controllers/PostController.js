
import { appState } from "../AppState.js"
import { Post } from "../Models/Post.js"
import { postService } from "../Services/PostService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"

function _drawPosts() {
    let template = ''
    appState.posts.forEach(p => template += p.CandyTemplate)
    setHTML('posts', template)
}

function _drawActive() {
    setHTML('postModalContent', appState.activePost.ActiveTemplate)
}

export class PostController {
    constructor() {
        this.getCandy()
        appState.on('posts', _drawPosts)
        appState.on('activePost', _drawActive)
    }


    async getCandy() {
        try {
            await postService.getCandy()
        } catch (error) {
            Pop.error(error)
        }
    }

    async postCandy() {
        try {
            window.event.preventDefault()
            let form = window.event.target
            let formData = getFormData(form)
            console.log(formData)
            // console.log(appState.account)
            await postService.postCandy(formData)
            // @ts-ignore
            form.reset()
        } catch (error) {
            Pop.error(error + `postCandy controller error`)
        }
    }

    getCandyForm() {
        setHTML('postModalContent', Post.CandyForm())
    }

    setActivePost(postId) {
        try {
            postService.setActivePost(postId)
        } catch (error) {
            Pop.error(error.message)
        }
    }

}


