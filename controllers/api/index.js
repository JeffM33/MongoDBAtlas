const router = require('express').Router();
const workout = require('./workoutRoutes');

// need route to Workout
router.use('/workout', workout);


module.exports = router;


