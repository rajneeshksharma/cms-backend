import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

export const connect = () => mongoose.connect('mongodb://root:root123@ds063779.mlab.com:63779/rkcms-app', {
    useCreateIndex: true,
    useNewUrlParser: true
});