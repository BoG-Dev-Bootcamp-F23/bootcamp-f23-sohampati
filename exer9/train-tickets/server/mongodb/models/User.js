import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: false
    }
});


export default mongoose.models?.User || mongoose.model("User",UserSchema);

