import express from "express";

import {
    AddProperties,
    GetProperties,
    GetPropertyDetailes,
} from "../controllers/properties.js";

const router = express.Router();

router.post("/add", AddProperties);
router.get("/get", GetProperties);
router.get("/:id", GetPropertyDetailes);

export default router;