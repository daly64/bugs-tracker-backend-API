const mongoose = require("mongoose")
const BugsModel = mongoose.model(
    "BugsModel",
    {
        title: {
            type: String,
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
        projectId: {
            type: String,
            required: true,
        },
    },
    "bugs"
)

module.exports = {BugsModel}