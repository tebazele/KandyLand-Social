import { Schema } from "mongoose";

export const LikeSchema = new Schema({
    postId: { type: Schema.Types.ObjectId, required: true, ref: 'Post' },
    accountId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
},
    { timestamps: true, toJSON: { virtuals: true } }
)

LikeSchema.virtual('account', {
    localField: 'accountId',
    foreignField: '_id',
    justOne: true,
    ref: 'Account'
})

// LikeSchema.virtual('post', {
//     localField: 'postId',
//     foreignField: '_id',
//     justOne: true,
//     ref: 'Post'
// })
LikeSchema.index({ likeId: 1, postId: 1 }, { unique: true })