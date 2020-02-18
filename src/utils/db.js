import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.Promise = global.Promise;

const connection = mongoose.connect(process.env.MONGODB_URI, {
    autoIndex: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    poolSize: 50,
    bufferMaxEntries: 0,
    keepAlive: 120,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.set('useCreateIndex', true);

connection
    .then(db => db)
    .catch(err => {
        console.log(err);
    });

export default connection;
