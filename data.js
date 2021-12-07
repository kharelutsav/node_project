// const mongoose = require('mongoose');
// //-------------------------------------------------------------------------------------
// //Schema for signup, login and validation
// //-------------------------------------------------------------------------------------
// const loginSchema = mongoose.Schema(
//     { 
//         username: {type: String, unique:true, required:true},
//         password: {type: String, required:true},
//         email: {type: String, unique:true, required:true},
//         address: {type: String, required:true},
//         phone: {type: Number, required:true}
//     }
// );
// const Login = mongoose.model('Login', loginSchema);

// //-------------------------------------------------------------------------------------
// //Schema for storing class details
// //-------------------------------------------------------------------------------------
// const subjectSchema = mongoose.Schema(
//     {
//         _id: false,
//         subject: {type:String, required:true, unique:true},
//         class: {type:String, required:true},
//         teacher: {type:String, required:true}
//     },
//     {collection: "Subject"}
// )
// const records = mongoose.model('Subject', subjectSchema);


// exports.Login = Login;
// exports.records = records;
