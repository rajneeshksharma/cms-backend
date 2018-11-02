import mongoose from 'mongoose';
const { Schema } = mongoose;

const contactusSchema = new Schema({
    contactus: {
        type: String,
        required: [true ,'Contactus must have some data'],
    },
});

export default mongoose.model('Contactus', contactusSchema);