import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

export const connect = () => mongoose.connect('mongodb://localhost/cms_app2', {
    useCreateIndex: true,
    useNewUrlParser: true
});