const mongoose = require('mongoose')
const validateMongoDbid = (id) =>{
    const isVaid = mongoose.Types.ObjectId.isValid(id)
    if(!isVaid) throw new Error('this id is not valid')
}

module.exports = validateMongoDbid