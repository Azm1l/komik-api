import express from "express";
import { showKomik, showKomikDetail } from "../controller/kiryuu.js";

const router = express.Router();

//tampilkan data komik
router.get("/kiryuu/page/:pagenumber", showKomik);

router.get("/kiryuu/manga/:slug", showKomikDetail);


export default router;

