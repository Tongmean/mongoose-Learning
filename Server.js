const express = require('express');
const mongoose = require('mongoose');
const app = express();
mongoose.connect('mongodb+srv://Tong:15tongmean@cluster0.9qeqyhn.mongodb.net/Mongoose?retryWrites=true&w=majority')
.then(()=>{
    console.log('database Connected');
}).catch((err)=>{
    console.log(err.message);
});
const User = require('./User');

run();
async function run(){
    try{
        // const user = await User.create({
        //     name: "kyle",
        //     age: 2,
        //     email: 'Test@email.com',
        //     hobbies: ["Weight", "Bowling"],
        //     address: {
        //         street: 'Main str',
        //         city: 'Bangkok',
        //     },
        //     bestFriend: '63490ea5fe2162d17a04f595'
        // })
        //Query command
        //deleteone Need object
        // const user = await User.deleteOne({_id: '63490e6bfe652973930ebc48'})
        //const user = await User.where('bestFriend').equals('kyle').where('age').gt('12').lt('37');
        // const user = await User.where('name').equals('kyle').populate('bestFriend')
        const user = await User.findByName('kyle')
        // user.bestFriend = '63490ea5fe2162d17a04f595';
        // user.sayHi();
        console.log(user);
    } catch (err){
        console.log(err.message);
    }
};


app.listen(3001, (req, res)=>{
    console.log('You work on port 3001');
});