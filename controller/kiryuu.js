import { kiryuu, kiryuuDetail } from "../models/kiryuuModel.js";
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