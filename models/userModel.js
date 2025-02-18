const {Schema , model } = require('../connection');

const mySchema = new Schema({
    name: String,
    email: {type:String, unique:true},
    password:{type:String, require:true},
    createdAt: {
        type: Date,
        default: Date.now
    }

});

// const newSchema = new Schema({
//     title: String,
//     price: Number,
//     description: String,
//     category: String,
//     image: String
// });

module.exports =  model('User', mySchema);