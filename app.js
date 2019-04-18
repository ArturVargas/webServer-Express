
//Sin Express
const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    let salida = {
        nombre: 'Arturo',
        edad: 20,
        Ciudad: 'Mexico'
    };
    res.write(JSON.stringify(salida));

    //res.write('Hola prrillos');
    res.end();
})
.listen(8080);
console.log('Escuchando en puerto 8080');