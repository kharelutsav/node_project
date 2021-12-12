require('./db')
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//-------------------------------------------------------------------------------------
//Schema for signup, login and validation
//-------------------------------------------------------------------------------------
const loginSchema = new Schema(
    {
        _id: Schema.Types.ObjectId,
        username: {type: String, required:true},
        password: {type: String, required:true},
        email: {type: String, required:true},
        address: {type: String, required:true},
        phone: {type: Number, required:true}
    }
);

//-------------------------------------------------------------------------------------
//Schema for storing class details
//-------------------------------------------------------------------------------------
const subjectSchema = new Schema(
    {
        _id: {type: Schema.Types.ObjectId, ref: 'Login'},
        subject: {type:String, required:true},
        class: {type:String, required:true},
        teacher: {type:String, required:true}
    }
);

//-------------------------------------------------------------------------------------
//Schema for storing class details
//-------------------------------------------------------------------------------------
const testSchema = new Schema(
    {
        _id: {type: Schema.Types.ObjectId, ref: 'Subject'},
        subject: {type:String, required:true},
        class: {type:String, required:true},
        teacher: {type:String, required:true}
    }
);


exports.Login = mongoose.model('Login', loginSchema);
exports.records =  mongoose.model('Subject', subjectSchema);
exports.nonsense =  mongoose.model('Test', testSchema);
