import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar:{
        type: String,
        default: "https://militaryhealthinstitute.org/wp-content/uploads/sites/37/2021/08/blank-profile-picture-png.png"
    },
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;
