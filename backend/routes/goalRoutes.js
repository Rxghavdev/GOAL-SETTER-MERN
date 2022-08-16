const express = require("express");
const router = express.Router();
//const app =express.Router()
//const{}=require('../controllers/goalController')
const {
  getGoals,
  setGoals,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

router.route("/").get(getGoals).post(setGoals);
router.route("/:id").delete(deleteGoal).put(updateGoal);

// router.get('/',(req,res) => {
//     res.status(200).json({message:'Get goals'})               //first argument is get request second is req res fn to send data"string
// })
router.post('/', setGoals);

// router.put('/:id',updateGoal)

// router.delete('/:id',deleteGoal)         //all codes are merged above  to make simple

module.exports = router;
