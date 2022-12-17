const mongoose = require("mongoose")
const FeaturesModel = mongoose.model(
    "FeaturesModel",
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        developed: {
            type: Boolean,
            default: false,
        },
        projectId: {
            type: Number,
            required: true,
        },
    },
    "features"
)

module.exports = {FeaturesModel}