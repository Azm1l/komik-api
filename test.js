import fetch from "node-fetch";
import cherio from 'cherio';

const replaceMangaPage = "https://kiryuu.id/manga/"

export const kiryuuSearch = () => new Promise((resolve, reject) => {
    fetch("https://kiryuu.id/?s=aku", {
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
            resolve(hasil)
        })
        .catch(reject)
});



async function getAll() {
    const result = await kiryuuSearch();
    console.log(result);
}
getAll();

