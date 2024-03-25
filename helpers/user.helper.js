const User = require("../models/user.model")

async function findLastInsertedUser() {
    console.log("Find last inserte user")

    try {
        const result = await User.find({}).sort({_id:-1}).limit(1);
        return result[0];
    }catch(err){
        console.log("TEST---Problem finding user")
        return false
    }
}

module.exports= {findLastInsertedUser};