import mongoose from 'mongoose';
const { Schema } = mongoose;

const cmsPageSchema = new Schema({
    slug: {
        type: String,
        required: [true ,'Slug must have some data'],
    },
    content: {
        type: String,
        required: [true ,'Content must have some data'],
    },
    title: {
        type: String,
        required: [true ,'Title must have some data'],
    }
});

export default mongoose.model('CmsPage', cmsPageSchema);