import { komik, komikDetail, komikSearch, komikDetailChapter } from "../models/komikModel.js";
import express from "express";


export const showKomik = async (req, res, err) => {
    try {
        let pagenumber = req.params.pagenumber;
        let url =
            pagenumber === "1"
                ? "https://kiryuu.id/manga/"
                : `https://kiryuu.id/manga/?page=${pagenumber}`;
        const hasil = await komik(url)
        res.send(hasil)
    } catch (e) {
        err(e);
    };
}

export const showKomikDetail = async (req, res, err) => {
    try {
        let slug = req.params.slug;
        let endpoint = `https://kiryuu.id/manga/${slug}`
        const detail = await komikDetail(endpoint)
        res.send(detail)
    } catch (e) {
        err(e);
    };
}

export const showKomikChapter = async (req, res, err) => {
    try {
        let slug = req.params.slug;
        const chapter = `https://kiryuu.id/${slug}`
        const detail = await komikDetailChapter(chapter)
        res.send(detail)
    } catch (e) {
        err(e);
    };
}

export const searchKomik = async (req, res, err) => {
    try {
        let cari = req.params.cari;
        let query = `https://kiryuu.id/?s=${cari}`
        const result = await komikSearch(query)
        res.send(result)
    } catch (e) {
        err(e);
    }
}