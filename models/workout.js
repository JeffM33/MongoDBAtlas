const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// need to create model using this
const workoutSchema = new Schema ({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter a name for resistance"
            },
            name: {
                type: String,
                trim: true,
                required: "Enter a name for resistance"
            },
            duration: { 
                type: String,
                trim: true,
                required: "Enter an amount of resistance Duration"
            },
            weight: {
                type: Number,
                trim: true,
            },
            reps: {
                type: Number,
                trim: true,
            },
            sets: {
                type: Number,
                trim: true,
            },
            distance: {
                type: Number,
                trim: true,
            }
        }
    ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;