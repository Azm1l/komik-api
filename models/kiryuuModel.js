import fetch from "node-fetch";
import cherio from 'cherio';
import { json } from "express";

const replaceMangaPage = "https://kiryuu.id/manga/";

export const kiryuu = (url) => new Promise((resolve, reject) => {
    fetch(url, {
        method: 'GET',
        headers: {
            'authority': 'kiryuu.id',
            'user-agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'
        }
    })
        .then(res => res.text())
        .then(res => {
            const soup = cherio.load(res)
            const idTitle = [];
            const chapter = [];
            const thum = [];
            const rating = [];
            const hasil = [];
            const endpoin = [];
            soup('div.bsx').each(function (a, b) {
                soup(b).find('div.limit').each(function (c, d) {
                    soup(d).find('img').each(function (g, h) {
                        idTitle.push(soup(h).attr('title'))
                    })
                })
                soup('div.bsx').each(function (c, d) {
                    soup(d).find('div.epxs').each(function (e, f) {
                        chapter.push(soup(f).text())
                    })

                })
                soup('div.bsx').each(function (s, t) {
                    soup(t).find('div.limit').each(function (u, v) {
                        soup(v).find('img').each(function (w, x) {
                            thum.push(soup(x).attr('src'))
                        })
                    })
                })
                soup('div.bsx').each(function (j, k) {
                    soup(k).find('div.numscore').each(function (m, n) {
                        rating.push(soup(n).text())
                    })
                })
                soup('div.bs').each(function (o, p) {
                    soup(p).find('a').each(function (p, q) {
                        endpoin.push(soup(q).attr('href').replace(replaceMangaPage, "http://localhost:5000/kiryuu/manga/"))
                    })
                })
            })
            for (let i = 0; i < idTitle.length; i++) {
                hasil.push({
                    Judul: idTitle[i],
                    Chapter: chapter[i],
                    Rating: rating[i],
                    Endpoint: endpoin[i],
                    Gambar: thum[i]
                })
            }
            resolve({
                status: true,
                message: "succes",
                hasil
            })
        })
        .catch(reject)
});


export const kiryuuDetail = (endpoint) => new Promise((resolve, reject) => {
    fetch(endpoint, {
        method: 'GET',
        headers: {
            'authority': 'kiryuu.id',
            'user-agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'
        }
    })
        .then(res => res.text())
        .then(res => {
            const det = cherio.load(res)
            const judul = det('div.seriestucon > div.seriestuheader > h1').text();
            const sinposis = det('div.seriestucon > div.seriestucontent > div.seriestucontentr > div.seriestuhead > div.entry-content.entry-content-single > p').text();
            const author = det('div.seriestucon > div.seriestucontent > div.seriestucontentr > div.seriestucont > div > table > tbody > tr:nth-child(4) > td:nth-child(2)').text().trim();
            const gambar = det('div.seriestucon > div.seriestucontent > div.seriestucontl > div.thumb > img').attr('src');
            const listChapter = [];
            const listLink = [];
            // let daftar = [];
            const isi = [];
            const tempDaftar = [];

            det('div.eplister').each(function (a, b) {
                det(b).find('div.eph-num').each(function (c, d) {
                    det(d).find('span.chapternum').each(function (g, h) {
                        listChapter.push(det(h).text())
                    })

                })
            })

            det('div.eplister').each(function (a, b) {
                det(b).find('div.eph-num').each(function (c, d) {
                    det(d).find('a').each(function (e, f) {
                        listLink.push(det(f).attr('href'))
                    })
                })
            })

            for (let i = 0; i < listChapter.length; i++) {
                tempDaftar.push({
                    chapter: listChapter[i],
                    link: listLink[i]
                })
            }
            isi.push({
                Judul: judul,
                author,
                gambar,
                sinposis,
                tempDaftar
            })
            //isi['Data'] = tempDaftar

            resolve({
                status: true,
                message: "succes",
                isi
            })
        })
        .catch(reject)
});


export const kiryuuSearch = (query) => new Promise((resolve, reject) => {
    fetch(query, {
        method: 'GET',
        headers: {
            'authority': 'kiryuu.id',
            'user-agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'
        }
    })
        .then(res => res.text())
        .then(res => {
            const ser = cherio.load(res)
            const idTitle = [];
            const chapter = [];
            const thum = [];
            const rating = [];
            const hasil = [];
            const endpoin = [];
            ser('div.bsx').each(function (a, b) {
                ser(b).find('div.limit').each(function (c, d) {
                    ser(d).find('img').each(function (g, h) {
                        idTitle.push(ser(h).attr('title'))
                    })
                })
                ser('div.bsx').each(function (c, d) {
                    ser(d).find('div.epxs').each(function (e, f) {
                        chapter.push(ser(f).text())
                    })

                })
                ser('div.bsx').each(function (s, t) {
                    ser(t).find('div.limit').each(function (u, v) {
                        ser(v).find('img').each(function (w, x) {
                            thum.push(ser(x).attr('src'))
                        })
                    })
                })
                ser('div.bsx').each(function (j, k) {
                    ser(k).find('div.numscore').each(function (m, n) {
                        rating.push(ser(n).text())
                    })
                })
                ser('div.bs').each(function (o, p) {
                    ser(p).find('a').each(function (p, q) {
                        endpoin.push(ser(q).attr('href').replace(replaceMangaPage, "http://localhost:5000/kiryuu/manga/"))
                    })
                })
            })
            for (let i = 0; i < idTitle.length; i++) {
                hasil.push({
                    Judul: idTitle[i],
                    Chapter: chapter[i],
                    Rating: rating[i],
                    Endpoint: endpoin[i],
                    Gambar: thum[i]
                })
            }
            resolve({
                status: true,
                message: "succes",
                hasil
            })
        })
        .catch(reject)
});



