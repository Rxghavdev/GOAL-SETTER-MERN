const asyncHandeler = require('express-async-handeler ')   
//@desc Get goals               //adding async so database can syc with the database
//@route GET/api/goals      //we can use try catch with async but we dont wanna use hence installing pacakge
// @access private
const getGoals = asyncHandeler(async(req,res) =>{
    res.status(200).json({message:'Get goals'})
})
//@desc Get goals
//@route GET/api/goals
// @access private
const setGoals = asyncHandeler(async(req,res) =>{
    console.log(req.body) 
    if(!req.body.text){
        res.status(400)
        throw  new Error('please add a text field  ')

    }                       //console package log  print variable                       
    res.status(200).json({message:'Set Goal'})               //first argument is get request second is req res fn to send data"string
})
    //@desc set goals
//@route POST/api/goals
// @access private

    //@desc update goals
//@route put/api/goals
// @access private
const updateGoal = asyncHandeler(async(req,res) =>{
    res.status(200).json({message: `Update goal ${req.params.id}`})
})
    //@desc delete goals
//@route delete/api/goals
// @access private
const deleteGoal = asyncHandeler(async(req,res) =>{
    res.status(200).json({message: `Delete goal ${req.params.id}`})
})
module.exports={
    getGoals,
    setGoals,
    updateGoal,
    deleteGoal
}