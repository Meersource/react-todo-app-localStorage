// let casheData = 'appV1';
// const urlsToCache = [ 'index.html', 'offline.html' ];
// this.addEventListener("install", (event) => {
//     event.waitUntil(
//         caches.open(casheData).then(cache => {
//             cache.addAll(urlsToCache)
//         })
//     )
// })

// // this.addEventListener("fetch", (event) => {
// //     event.respondWith(
// //         caches.match(event.request).then(result => {
// //             if(result) {
// //                 return result
// //             }
// //         })
// //     )
// // })