//dependencies
import express from "express";
//external dependecies
import carCtrl from "../controllers/car.controller";
//router
const router = express.Router();

router.get("/faq", carCtrl.faq);

export default router;