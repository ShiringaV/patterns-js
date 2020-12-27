class CarAccess {
	open() {
		console.log('Opening car door')
	}

	close() {
		console.log('Closing the car door')
	}
};

class SecuritySystem {
	constructor(door) {
		this.door = door;
	}

	open(password) {
		if (this.authenticate(password)) {
			this.door.open();
		} else {
			console.log('Access denied!');
		}
	}

	authenticate(password) {
		return password === 'Ilon';
	}

	close(password) {
        if (this.authenticate(password)) {
			this.door.close();
		} else {
			console.log('Access denied!');
		}
	}
};

const c1 = new SecuritySystem(new CarAccess);

c1.close('asa')
c1.open('Ilon');
c1.close('Ilon')

// Пример 2
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
console.log(proxyFetch('https://avada-newmedia.ua/'));
console.log(proxyFetch('https://avada-media.ua/'));