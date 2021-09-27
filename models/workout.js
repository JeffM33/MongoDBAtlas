const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// need to create model using this
const workoutSchema = new Schema ({

    nameInput: {
        type: String,
        trim: true,
        required: "Enter a name for resistance"
    },
    weightInput: {
        type: String,
        trim: true,
        required: "Enter an amount of weight"
    },
    setsInput: {
        type: String,
        trim: true,
        required: "Enter an amount of sets"
    },
    repsInput: {
        type: String,
        trim: true,
        required: "Enter an amount of reps per set"
    },
    resistanceDurationInput: {
        type: String,
        trim: true,
        required: "Enter an amount of resistance Duration"
    },
    cardioNameInput: {
        type: String,
        trim: true,
        required: "Enter the name of the cardio exercise"
    },
    durationInput: {
        type: String,
        trim: true,
        required: "Enter an amount of time"
    },
    distanceInput: {
        type: String,
        trim: true,
        required: "Enter the distance traveled"
    },
});


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;