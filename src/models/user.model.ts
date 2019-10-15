import mongoose, { Schema, Document } from 'mongoose';

export interface IUserModel extends Document {
  email: string;
  firstname: string;
  lastname: string;
  username: string;
  password: string;
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: false },
  firstname: { type: String, required: true, unique: false },
  lastname: { type: String, required: true, unique: false },
  password: String,
  username: { type: String, required: true, unique: true }
});

UserSchema.index({ username: 1 }, { unique: true });

// Export the model and return IUser interface
export default mongoose.model<IUserModel>('User', UserSchema);
