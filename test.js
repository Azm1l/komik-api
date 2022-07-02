import fetch from "node-fetch";
import cherio from 'cherio';


const replaceMangaPage = "https://kiryuu.id/manga/"

export const kiryuuDetailChapter = () => new Promise((resolve, reject) => {
    fetch("https://kiryuu.id/hackgu-chapter-03/", {
        method: 'GET',
        headers: {
            'authority': 'kiryuu.id',
            'user-agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'
        }
    })
        .then(res => res.text())
        .then(res => {
            const det = cherio.load(res, {
                xmlMode: true
            });
            const data = [];
            const chapterImage = [];
            const chapter_page = [];
            const title = det('div.headpost > h1').text();

            det('#readerarea').find('img').each(function (a, b) {
                chapterImage.push(det(b).attr('src'))
            })

            for (let i = 0; i < chapterImage.length; i++) {
                chapter_page.push({
                    chapter_image_link: chapterImage[i],
                    image_number: i + 1

                })
            }

            data.push({
                title,
                chapter_page
            })

            resolve({
                status: true,
                message: "success",
                data,
                //chapter_page
            })
        })
        .catch(reject)
});






async function getAll() {
    const result = await kiryuuDetailChapter();
    console.log(result);
}
getAll();

