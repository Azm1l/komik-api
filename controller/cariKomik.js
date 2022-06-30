import fetch from "node-fetch";
import cherio from 'cherio'
import readline from "readline-sync";


export const komiku = () => new Promise((resolve, reject) => {
    // const cari = QUERY;
    fetch('https://data.komiku.id/pustaka/', {
        method: 'GET',
        headers: {
            'authority': 'data.komiku.id',
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'accept-language': 'en-US,en;q=0.9,id;q=0.8',
            'cookie': '_gid=GA1.2.414020414.1656330269; _gat_gtag_UA_167504155_1=1; _ga_Z5L67F199G=GS1.1.1656330268.1.1.1656330332.0; _ga=GA1.1.139628813.1656330269',
            'referer': 'https://data.komiku.id/pustaka/',
            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'document',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-user': '?1',
            'upgrade-insecure-requests': '1',
            'user-agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'
        }
    })
        .then(res => res.text())
        .then(res => {
            const soup = cherio.load(res)
            const idTitle = [];
            const summary = [];
            const thum = [];
            const hasil = [];
            soup('div.daftar').each(function (a, b) {
                soup(b).find('span.judul2').each(function (c, d) {
                    idTitle.push(soup(d).text())
                })
                soup('div.kan').each(function (c, d) {
                    soup(d).find('p').each(function (e, f) {
                        summary.push(soup(f).text())
                    })

                })
                soup('div.bgei').each(function (s, t) {
                    soup(t).find('a').each(function (u, v) {
                        soup(v).find('img').each(function (w, x) {
                            thum.push(soup(x).attr('data-src'))
                        })
                    })
                })
            })
            for (let i = 0; i < idTitle.length; i++) {
                hasil.push({
                    Judul: idTitle[i],
                    Sinopsis: summary[i],
                    Gambar: thum[i]
                })
            }
            resolve(hasil)
        })
        .catch(reject)
});

(async () => {
    try {
        //let QUERY = readline.question('Cari apa?')
        const hasil = await komiku(QUERY);
        console.log(hasil);
    } catch (e) {
        console.log(e)
    }
})();