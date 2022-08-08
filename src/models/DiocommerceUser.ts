import mongoose from "mongoose";

type DiocommerceUserType = {
  userName: string;
  password: string;
  firstName?: string;
  lastName?: string;
  age?: number;
  isPayer?: boolean;
};

const DiocommerceUserSchema = new mongoose.Schema<DiocommerceUserType>({
  userName: String,
  password: String,
  firstName: String,
  lastName: String,
  age: Number,
  isPayer: Boolean,
});

const DiocommerceUser = mongoose.model<DiocommerceUserType>(
  "DiocommerceUser",
  DiocommerceUserSchema
);

export default DiocommerceUser;
