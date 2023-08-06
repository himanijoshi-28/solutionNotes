const mongoose = require("mongoose")

const praticalSchema = mongoose.Schema({
    sem:{
        type:Number,
        require:true
    },
    subject:{
        type:String,
        require:true
    },
    pracNumber:{
        type:Number,
        require:true
    },
    file:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model("practical", praticalSchema)