import mongoose from "mongoose";


const tiktokSchema = mongoose.Schema({
    url: String,
    channel: String, 
    movieTitle: String, 
    likes: String, 
    messages: String, 
    description: String,
    shares: String
})

export default mongoose.model('tiktokVideos', tiktokSchema)