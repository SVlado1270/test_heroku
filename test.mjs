import http from 'http'
import dotenv from 'dotenv'
import mysql from 'mysql'
export default mysql
dotenv.config()

const connection = mysql.createConnection({
    host: process.env.dbHost,
    user: process.env.dbUser,
    password: process.env.dbPassword,
    database: process.env.dbName
})

connection.connect(function (err) {
    if (err) {
        console.log('error: ' + err.message)
    }
    console.log('Connection established')
})

var server = http.createServer(function (req, res) {

    // api
    if (req.method == 'GET') {
        if (req.url === '/IASI/educatie') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'IASI';
            var temp = 'SELECT * FROM educatie WHERE JUDET = ' + mysql.escape(judet);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/IASI/varste') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'IASI';
            var temp = 'SELECT * FROM varste WHERE JUDET = ' + mysql.escape(judet);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/IASI/rata') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'IASI';
            var temp = 'SELECT * FROM rata WHERE JUDET = ' + mysql.escape(judet);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/IASI/medii') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'IASI';
            var judet2 = ' IASI';
            var temp = 'SELECT * FROM medii WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/BOTOSANI/educatie') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'BOTOSANI';
            var temp = 'SELECT * FROM educatie WHERE JUDET = ' + mysql.escape(judet);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })
        }
        if (req.url === '/BOTOSANI/varste') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'BOTOSANI';
            var temp = 'SELECT * FROM varste WHERE JUDET = ' + mysql.escape(judet);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/BOTOSANI/rata') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'BOTOSANI';
            var temp = 'SELECT * FROM rata WHERE JUDET = ' + mysql.escape(judet);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/BOTOSANI/medii') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'BOTOSANI';
            var judet2 = ' BOTOSANI';
            var temp = 'SELECT * FROM medii WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/SUCEAVA/educatie') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'SUCEAVA';
            var temp = 'SELECT * FROM educatie WHERE JUDET = ' + mysql.escape(judet);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/SUCEAVA/varste') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'SUCEAVA';
            var temp = 'SELECT * FROM varste WHERE JUDET = ' + mysql.escape(judet);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/SUCEAVA/rata') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'SUCEAVA';
            var temp = 'SELECT * FROM rata WHERE JUDET = ' + mysql.escape(judet);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/SUCEAVA/medii') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'SUCEAVA';
            var judet2 = ' SUCEAVA';
            var temp = 'SELECT * FROM medii WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/MARAMURES/educatie') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'MARAMURES';
            var temp = 'SELECT * FROM educatie WHERE JUDET = ' + mysql.escape(judet);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/MARAMURES/varste') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'MARAMURES';
            var temp = 'SELECT * FROM varste WHERE JUDET = ' + mysql.escape(judet);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/MARAMURES/rata') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'MARAMURES';
            var temp = 'SELECT * FROM rata WHERE JUDET = ' + mysql.escape(judet);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/MARAMURES/medii') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'MARAMURES';
            var judet2 = ' MARAMURES';
            var temp = 'SELECT * FROM medii WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }

        if (req.url === '/SATUMARE/educatie') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'SATU MARE';
            var judet = 'SATU M.'
            var temp = 'SELECT * FROM educatie WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/SATUMARE/varste') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'SATU MARE';
            var judet = 'SATU M.'
            var temp = 'SELECT * FROM varste WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/SATUMARE/rata') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'SATU MARE';
            var judet = 'SATU M.'
            var temp = 'SELECT * FROM rata WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/SATUMARE/medii') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'SATU MARE';
            var judet = 'SATU M.'
            var temp = 'SELECT * FROM medii WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }

        if (req.url === '/NEAMT/educatie') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'NEAMT';
            var temp = 'SELECT * FROM educatie WHERE JUDET = ' + mysql.escape(judet);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/NEAMT/varste') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'NEAMT';
            var temp = 'SELECT * FROM varste WHERE JUDET = ' + mysql.escape(judet);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/NEAMT/rata') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'NEAMT';
            var temp = 'SELECT * FROM rata WHERE JUDET = ' + mysql.escape(judet);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/NEAMT/medii') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'NEAMT';
            var judet2 = ' NEAMT';
            var temp = 'SELECT * FROM medii WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/HARGHITA/educatie') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'HARGHITA';
            var judet2 = ' HARGHITA';
            var temp = 'SELECT * FROM educatie WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/HARGHITA/varste') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'HARGHITA';
            var judet2 = ' HARGHITA';
            var temp = 'SELECT * FROM varste WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/HARGHITA/rata') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'HARGHITA';
            var judet2 = ' HARGHITA';
            var temp = 'SELECT * FROM rata WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/HARGHITA/medii') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'HARGHITA';
            var judet2 = ' HARGHITA';
            var temp = 'SELECT * FROM medii WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }

        if (req.url === '/MURES/educatie') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'MURES';
            var judet2 = ' MURES';
            var temp = 'SELECT * FROM educatie WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/MURES/varste') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'MURES';
            var judet2 = ' MURES';
            var temp = 'SELECT * FROM varste WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/MURES/rata') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'MURES';
            var judet2 = ' MURES';
            var temp = 'SELECT * FROM rata WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/MURES/medii') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'MURES';
            var judet2 = ' MURES';
            var temp = 'SELECT * FROM medii WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/BISTRITA/educatie') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'BISTRITA';
            var judet2 = ' BISTRITA';
            var temp = 'SELECT * FROM educatie WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/BISTRITA/varste') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'BISTRITA';
            var judet2 = ' BISTRITA';
            var temp = 'SELECT * FROM varste WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/BISTRITA/rata') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'BISTRITA';
            var judet2 = ' BISTRITA';
            var temp = 'SELECT * FROM rata WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/BISTRITA/medii') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'BISTRITA';
            var judet2 = ' BISTRITA';
            var temp = 'SELECT * FROM medii WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/CLUJ/educatie') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'CLUJ';
            var judet2 = ' CLUJ';
            var temp = 'SELECT * FROM educatie WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/CLUJ/varste') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'CLUJ';
            var judet2 = ' CLUJ';
            var temp = 'SELECT * FROM varste WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/CLUJ/rata') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'CLUJ';
            var judet2 = ' CLUJ';
            var temp = 'SELECT * FROM rata WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/CLUJ/medii') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'CLUJ';
            var judet2 = ' CLUJ';
            var temp = 'SELECT * FROM medii WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/SALAJ/educatie') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'SALAJ';
            var judet2 = ' SALAJ';
            var temp = 'SELECT * FROM educatie WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/SALAJ/varste') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'SALAJ';
            var judet2 = ' SALAJ';
            var temp = 'SELECT * FROM varste WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/SALAJ/rata') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'SALAJ';
            var judet2 = ' SALAJ';
            var temp = 'SELECT * FROM rata WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/SALAJ/medii') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'SALAJ';
            var judet2 = ' SALAJ';
            var temp = 'SELECT * FROM medii WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/BIHOR/educatie') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'BIHOR';
            var judet2 = ' BIHOR';
            var temp = 'SELECT * FROM educatie WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/BIHOR/varste') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'BIHOR';
            var judet2 = ' BIHOR';
            var temp = 'SELECT * FROM varste WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/BIHOR/rata') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'BIHOR';
            var judet2 = ' BIHOR';
            var temp = 'SELECT * FROM rata WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/BIHOR/medii') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'BIHOR';
            var judet2 = ' BIHOR';
            var temp = 'SELECT * FROM medii WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/VASLUI/educatie') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'VASLUI';
            var judet2 = ' VASLUI';
            var temp = 'SELECT * FROM educatie WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/VASLUI/varste') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'VASLUI';
            var judet2 = ' VASLUI';
            var temp = 'SELECT * FROM varste WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/VASLUI/rata') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'VASLUI';
            var judet2 = ' VASLUI';
            var temp = 'SELECT * FROM rata WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/VASLUI/medii') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'VASLUI';
            var judet2 = ' VASLUI';
            var temp = 'SELECT * FROM medii WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/BACAU/educatie') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'BACAU';
            var judet2 = ' BACAU';
            var temp = 'SELECT * FROM educatie WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/BACAU/varste') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'BACAU';
            var judet2 = ' BACAU';
            var temp = 'SELECT * FROM varste WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/BACAU/rata') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'BACAU';
            var judet2 = ' BACAU';
            var temp = 'SELECT * FROM rata WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/BACAU/medii') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'BACAU';
            var judet2 = ' BACAU';
            var temp = 'SELECT * FROM medii WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/COVASNA/educatie') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'COVASNA';
            var judet2 = ' COVASNA';
            var temp = 'SELECT * FROM educatie WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/COVASNA/varste') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'COVASNA';
            var judet2 = ' COVASNA';
            var temp = 'SELECT * FROM varste WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/COVASNA/rata') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'COVASNA';
            var judet2 = ' COVASNA';
            var temp = 'SELECT * FROM rata WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/COVASNA/medii') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'COVASNA';
            var judet2 = ' COVASNA';
            var temp = 'SELECT * FROM medii WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/BRASOV/educatie') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'BRASOV';
            var judet2 = ' BRASOV';
            var temp = 'SELECT * FROM educatie WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/BRASOV/varste') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'BRASOV';
            var judet2 = ' BRASOV';
            var temp = 'SELECT * FROM varste WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/BRASOV/rata') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'BRASOV';
            var judet2 = ' BRASOV';
            var temp = 'SELECT * FROM rata WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/BRASOV/medii') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'BRASOV';
            var judet2 = ' BRASOV';
            var temp = 'SELECT * FROM medii WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/BRASOV/educatie') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'BRASOV';
            var judet2 = ' BRASOV';
            var temp = 'SELECT * FROM educatie WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/BRASOV/varste') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'BRASOV';
            var judet2 = ' BRASOV';
            var temp = 'SELECT * FROM varste WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/BRASOV/rata') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'BRASOV';
            var judet2 = ' BRASOV';
            var temp = 'SELECT * FROM rata WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/BRASOV/medii') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'BRASOV';
            var judet2 = ' BRASOV';
            var temp = 'SELECT * FROM medii WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/ALBA/educatie') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'ALBA';
            var judet2 = ' ALBA';
            var temp = 'SELECT * FROM educatie WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/ALBA/varste') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'ALBA';
            var judet2 = ' ALBA';
            var temp = 'SELECT * FROM varste WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/ALBA/rata') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'ALBA';
            var judet2 = ' ALBA';
            var temp = 'SELECT * FROM rata WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/ALBA/medii') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'ALBA';
            var judet2 = ' ALBA';
            var temp = 'SELECT * FROM medii WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/HUNEDOARA/educatie') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'HUNEDOARA';
            var judet2 = ' HUNEDOARA';
            var temp = 'SELECT * FROM educatie WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/HUNEDOARA/varste') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'HUNEDOARA';
            var judet2 = ' HUNEDOARA';
            var temp = 'SELECT * FROM varste WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/HUNEDOARA/rata') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'HUNEDOARA';
            var judet2 = ' HUNEDOARA';
            var temp = 'SELECT * FROM rata WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/HUNEDOARA/medii') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'HUNEDOARA';
            var judet2 = ' HUNEDOARA';
            var temp = 'SELECT * FROM medii WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/ARAD/educatie') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'ARAD';
            var judet2 = ' ARAD';
            var temp = 'SELECT * FROM educatie WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/ARAD/varste') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'ARAD';
            var judet2 = ' ARAD';
            var temp = 'SELECT * FROM varste WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/ARAD/rata') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'ARAD';
            var judet2 = ' ARAD';
            var temp = 'SELECT * FROM rata WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/ARAD/medii') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'ARAD';
            var judet2 = ' ARAD';
            var temp = 'SELECT * FROM medii WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/GALATI/educatie') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'GALATI';
            var judet2 = ' GALATI';
            var temp = 'SELECT * FROM educatie WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/GALATI/varste') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'GALATI';
            var judet2 = ' GALATI';
            var temp = 'SELECT * FROM varste WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/GALATI/rata') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'GALATI';
            var judet2 = ' GALATI';
            var temp = 'SELECT * FROM rata WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/GALATI/medii') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'GALATI';
            var judet2 = ' GALATI';
            var temp = 'SELECT * FROM medii WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/VRANCEA/educatie') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'VRANCEA';
            var judet2 = ' VRANCEA';
            var temp = 'SELECT * FROM educatie WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/VRANCEA/varste') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'VRANCEA';
            var judet2 = ' VRANCEA';
            var temp = 'SELECT * FROM varste WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/VRANCEA/rata') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'VRANCEA';
            var judet2 = ' VRANCEA';
            var temp = 'SELECT * FROM rata WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/VRANCEA/medii') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'VRANCEA';
            var judet2 = ' VRANCEA';
            var temp = 'SELECT * FROM medii WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/VRANCEA/educatie') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'VRANCEA';
            var judet2 = ' VRANCEA';
            var temp = 'SELECT * FROM educatie WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/VRANCEA/varste') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'VRANCEA';
            var judet2 = ' VRANCEA';
            var temp = 'SELECT * FROM varste WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/VRANCEA/rata') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'VRANCEA';
            var judet2 = ' VRANCEA';
            var temp = 'SELECT * FROM rata WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/VRANCEA/medii') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'VRANCEA';
            var judet2 = ' VRANCEA';
            var temp = 'SELECT * FROM medii WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/PRAHOVA/educatie') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'PRAHOVA';
            var judet2 = ' PRAHOVA';
            var temp = 'SELECT * FROM educatie WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/PRAHOVA/varste') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'PRAHOVA';
            var judet2 = ' PRAHOVA';
            var temp = 'SELECT * FROM varste WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/PRAHOVA/rata') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'PRAHOVA';
            var judet2 = ' PRAHOVA';
            var temp = 'SELECT * FROM rata WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/PRAHOVA/medii') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'PRAHOVA';
            var judet2 = ' PRAHOVA';
            var temp = 'SELECT * FROM medii WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/DAMBOVITA/educatie') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'DAMBOVITA';
            var judet2 = ' DAMBOVITA';
            var temp = 'SELECT * FROM educatie WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/DAMBOVITA/varste') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'DAMBOVITA';
            var judet2 = ' DAMBOVITA';
            var temp = 'SELECT * FROM varste WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/DAMBOVITA/rata') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'DAMBOVITA';
            var judet2 = ' DAMBOVITA';
            var temp = 'SELECT * FROM rata WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/DAMBOVITA/medii') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'DAMBOVITA';
            var judet2 = ' DAMBOVITA';
            var temp = 'SELECT * FROM medii WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/ARGES/educatie') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'ARGES';
            var judet2 = ' ARGES';
            var temp = 'SELECT * FROM educatie WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/ARGES/varste') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'ARGES';
            var judet2 = ' ARGES';
            var temp = 'SELECT * FROM varste WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/ARGES/rata') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'ARGES';
            var judet2 = ' ARGES';
            var temp = 'SELECT * FROM rata WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/ARGES/medii') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'ARGES';
            var judet2 = ' ARGES';
            var temp = 'SELECT * FROM medii WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/VALCEA/educatie') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'VALCEA';
            var judet2 = ' VALCEA';
            var temp = 'SELECT * FROM educatie WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/VALCEA/varste') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'VALCEA';
            var judet2 = ' VALCEA';
            var temp = 'SELECT * FROM varste WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/VALCEA/rata') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'VALCEA';
            var judet2 = ' VALCEA';
            var temp = 'SELECT * FROM rata WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/VALCEA/medii') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'VALCEA';
            var judet2 = ' VALCEA';
            var temp = 'SELECT * FROM medii WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/GORJ/educatie') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'GORJ';
            var judet2 = ' GORJ';
            var temp = 'SELECT * FROM educatie WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/GORJ/varste') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'GORJ';
            var judet2 = ' GORJ';
            var temp = 'SELECT * FROM varste WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/GORJ/rata') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'GORJ';
            var judet2 = ' GORJ';
            var temp = 'SELECT * FROM rata WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/GORJ/medii') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'GORJ';
            var judet2 = ' GORJ';
            var temp = 'SELECT * FROM medii WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/CARAS/educatie') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = ' CARAS-SEVERIN';
            var judet2 = 'CARAS - SEVERIN';
            var judet3 = 'CARAS';
            var judet4 = ' CARAS';
            var temp = 'SELECT * FROM educatie WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2) + ' OR JUDET = ' + mysql.escape(judet3) + ' OR JUDET = ' + mysql.escape(judet4);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/CARAS/varste') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = ' CARAS-SEVERIN';
            var judet2 = 'CARAS - SEVERIN';
            var judet3 = 'CARAS';
            var judet4 = ' CARAS';
            var temp = 'SELECT * FROM varste WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2) + ' OR JUDET = ' + mysql.escape(judet3) + ' OR JUDET = ' + mysql.escape(judet4);


            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/CARAS/rata') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = ' CARAS-SEVERIN';
            var judet2 = 'CARAS - SEVERIN';
            var judet3 = 'CARAS';
            var judet4 = ' CARAS';
            var temp = 'SELECT * FROM rata WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2) + ' OR JUDET = ' + mysql.escape(judet3) + ' OR JUDET = ' + mysql.escape(judet4);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/CARAS/medii') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = ' CARAS-SEVERIN';
            var judet2 = 'CARAS - SEVERIN';
            var judet3 = 'CARAS';
            var judet4 = ' CARAS';
            var temp = 'SELECT * FROM medii WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2) + ' OR JUDET = ' + mysql.escape(judet3) + ' OR JUDET = ' + mysql.escape(judet4);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/TIMIS/educatie') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'TIMIS';
            var judet2 = ' TIMIS';
            var temp = 'SELECT * FROM educatie WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/TIMIS/varste') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'TIMIS';
            var judet2 = ' TIMIS';
            var temp = 'SELECT * FROM varste WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/TIMIS/rata') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'TIMIS';
            var judet2 = ' TIMIS';
            var temp = 'SELECT * FROM rata WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/TIMIS/medii') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'TIMIS';
            var judet2 = ' TIMIS';
            var temp = 'SELECT * FROM medii WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/MEHEDINTI/educatie') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'MEHEDINTI';
            var judet2 = ' MEHEDINTI';
            var temp = 'SELECT * FROM educatie WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/MEHEDINTI/varste') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'MEHEDINTI';
            var judet2 = ' MEHEDINTI';
            var temp = 'SELECT * FROM varste WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/MEHEDINTI/rata') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'MEHEDINTI';
            var judet2 = ' MEHEDINTI';
            var temp = 'SELECT * FROM rata WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/MEHEDINTI/medii') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'MEHEDINTI';
            var judet2 = ' MEHEDINTI';
            var temp = 'SELECT * FROM medii WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/DOLJ/educatie') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'DOLJ';
            var judet2 = ' DOLJ';
            var temp = 'SELECT * FROM educatie WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/DOLJ/varste') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'DOLJ';
            var judet2 = ' DOLJ';
            var temp = 'SELECT * FROM varste WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/DOLJ/rata') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'DOLJ';
            var judet2 = ' DOLJ';
            var temp = 'SELECT * FROM rata WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/DOLJ/medii') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'DOLJ';
            var judet2 = ' DOLJ';
            var temp = 'SELECT * FROM medii WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/OLT/educatie') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'OLT';
            var judet2 = ' OLT';
            var temp = 'SELECT * FROM educatie WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/OLT/varste') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'OLT';
            var judet2 = ' OLT';
            var temp = 'SELECT * FROM varste WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/OLT/rata') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'OLT';
            var judet2 = ' OLT';
            var temp = 'SELECT * FROM rata WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/OLT/medii') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'OLT';
            var judet2 = ' OLT';
            var temp = 'SELECT * FROM medii WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/TELEORMAN/educatie') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'TELEORMAN';
            var judet2 = ' TELEORMAN';
            var temp = 'SELECT * FROM educatie WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/TELEORMAN/varste') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'TELEORMAN';
            var judet2 = ' TELEORMAN';
            var temp = 'SELECT * FROM varste WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/TELEORMAN/rata') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'TELEORMAN';
            var judet2 = ' TELEORMAN';
            var temp = 'SELECT * FROM rata WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/TELEORMAN/medii') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'TELEORMAN';
            var judet2 = ' TELEORMAN';
            var temp = 'SELECT * FROM medii WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/GIURGIU/educatie') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'GIURGIU';
            var judet2 = ' GIURGIU';
            var temp = 'SELECT * FROM educatie WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/GIURGIU/varste') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'GIURGIU';
            var judet2 = ' GIURGIU';
            var temp = 'SELECT * FROM varste WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/GIURGIU/rata') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'GIURGIU';
            var judet2 = ' GIURGIU';
            var temp = 'SELECT * FROM rata WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/GIURGIU/medii') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'GIURGIU';
            var judet2 = ' GIURGIU';
            var temp = 'SELECT * FROM medii WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/ILFOV/educatie') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'ILFOV';
            var judet2 = ' ILFOV';
            var temp = 'SELECT * FROM educatie WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/ILFOV/varste') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'ILFOV';
            var judet2 = ' ILFOV';
            var temp = 'SELECT * FROM varste WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/ILFOV/rata') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'ILFOV';
            var judet2 = ' ILFOV';
            var temp = 'SELECT * FROM rata WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/ILFOV/medii') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'ILFOV';
            var judet2 = ' ILFOV';
            var temp = 'SELECT * FROM medii WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/BUCURESTI/educatie') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'BUCURESTI';
            var judet2 = ' BUCURESTI';
            var judet3 = 'MUN.BUC.';
            var judet4 = 'Municipiul BUCURESTI';
            var judet5 = 'MUNICIPIUL BUCURESTI';
            var judet6 = 'MUN. BUC.';
            var temp = 'SELECT * FROM educatie WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2) + ' OR JUDET = ' + mysql.escape(judet3) + ' OR JUDET = ' + mysql.escape(judet4) + ' OR JUDET = ' + mysql.escape(judet5) + ' OR JUDET = ' + mysql.escape(judet6);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/BUCURESTI/varste') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'BUCURESTI';
            var judet2 = ' BUCURESTI';
            var judet3 = 'MUN.BUC.';
            var judet4 = 'Municipiul BUCURESTI';
            var judet5 = 'MUNICIPIUL BUCURESTI';
            var judet6 = 'MUN. BUC.';
            var temp = 'SELECT * FROM varste WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2) + ' OR JUDET = ' + mysql.escape(judet3) + ' OR JUDET = ' + mysql.escape(judet4) + ' OR JUDET = ' + mysql.escape(judet5) + ' OR JUDET = ' + mysql.escape(judet6);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/BUCURESTI/rata') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'BUCURESTI';
            var judet2 = ' BUCURESTI';
            var judet3 = 'MUN.BUC.';
            var judet4 = 'Municipiul BUCURESTI';
            var judet5 = 'MUNICIPIUL BUCURESTI';
            var judet6 = 'MUN. BUC.';
            var temp = 'SELECT * FROM rata WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2) + ' OR JUDET = ' + mysql.escape(judet3) + ' OR JUDET = ' + mysql.escape(judet4) + ' OR JUDET = ' + mysql.escape(judet5) + ' OR JUDET = ' + mysql.escape(judet6);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/BUCURESTI/medii') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'BUCURESTI';
            var judet2 = ' BUCURESTI';
            var judet3 = 'MUN.BUC.';
            var judet4 = 'Municipiul BUCURESTI';
            var judet5 = 'MUNICIPIUL BUCURESTI';
            var judet6 = 'MUN. BUC.';
            var temp = 'SELECT * FROM medii WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2) + ' OR JUDET = ' + mysql.escape(judet3) + ' OR JUDET = ' + mysql.escape(judet4) + ' OR JUDET = ' + mysql.escape(judet5) + ' OR JUDET = ' + mysql.escape(judet6);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/IALOMITA/educatie') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'IALOMITA';
            var judet2 = ' IALOMITA';
            var temp = 'SELECT * FROM educatie WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/IALOMITA/varste') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'IALOMITA';
            var judet2 = ' IALOMITA';
            var temp = 'SELECT * FROM varste WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/IALOMITA/rata') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'IALOMITA';
            var judet2 = ' IALOMITA';
            var temp = 'SELECT * FROM rata WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/IALOMITA/medii') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'IALOMITA';
            var judet2 = ' IALOMITA';
            var temp = 'SELECT * FROM medii WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/CALARASI/educatie') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'CALARASI';
            var judet2 = ' CALARASI';
            var temp = 'SELECT * FROM educatie WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/CALARASI/varste') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'CALARASI';
            var judet2 = ' CALARASI';
            var temp = 'SELECT * FROM varste WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/CALARASI/rata') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'CALARASI';
            var judet2 = ' CALARASI';
            var temp = 'SELECT * FROM rata WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/CALARASI/medii') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'CALARASI';
            var judet2 = ' CALARASI';
            var temp = 'SELECT * FROM medii WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/BUZAU/educatie') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'BUZAU';
            var judet2 = ' BUZAU';
            var temp = 'SELECT * FROM educatie WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/BUZAU/varste') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'BUZAU';
            var judet2 = ' BUZAU';
            var temp = 'SELECT * FROM varste WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/BUZAU/rata') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'BUZAU';
            var judet2 = ' BUZAU';
            var temp = 'SELECT * FROM rata WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/BUZAU/medii') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'BUZAU';
            var judet2 = ' BUZAU';
            var temp = 'SELECT * FROM medii WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/BRAILA/educatie') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'BRAILA';
            var judet2 = ' BRAILA';
            var temp = 'SELECT * FROM educatie WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/BRAILA/varste') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'BRAILA';
            var judet2 = ' BRAILA';
            var temp = 'SELECT * FROM varste WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/BRAILA/rata') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'BRAILA';
            var judet2 = ' BRAILA';
            var temp = 'SELECT * FROM rata WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/BRAILA/medii') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'BRAILA';
            var judet2 = ' BRAILA';
            var temp = 'SELECT * FROM medii WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/TULCEA/educatie') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'TULCEA';
            var judet2 = ' TULCEA';
            var temp = 'SELECT * FROM educatie WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/TULCEA/varste') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'TULCEA';
            var judet2 = ' TULCEA';
            var temp = 'SELECT * FROM varste WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/TULCEA/rata') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'TULCEA';
            var judet2 = ' TULCEA';
            var temp = 'SELECT * FROM rata WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/TULCEA/medii') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'TULCEA';
            var judet2 = ' TULCEA';
            var temp = 'SELECT * FROM medii WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/CONSTANTA/educatie') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'CONSTANTA';
            var judet2 = ' CONSTANTA';
            var temp = 'SELECT * FROM educatie WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/CONSTANTA/varste') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'CONSTANTA';
            var judet2 = ' CONSTANTA';
            var temp = 'SELECT * FROM varste WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/CONSTANTA/rata') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'CONSTANTA';
            var judet2 = ' CONSTANTA';
            var temp = 'SELECT * FROM rata WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/CONSTANTA/medii') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'CONSTANTA';
            var judet2 = ' CONSTANTA';
            var temp = 'SELECT * FROM medii WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/SIBIU/educatie') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'SIBIU';
            var judet2 = ' SIBIU';
            var temp = 'SELECT * FROM educatie WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/SIBIU/varste') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'SIBIU';
            var judet2 = ' SIBIU';
            var temp = 'SELECT * FROM varste WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/SIBIU/rata') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'SIBIU';
            var judet2 = ' SIBIU';
            var temp = 'SELECT * FROM rata WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }
        if (req.url === '/SIBIU/medii') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var judet = 'SIBIU';
            var judet2 = ' SIBIU';
            var temp = 'SELECT * FROM medii WHERE JUDET = ' + mysql.escape(judet) + ' OR JUDET = ' + mysql.escape(judet2);

            connection.query(temp, (err, results, fields) => {
                if (err) throw err
                var test = JSON.stringify(results)
                var rez = JSON.parse(test)
                //getFunction(request, response, rez)
                res.end(JSON.stringify(rez));
            })

        }





        // end api
    }
});

server.listen(process.env.PORT);
