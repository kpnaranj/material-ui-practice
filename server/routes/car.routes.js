//dependencies
import express from "express";
//external dependecies
import carCtrl from "../controllers/car.controller";
//router
const router = express.Router();

router.get("/car", carCtrl.car);

export default router;