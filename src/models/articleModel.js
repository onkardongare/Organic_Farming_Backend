const mongoose = require('mongoose');

const organicArticleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    keyPoints: [{
        type: String,
        trim: true
    }],
    category: {
        type: String,
        required: true,
        trim: true
    },
    publishedDate: {
        type: Date,
        default: Date.now
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
organicArticleSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

// to convert a _id to id for frontend simplicity
organicArticleSchema.virtual('id').get(function() {
    return this._id;
})

// Transform output when converting to JSON
organicArticleSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    }
});
module.exports = mongoose.model('OrganicArticle', organicArticleSchema); 