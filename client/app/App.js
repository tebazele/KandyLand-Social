import { AuthController } from './Controllers/AuthController.js';
import { LikesController } from './Controllers/LikesController.js';
import { PostController } from './Controllers/PostController.js';

// import { ValuesController } from './Controllers/ValuesController.js';

class App {
  authController = new AuthController();
  // valuesController = new ValuesController();
  postController = new PostController()

  likesController = new LikesController()
}

// @ts-ignore
window.app = new App()
