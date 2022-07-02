import express from "express";
import { showKomik, showKomikDetail, searchKomik, showKomikChapter } from "../controller/kiryuu.js";

const router = express.Router();

//tampilkan data komik
router.get("/kiryuu/page/:pagenumber", showKomik);

router.get("/kiryuu/manga/:slug", showKomikDetail);

router.get("/kiryuu/search/:cari", searchKomik);

router.get("/kiryuu/:slug", showKomikChapter);

export default router;

