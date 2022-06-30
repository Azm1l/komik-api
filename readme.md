# Komik API
Restful API Komik Bahasa Indonesia

# Cara Gunakan Source ini
1. Clone repositori ini
    ```bash
    git clone https://github.com/Azm1l/komik-api.git
    ```
2. Install dependecies (`yarn` or `npm install`)
3. Start the development environment (*if you haven't installed nodemon globally, you can do `npm i nodemon --save`)
    ```bash
    npm run dev or npm run start
    ```
# DOKUMENTASI

## Semua Komik
Get All Comics
```
/kiryuu/page/[pagenumber]
```
contoh : http://localhost:5000/kiryuu/page/2


## Detail Komik
Get Detail Comic
```
/kiryuu/manga/[slug]
```
contoh : http://localhost:5000/kiryuu/manga/nano-machine/

## Cari Komik
Get Search Comic
```
/kiryuu/search/[cari]
```
contoh : http://localhost:5000/kiryuu/search/naruto/