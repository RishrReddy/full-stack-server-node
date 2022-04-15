import mongoose from 'mongoose';
import tuiterSchema from './tuiter-schema.js'
const tuitsModel = mongoose
    .model('TuitModel', tuiterSchema);
export default tuitsModel;