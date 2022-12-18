const mongoose = require("mongoose")
const BugsModel = mongoose.model(
    "BugsModel",
    {
        id: {
            type: Number,
            default: Date.now(),
        },
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
    },
    "bugs"
)

module.exports = {BugsModel}