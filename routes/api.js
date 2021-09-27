const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// router.post("/api/workout/", ({ body }, res) => {
//   Workout.insertMany(body)
//     .then(dbWorkout => {
//       res.json(dbWorkout);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

//works for hitting no workout
router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({body, params}, res) => {
    Workout.findByIdAndUpdate(params.id,
        {$push: {exercises: body}},
        {new: true, runValidators: true, })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
          .catch(err => {
            res.status(400).json(err);
        });
})


router.get("/api/workouts/range", (req, res) => {
    Workout.aggregate([
        {$addFields: {
            totalDuration: {
                $sum: "$exercises.duration",
            }
        }}
    ])
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
      .catch(err => {
        res.status(400).json(err);
    });
});

// // does not work yet
// router.get("/api/exercises", (req, res) => {
//     Workout.find({})
//       .sort({ date: -1 })
//       .then(dbWorkout => {
//         res.json(dbWorkout);
//       })
//       .catch(err => {
//         res.status(400).json(err);
//       });
// });

// does not work yet
// router.get("/api/stats", (req, res) => {
//     Workout.find({})
//       .sort({ date: -1 })
//       .then(dbWorkout => {
//         res.json(dbWorkout);
//       })
//       .catch(err => {
//         res.status(400).json(err);
//       });
// });

module.exports = router;
