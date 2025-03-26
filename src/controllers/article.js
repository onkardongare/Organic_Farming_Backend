const OrganicArticle = require('../models/articleModel');

// Get all organic articles
exports.getAllOrganicArticles = async (req, res) => {
    try {
        const articles = await OrganicArticle.find()
            .sort({ publishedDate: -1 });
        res.status(200).json(articles);
    } catch (error) {
        res.status(500).json(error);
    }
};

// Get single organic article by ID
exports.getOrganicArticleById = async (req, res) => {
    try {
        const article = await OrganicArticle.findById(req.params.id);
        if (!article) {
            return res.status(404).json(error);
        }
        res.status(200).json(article);
    } catch (error) {
        res.status(500).json(error);
    }
};

// Create new organic article
exports.createOrganicArticle = async (req, res) => {
    try {
        const article = await OrganicArticle.create(req.body);
        res.status(201).json(article)
    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(err => err.message);
            return res.status(400).json(messages);
        }
        res.status(500).json(error);
    }
};

// Update organic article
exports.updateOrganicArticle = async (req, res) => {
    try {
        const article = await OrganicArticle.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );
        if (!article) {
            return res.status(404).json(error);
        }
        res.status(200).json(article);
    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(err => err.message);
            return res.status(400).json(error);
        }
        res.status(500).json(error)
    }
};

// Delete organic article (soft delete)
exports.deleteOrganicArticle = async (req, res) => {
    try {
        const article = await OrganicArticle.findByIdAndUpdate(
            req.params.id,
            { isPublished: false },
            { new: true }
        );
        if (!article) {
            return res.status(404).json(error);
        }
        res.status(200);
    } catch (error) {
        res.status(500).json(error);
    }
}; 