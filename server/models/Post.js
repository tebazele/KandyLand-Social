const { Schema } = require("mongoose")

const ObjectId = Schema.Types.ObjectId
export const PostSchema = new Schema({
    imgUrl: { type: String, required: true, maxLength: 400 },
    description: { type: String, required: true, minLength: 4, maxLength: 144 },
    likeCount: { type: Number, default: 0 },
    userId: { type: ObjectId, required: true, ref: 'Account' }
},
    { timestamps: true, toJSON: { virtuals: true } }
)

PostSchema.virtual('user', {
    localField: 'userId',
    foreignField: '_id',
    justOne: true,
    ref: 'Account'
})