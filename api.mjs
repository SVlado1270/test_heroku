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


var PORT = 5000
async function clientStream (request, encoding = 'utf8') {
  request.setEncoding(encoding)
  return new Promise((resolve, reject) => {
    let totalData = ''
    request.on('error', err => {
      console.error(err)
      reject(err)
    })
      .on('data', dataChunks => {
        totalData += dataChunks
      })
      .on('end', () => {
        // request.body = JSON.parse(totalData)
        resolve(totalData)
      })
  })
}

async function postFunction (request, response) {
  try {
    await clientStream(request)
    educatie.push(request.body)
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.write(JSON.stringify(educatie))
    console.log('Success')
    response.end()
  } catch (err) {
    response.writeHead(400, { 'Content-type': 'text/plain' })
    response.write('Invalid request', err.message)
    response.end()
  }
}

const getFunction = (request, response, dbName) => {
  response.writeHead(200, { 'Content-Type': 'application/json' })
  response.write(JSON.stringify(dbName))
  response.end()
}

/* const deleteFunction = (request, response) => {
  const url = request.url
  const urlQuery = url.split('?')[1]
  const field = urlQuery.split('=')[0]
  const value = urlQuery.split('=')[1]

  if (field === 'id') {
    db.splice(value - 1, 1) // stergem elementul de pe pozitia respectiva, fara sa afecteze restul elementelor sau ordinea
    response.writeHead(200, { 'Content-type': 'text/plain' })
    response.write('Delete confirmed')
    response.end()
  } else {
    response.writeHead(400, { 'Content-type': 'text/plain' })
    response.write('Invalid Query')
    response.end()
  }
} */
const server = http.createServer((request, response) => {
  const url = request.url
  const method = request.method
  console.log(method, url)
  switch (method) {
    case 'POST':
      postFunction(request, response)
      break

    case 'GET':
      if (url == '/IASI') {
        var judet = 'IASI'
        var educatie = 'SELECT * FROM educatie WHERE JUDET = ' + mysql.escape(judet)
        var rata = 'SELECT * FROM rata WHERE JUDET = ' + mysql.escape(judet)
        var varste = 'SELECT * FROM varste WHERE JUDET = ' + mysql.escape(judet)
        var medii = 'SELECT * FROM medii WHERE JUDET = ' + mysql.escape(judet)

        connection.query(educatie, (err, results, fields) => {
          if (err) throw err
            var test = JSON.stringify(results)
            var rez = JSON.parse(test)
            getFunction(request, response, rez)
        })

        connection.query(rata, (err, results, fields) => {
          if (err) throw err
          var test = JSON.stringify(results[1])
          var rez = JSON.parse(test)
          getFunction(request, response, rez)
        })

        connection.query(varste, (err, results, fields) => {
          if (err) throw err
          var test = JSON.stringify(results[1])
          var rez = JSON.parse(test)
          getFunction(request, response, rez)
        })

        connection.query(medii, (err, results, fields) => {
          if (err) throw err
          var test = JSON.stringify(results[1])
          var rez = JSON.parse(test)
          getFunction(request, response, rez)
        })
      }
      break

    default:
      response.writeHead(400, { 'Content-type': 'text/plain' })
      response.write('Cannot find the URL')
      response.end()
  }
})
server.listen(PORT)
/*
var educatie = 'SELECT * FROM educatie'
var rata = 'SELECT * FROM rata'
var varste = 'SELECT * FROM varste'
var medii = 'SELECT * FROM medii'

connection.query(educatie, (err, results, fields) => {
  if (err) throw err
})

connection.query(rata, (err, results, fields) => {
  if (err) throw err
})

connection.query(varste, (err, results, fields) => {
  if (err) throw err
})

connection.query(medii, (err, results, fields) => {
  if (err) throw err
}) */

/*connection.end(function (err) {
  if (err) { return console.log('error: ' + err.message) }
  console.log('closed the db connection')
}) */