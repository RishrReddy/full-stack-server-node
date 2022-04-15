import mongoose from 'mongoose';
const schema = mongoose.Schema({
    topic : String,
    postedBy: {
        username: { type: String, default: 'Rish' }
    },
    liked: { type: Boolean, default: false },
    disliked: { type: Boolean, default: false },
    verified: { type: Boolean, default: false },
    handle: { type: String, default: "rishr" },
    likes: { type: Number, default: 0 },
    Dislikes: { type: Number, default: 0 },
    time: { type: String, default: "1s" },
    title: String,
    tuit: String,
    attachments: {
        video: String,
        image: String,
    },
    logo: { type: String, default: "/images/elonmusk.jpg" },
    avatar_image: String,
    stats: {
        comments: { type: Number, default: 0 },
        retuits: { type: Number, default: 0 },
        likes: { type: Number, default: 0 }
    }
}, {collection: 'tuiter'});

export default schema;