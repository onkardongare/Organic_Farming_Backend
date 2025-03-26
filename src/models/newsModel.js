const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true,
        trim: true
    },
    description: { 
        type: String, 
        required: true 
    },
    image: { 
        type: String,
        required: false
    },
    date: { 
        type: Date, 
        default: Date.now,
        get: function(date) {
            return date.toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short',
                year: 'numeric'
            });
        }
    },
    likes: {
        type: Number,
        default: 0
    },
    author: { 
        type: String, 
        required: true,
        trim: true
    },
    category: { 
        type: String, 
        required: true,
        trim: true
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Update the updatedAt field before saving
newsSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

// Convert _id to id for frontend simplicity
newsSchema.virtual('id').get(function() {
    return this._id;
});

// Transform output when converting to JSON
newsSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    getters: true,
    transform: function (doc, ret) {
        delete ret._id;
    }
});

module.exports = mongoose.model("News", newsSchema);
