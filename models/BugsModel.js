const mongoose = require("mongoose")
const BugsModel = mongoose.model(
    "BugsModel",
    {
        title: {
            type: String,
            default: '',
        },
        description: {
            type: String,
            default: '',
        },
        resolved: {
            type: Boolean,
            default: false,
        },
        projectId: {
            type: String,
            default: '',
        },
        index: {
            type: Number,
        },
    },
    "bugs"
)

module.exports = {BugsModel}