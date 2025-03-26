const express = require('express');
const router = express.Router();
const {
    getAllOrganicArticles,
    getOrganicArticleById,
    createOrganicArticle,
    updateOrganicArticle,
    deleteOrganicArticle
} = require('../controllers/article');

// Get all organic articles
router.get('/getAllArticles', getAllOrganicArticles);

// Get single organic article
router.get('/getArticle/:id', getOrganicArticleById);

// Create new organic article
router.post('/createArticle', createOrganicArticle);

// Update organic article
router.put('/updateArticle/:id', updateOrganicArticle);

// Delete organic article
router.delete('/deleteArticle/:id', deleteOrganicArticle);

module.exports = router; 