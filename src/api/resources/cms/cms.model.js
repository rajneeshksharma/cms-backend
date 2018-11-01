import mongoose from 'mongoose';
const { Schema } = mongoose;

const cmsSchema = new Schema({
    title: {
        type: String,
        required: [true, 'SOng must have title'],
    },
    url: {
        type: String,
        required: [true, 'Song must have url'],
    },
});

export default mongoose.model('CMS', cmsSchema);