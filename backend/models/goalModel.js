const mongoose=require('mongoose')
const goalSchema= mongoose.Schema({
    text:{                          //creating an object then type string
        type: String,
        required: [true,'please add a text value']
    }

},{
    timestamps: true,          //automatically creates update and create field                                    //curly braces add objects
})
module.exports=mongoose.model('goal',goalSchema)