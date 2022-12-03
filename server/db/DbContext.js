import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { LikeSchema } from '../models/Like';
import { PostSchema } from '../models/Post.js';
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Posts = mongoose.model('Post', PostSchema);

  Likes = mongoose.model('Like', LikeSchema);
}

export const dbContext = new DbContext()
