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
/komik/page/[pagenumber]
```
contoh : http://localhost:5000/komik/page/2


## Detail Komik
Get Detail Comic
```
/kiryuu/[slug]
```
contoh : http://localhost:5000/komik/nano-machine/

## Chapter Detail
Get Detail Comic
```
/komik/detail/[slug]
```
contoh : http://localhost:5000/komik/detail/tokyo-revengers-chapter-223


## Cari Komik
Get Search Comic
```
/komik/search/[cari]
```
contoh : http://localhost:5000/komik/search/naruto/
