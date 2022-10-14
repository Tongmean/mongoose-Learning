const mongoose = require('mongoose');
const addressSchema = new mongoose.Schema({
    street: String,
    city: String
});

const userSchema = new mongoose.Schema({
    name: String,
    age: {
        type: Number,
        min: 1,
        mix:100,
        validate: {
            validator: v => v % 2 === 0,
            message: props => `${props.value} is not even Number`
        }
    },
    email: {
        type: String,
        required: true,
        lowercase: true     
    },
    createAt: {
        type: Date,
        //Unable to Change
        immutable: true,
        default: ()=> Date.now()
    },
    bestFriend:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    updateAt: {
        type: Date,
        default: ()=> Date.now()
    },
    bestFriend: mongoose.SchemaTypes.ObjectId,
    hobbies: [String],
    address: addressSchema,
});

//Schema Method
userSchema.methods.sayHi = function(){
    console.log(`Hi, My name is ${this.name}`);
}
//Static Method
userSchema.statics.findByName = function(name){
    return this.where({name: new RegExp(name, 'i')})
};



module.exports = mongoose.model('User', userSchema);