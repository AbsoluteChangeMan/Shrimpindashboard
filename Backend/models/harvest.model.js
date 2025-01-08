const mongoose = require('mongoose');

const HarvestSchema = mongoose.Schema(
    {
        value: {
            type: Number,
            required: true
        }
    }
)

const Harvest = mongoose.model("Harvest" , HarvestSchema);
module.exports = Harvest;
// const HarvestSchema = mongoose.Schema(
//     {
//         year: {
//             type: Number
//         },
//         cycle: {
//             type: Number,
//             required: true
//         },
//         partial: {
//             type: String,
//             required: true,
//             validate: {
//                 validator: function(value) {
//                     return /^P\d+$|^Final$/.test(value);
//                 },
//                 message: props => `${props.value} is not a valid partial value. It must be "P" followed by a positive integer or the string "Final".`
//             }
//         }
//     }
// )