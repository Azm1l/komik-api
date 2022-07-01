import fetch from "node-fetch";
import cherio from 'cherio';
import { json } from "express";

const replaceMangaPage = "https://kiryuu.id/manga/"

export const kiryuuDetail = () => new Promise((resolve, reject) => {
    fetch("https://kiryuu.id/manga/hackgu/", {
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
                judul,
                author,
                gambar,
                sinposis,
                //isi['Data']: tempDaftar
            })
            isi['Data'] = tempDaftar;

            resolve(isi)
        })
        .catch(reject)
});



async function getAll() {
    const result = await kiryuuDetail();
    console.log(result);
}
getAll();

