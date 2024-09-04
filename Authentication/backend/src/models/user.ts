import mongoose, { Schema, Document, Model } from 'mongoose';

// Define the TypeScript interface for the user document
export interface IUser extends Document {
    email: string;
    password: string;
}

// Define the schema
const userSchema: Schema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
});

// Create and export the model
const User: Model<IUser> = mongoose.model<IUser>('auth', userSchema);

export default User;
