

export class Post {
    constructor(data) {
        this.imgUrl = data.imgUrl
        this.description = data.description
        this.likeCount = data.likeCount
        this.userId = data.userId
    }


    get CandyTemplate() {
        return `
        <div class="col-3 p-2 card m-2">
        <img src="${this.imgUrl}" alt="" class="post-img" p-3">
        <div class="d-flex justify-content-evenly mt-3">
          <h5>candy name</h5>
          <i class="mdi mdi-heart"></i> <i class="mdi mdi-comment"></i>
        </div>
      </div>`
    }


}

