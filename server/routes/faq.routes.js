//dependencies
import express from "express";
//external dependecies
import faqCtrl from "../controllers/faq.controller";
//router
const router = express.Router();

router.get("/faq", faqCtrl.faq);


export default router;
