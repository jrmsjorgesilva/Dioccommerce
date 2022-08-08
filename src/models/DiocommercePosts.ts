import mongoose from "mongoose";

type DiocommercePostsType = {
  userId: string;
  postId: string;
  title: string;
  body: string;
  author: string;
  postLength: number;
};

const DiocommercePostsSchema = new mongoose.Schema<DiocommercePostsType>({
  userId: String,
  postId: String,
  title: String,
  body: String,
  author: String,
});

const DiocommercePosts = mongoose.model<DiocommercePostsType>(
  "DiocommercePosts",
  DiocommercePostsSchema
);

export default DiocommercePosts;
