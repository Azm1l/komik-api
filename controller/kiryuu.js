import { kiryuu, kiryuuDetail, kiryuuSearch, kiryuuDetailChapter } from "../models/kiryuuModel.js";
import express from "express";


export const showKomik = async (req, res, err) => {
    try {
        let pagenumber = req.params.pagenumber;
        let url =
            pagenumber === "1"
                ? "https://kiryuu.id/manga/"
                : `https://kiryuu.id/manga/?page=${pagenumber}`;
        const hasil = await kiryuu(url)
        res.send(hasil)
    } catch (e) {
        err(e);
    };
}

export const showKomikDetail = async (req, res, err) => {
    try {
        let slug = req.params.slug;
        let endpoint = `https://kiryuu.id/manga/${slug}`
        const detail = await kiryuuDetail(endpoint)
        res.send(detail)
    } catch (e) {
        err(e);
    };
}

//https://kiryuu.id/hackgu-chapter-03/
//https://kiryuu.id/manga/hackgu/

export const showKomikChapter = async (req, res, err) => {
    try {
        let slug = req.params.slug;
        let chap = req.params.chap;
        const chapter = `https://kiryuu.id/${slug}}`
        const detail = await kiryuuDetailChapter(chapter)
        res.send(detail)
    } catch (e) {
        err(e);
    };
}

export const searchKomik = async (req, res, err) => {
    try {
        let cari = req.params.cari;
        let query = `https://kiryuu.id/?s=${cari}`
        const result = await kiryuuSearch(query)
        res.send(result)
    } catch (e) {
        err(e);
    }
}