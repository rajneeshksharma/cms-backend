import mongoose from 'mongoose';
const { Schema } = mongoose;

const homeSchema = new Schema({
    home: {
        type: String,
        required: [true ,'Home must have some data'],
    },
});

export default mongoose.model('Home', homeSchema);