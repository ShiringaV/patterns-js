function networkFetch(url) {
    return `${url} - response from server`;
}

const cache = new Set();
const proxyFetch = new Proxy(networkFetch, {
    apply(target, thisArg, args){
        const url = args[0];
        if(cache.has(url)){
            return `${url} - response from cache`;
        } else {
            cache.add(url);
            return Reflect.apply(target, thisArg, args);
        }
    }
})

console.log(proxyFetch('https://avada-media.ua/'));
console.log(proxyFetch('https://google.com/'));
console.log(proxyFetch('https://avada-media.ua/'));