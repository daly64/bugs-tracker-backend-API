const mongoose = require("mongoose")
const BugsModel = mongoose.model(
    "bugsTracker",
    {
        id: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        resolved: {
            type: Boolean,
            default: false,
        },
    },
    "bugs"
)

module.exports = {BugsModel}