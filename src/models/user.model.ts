import mongoose, { Schema, Document } from 'mongoose';

export interface IUserModel extends Document {
  firstname: string;
  lastname: string;
  name: string;
  password: string;
}

const UserSchema: Schema = new Schema({
  firstname: { type: String, required: true, unique: false },
  lastname: { type: String, required: true, unique: false },
  name: { type: String, required: true, unique: false },
  password: String
});

UserSchema.index({ name: 1, domain: 1 }, { unique: true });

// Export the model and return IUser interface
export default mongoose.model<IUserModel>('User', UserSchema);
