import mongoose, { mongo } from "mongoose";

const userScehema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        socialMediaHandle: {
            type: String,
            required: true
        },
        images:{
            type:[String]
        }
    }
)

export default User = mongoose.model('User',userScehema);