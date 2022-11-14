const mongoose = require("mongoose")
const FeaturesModel = mongoose.model(
    "FeaturesModel",
    {
        id: {
            type: Number,
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
    },
    "features"
)

module.exports = {FeaturesModel}