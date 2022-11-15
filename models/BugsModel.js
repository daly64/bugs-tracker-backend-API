const mongoose = require("mongoose")
const BugsModel = mongoose.model(
    "BugsModel",
    {
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