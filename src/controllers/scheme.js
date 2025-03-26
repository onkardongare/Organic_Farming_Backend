const SchemeNews = require('../models/schemeModel');

// Get all scheme news
exports.getAllSchemeNews = async (req, res) => {
    try {
        const news = await SchemeNews.find({ isActive: true })
            .sort({ publishedDate: -1 });
        res.status(200).json(news);
    } catch (error) {
        res.status(500).json(error);
    }
};

// Get single scheme news by ID
exports.getSchemeNewsById = async (req, res) => {
    try {
        const news = await SchemeNews.findById(req.params.id);
        if (!news) {
            return res.status(404).json(error);
        }
        res.status(200).json(news);
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};

// Create new scheme news
exports.createSchemeNews = async (req, res) => {
    try {
        const news = await SchemeNews.create(req.body);
        res.status(201).json({
            success: true,
            data: news
        });
    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(err => err.message);
            return res.status(400).json(messages);
        }
        res.status(500).json(error);
    }
};

// Update scheme news
exports.updateSchemeNews = async (req, res) => {
    try {
        const news = await SchemeNews.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );
        if (!news) {
            return res.status(404).json({error:"not found"});
        }
        res.status(200).json(news);
    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(err => err.message);
            return res.status(400).json(messages);
        }
        res.status(500).json(error);
    }
};

// Delete scheme news (soft delete)
exports.deleteSchemeNews = async (req, res) => {
    try {
        const news = await SchemeNews.findByIdAndUpdate(
            req.params.id,
            { isActive: false },
            { new: true }
        );
        if (!news) {
            return res.status(404).json({error: 'News not found'
            });
        }
        res.status(200);
    } catch (error) {
        res.status(500).json(error);
    }
}; 