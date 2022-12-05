export class Like {
    constructor(data) {
        this.postId = data.postId
        this.accountId = data.accountId
        this.likedByCurrUser = false
    }

    // get LikeTemplate() {
    //     if (this.liked) {
    //         return `
    //     <i class="mdi mdi-heart selectable text-danger"></i>
    //     `
    //     } else {
    //         return `
    //     <i class="mdi mdi-heart selectable"></i>
    //     `
    //     }

    // }
}