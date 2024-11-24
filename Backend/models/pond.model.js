const mongoose = require('mongoose');

const PondSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required
        }
    }
)