function networkFetch(url) {
    return `${url} - ответ с сервер`;
}

const cache = new Set();
const proxyFetch = new Proxy(networkFetch, {
    apply(target, thisArg, args){
        const url = args[0];
        if(cache.has(url)){
            return `${url} - ответ c кэша`;
        } else {
            cache.add(url);
            return Reflect.apply(target, thisArg, args);
        }
    }
})

console.log(proxyFetch('https://avada-media.ua/'));
console.log(proxyFetch('https://avada-newmedia.ua/'));
console.log(proxyFetch('https://avada-media.ua/'));