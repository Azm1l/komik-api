import express from "express";
import { showKomik, showKomikDetail, searchKomik, showKomikChapter } from "../controller/komik.js";

const router = express.Router();

//tampilkan data komik
router.get("/komik/page/:pagenumber", showKomik);

router.get("/komik/:slug", showKomikDetail);

router.get("/komik/search/:cari", searchKomik);

router.get("/komik/detail/:slug", showKomikChapter);

export default router;

