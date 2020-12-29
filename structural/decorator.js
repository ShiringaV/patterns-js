class Server {

    constructor(ip, port) {
        this.ip = ip;
        this.port = port; 
    }

    get url() {
        return `IP: ${this.ip}:${this.port}`;
    }
}

function aws(server) {
    server.isAws = true;
    server.awsInfo = function() {
        return `${server.url} | Runs on AWS`;
    }
    return server;
}

const server = aws(new Server('123.23.12.168', 8080));

console.log(server.awsInfo());
console.log(server.isAws ? 'Amazon Web Services' : 'Does not work on AWS');