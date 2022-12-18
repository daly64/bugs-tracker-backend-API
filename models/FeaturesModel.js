const mongoose = require("mongoose")
const FeaturesModel = mongoose.model(
    "FeaturesModel",
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
        developed: {
            type: Boolean,
            default: false,
        },
        projectId: {
            type: String,
            default: '',
        },
    },
    "features"
)

module.exports = {FeaturesModel}