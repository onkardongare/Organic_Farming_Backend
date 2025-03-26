const mongoose = require('mongoose');

const schemeNewsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    photo_url: {
        type: String,
        required: false
    },
    link: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
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
    isActive: {
        type: Boolean,
        default: true
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
schemeNewsSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

// to convert a _id to id for frontend simplicity
schemeNewsSchema.virtual('id').get(function() {
    return this._id;
});

// Transform output when converting to JSON
schemeNewsSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    getters: true,
    transform: function (doc, ret) {
        delete ret._id;
    }
});

module.exports = mongoose.model('SchemeNews', schemeNewsSchema); 