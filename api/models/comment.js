import mongoose from 'mongoose';

var commentSchema = new mongoose.Schema({
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  }
});

export const commentModel = mongoose.model('Comment', commentSchema);
