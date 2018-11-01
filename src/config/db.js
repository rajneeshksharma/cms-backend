import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

export const connect = () => mongoose.connect('mongodb://localhost/cms_app', {
    useCreateIndex: true,
    useNewUrlParser: true
});