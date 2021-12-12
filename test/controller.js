const mongoose = require('mongoose');
const {records, Login, nonsense} = require('./models')

// const login = new Login({
//     _id: new mongoose.Types.ObjectId(),
//     username: 'uname',
//     password: 'pass',
//     email: 'Email',
//     address: 'Pth',
//     phone: 9869733555
// })

// login.save(
//     () => {
//         const record = new records({
//             _id: login._id,
//             subject: 'Computing',
//             class: 'Bachelor',
//             teacher: 'Intern'
//         })
//         record.save(
//             () => {
//                 const nonsenses = new nonsense({
//                     _id: record._id,
//                     subject: 'Computing',
//                     class: 'Bachelor',
//                     teacher: 'Intern'
//                 })
//                 nonsenses.save()
//             }
//         )
//     }
// )


// Login.find({username: 'uname'}, (err, user)=>{
//     console.log(user);
// });



// records.find({})
// .populate('_id')
// .then(
//     (user)=>{
//         console.log(user);
//     }
// )
// .catch((err)=>{
//     console.log(err);
// });


nonsense.find({})
.populate('_id')
.populate('_id')
.then(
    (user)=>{
        console.log(user);
    }
)
.catch((err)=>{
    console.log(err);
});
