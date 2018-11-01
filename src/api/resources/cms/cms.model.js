import mongoose from 'mongoose';
const { Schema } = mongoose;

const cmsSchema = new Schema({
    home: {
        type: String
    },
    contactus: {
        type: String
    },
    aboutus: {
        type: String
    },
});

export default mongoose.model('CMS', cmsSchema);