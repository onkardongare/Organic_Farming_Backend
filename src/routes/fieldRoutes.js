const express = require("express");
const router = express.Router();
const {
  createField,
  getAllFields,
  getFieldById,
  updateField,
  deleteField,
} = require("../controllers/field");

router.post("/createField", createField);

router.get("/getAllFields", getAllFields);

router.get("/getFieldById/:id", getFieldById);

router.put("/updateField/:id", updateField);

router.delete("/deleteField/:id", deleteField);

module.exports = router;
