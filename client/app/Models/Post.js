

export class Post {
  constructor(data) {
    this.imgUrl = data.imgUrl
    this.description = data.description
    this.likeCount = data.likeCount
    this.userId = data.userId
  }


  get CandyTemplate() {
    return `
        <div class="col-3 p-2 card m-2 mt-3">
        <img src="${this.imgUrl}" alt="" class="post-img" p-3">
        <div class="d-flex justify-content-evenly mt-3">
          <h5>candy name</h5>
          <i class="mdi mdi-heart"></i> <i class="mdi mdi-comment"></i>
        </div>
      </div>`
  }

  static CandyForm() {
    return `
        <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Post a kandy</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form class="row" onsubmit="app.postController.postCandy()">
        <div class="modal-body">
          <div class="form-floating mb-3 col-12">
            <input type="text" class="form-control" id="description" name="description" placeholder="Candy description">
            <label for="name">Candy Description</label>
          </div>
          <div class="form-floating mb-3 col-12">
            <input required type="url" class="form-control" id="imgUrl" name="imgUrl" placeholder="Kandy Image">
            <label for="img">Kandy Image</label>
          </div>
        <div>
        <div class="modal-footer">
          <button type="button" class="btn bird-btn" data-bs-dismiss="modal">Close</button>
          <button type="submit" class="btn bird-btn-green">Submit</button>
        </div>
      </form>
        `
  }


}

