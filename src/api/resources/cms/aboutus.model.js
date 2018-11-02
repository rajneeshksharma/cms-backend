import mongoose from 'mongoose';
const { Schema } = mongoose;

const aboutusSchema = new Schema({
    aboutus: {
        type: String,
        required: [true ,'Aboutus must have some data'],
    },
});

export default mongoose.model('Aboutus', aboutusSchema);