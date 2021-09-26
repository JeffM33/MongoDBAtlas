const router = require('express').Router();
const stats = require('./statsRoutes');
const workout = require('./workoutRoutes');
const exercise = require('./exerciseRoutes');

// need route to stats
// need route to Workout
// need route to exercise
router.use('/stats', stats);
router.use('/workout', workout);
router.use('/exercise', exercise);

module.exports = router;


