const asyncHandeler = require('express-async-handler')   
//@desc Get goals               //adding async so database can syc with the database
//@route GET/api/goals      //we can use try catch with async but we dont wanna use hence installing pacakge
// @access private
const Goal=require('../models/goalModel') //this ll have bunch of methods from mongoose to update del data
const getGoals = asyncHandeler(async(req,res) =>{
    const goals= await Goal.find()              //creating variable goals then we can get it here through our database by using find fn (user)
    res.status(200).json(goals)
})
//@desc Get goals
//@route GET/api/goals
// @access private
const setGoals = asyncHandeler(async(req,res) =>{
    // console.log(req.body) 
    if(!req.body.text){
        res.status(400)
        throw  new Error('please add a text field  ')

    }
    const goal=await Goal.create({
        text: req.body.text
    })                    //console package log  print variable                       
    res.status(200).json(goal)               //first argument is get request second is req res fn to send data"string
}) 
    //@desc set goals
//@route POST/api/goals
// @access private

    //@desc update goals
//@route put/api/goals
// @access private
const updateGoal = asyncHandeler(async(req,res) =>{
    const goal=await Goal.findById(req.params.id)       //checking id so we can update
    if(!goal){
        res.status(400)
        throw new Error('goal not found')
    }
    const updatedGoal=await Goal.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
    })
    res.status(200).json(updatedGoal)
})
    //@desc delete goals
//@route delete/api/goals
// @access private
const deleteGoal = asyncHandeler(async(req,res) =>{
   await goal.remove
    res.status(200).json({id: req.params.id})
    
})
module.exports={
    getGoals,
    setGoals,
    updateGoal,
    deleteGoal
}