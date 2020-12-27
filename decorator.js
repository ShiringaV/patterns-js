class Server {

    constructor(ip, port) {
        this.ip = ip;
        this.port = port; 
    }

    get url() {
        return `IP сервера ${this.ip}:${this.port}`;
    }
}

function aws(server) {
    server.isAws = true;
    server.awsInfo = function() {
        return server.url;
    }
    return server;
}

function azure(server) {
    server.isAzure = true;
    server.port += 10;
    return server;
}

const s1 = aws(new Server('123.23.12.168', 1010));
const s2 = azure(new Server('123.23.12.168', 1010));

console.log(s1.isAws);
console.log(s1.awsInfo());

console.log(s2.isAzure);
console.log(s2.url);