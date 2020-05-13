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
    return console.error('error: ' + err.message)
  }
  console.log('Connection established')
})

/* const judet = '4721'
const sqlquery = 'SELECT JUDET FROM rata_mai WHERE numar_total_someri = ' + mysql.escape(judet)
*/
/* var criterii = ['educatie', 'rata', 'varste', 'medii']
var luni = ['ianuarie', 'februarie', 'martie', 'aprilie', 'mai', 'iunie', 'iulie', 'septembrie', 'octombrie', 'noiembrie', 'decembrie']
var rowsQuery = '' */

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
})



/*
function index_luna (luna) {
  if (luna == 'ianuarie') { return 1 }
  if (luna == 'februarie') { return 2 }
  if (luna == 'martie') { return 3 }
  if (luna == 'aprilie') { return 4 }
  if (luna == 'mai') { return 5 }
  if (luna == 'iunie') { return 6 }
  if (luna == 'iulie') { return 7 }
  if (luna == 'septembrie') { return 9 }
  if (luna == 'octombrie') { return 10 }
  if (luna == 'noiembrie') { return 11 }
  if (luna == 'decembrie') { return 12 }
  return 0
}

// svgDoc = this.getSVGDocument()
 for (const criteriu of criterii) {
  var counter = 1
  for (const luna of luni) {
    var nrLuna = index_luna(luna)
    console.log(nrLuna)
  /*  if (criteriu == 'educatie') {
      connection.query('SELECT * FROM ' + criteriu + '_' + luna, (error, results, fields) => {
        if (error) { console.log(luna); throw error }

        for (var i = 0; i < results.length; i++) {
          var result = JSON.stringify(results[i])
          if (typeof result !== 'undefined') {
            var result2 = JSON.parse(result)
            // console.log(result2.JUDET, result2.fara_studii)
            // counter++
            // console.log(counter, nrLuna)
            connection.query('INSERT INTO ' + criteriu + ' VALUES(' + counter++ + ', ' + index_luna(luna) + ', 2019, ' + '"' + result2.JUDET + '"' + ', ' + result2.Total_someri_din_care + ', ' + result2.fara_studii + ', ' + result2.invatamant_primar + ', ' + result2.invatamant_gimnazial + ', ' + result2.invatamant_liceal + ', ' + result2.invatamant_posticeal + ', ' + result2.invatamant_profesional_arte_si_meserii + ', ' + result2.invatamant_universitar + ')', (err, results, fields) => {
              if (err) throw err
              console.log(counter, luna, index_luna(luna))
              console.log('AM INSERAT ----------------')
              // counter++
            })
          }
        }
      })
    }
    else */
    /* if (criteriu == 'rata' && luna !== 'mai') {
      connection.query('SELECT * FROM ' + criteriu + '_' + luna, (error, results, fields) => {
        if (error) { console.log(luna); throw error }
  
        for (var i = 0; i < results.length; i++) {
          var result = JSON.stringify(results[i])
          if (typeof result !== 'undefined') {
            var result2 = JSON.parse(result)
            connection.query('INSERT INTO ' + criteriu + ' VALUES(' + counter++ + ', ' + index_luna(luna) + ', 2019, ' + '"' + result2.JUDET + '"' + ', ' + result2.Numar_total_someri + ', ' + result2.Numar_total_someri_femei + ', ' + result2.Numar_total_someri_barbati + ', ' + result2.Numar_someri_indemnizati + ', ' + result2.Numar_someri_neindemnizati + ', ' + result2.Rata_somajului + ', ' + result2.Rata_somajului_Feminina + ', ' + result2.Rata_somajului_Masculina + ')', (err, results, fields) => {
              if (err) throw err
              console.log(counter, luna, index_luna(luna))
              console.log('AM INSERAT ----------------')
            })
          }
        }
      })

    } */
  / if (criteriu == 'varste') {
      connection.query('SELECT * FROM ' + criteriu + '_' + luna, (error, results, fields) => {
        if (error) { console.log(luna); throw error }
        for (var i = 0; i < results.length; i++) {
          var result = JSON.stringify(results[i])
          if (typeof result !== 'undefined') {
            var result2 = JSON.parse(result)
            connection.query('INSERT INTO ' + criteriu + ' VALUES(' + counter++ + ', ' + index_luna(luna) + ', 2019, ' + '"' + result2.judet + '"' + ', ' + result2.TOTAL + ', ' + result2.Sub_25_ani + ', ' + result2.ani_25_29 + ', ' + result2.ani_30_39 + ', ' + result2.ani_40_49 + ', ' + result2.ani_50_55 + ', ' + result2.peste_55_ani + ')', (err, results, fields) => {
              if (err) throw err
              console.log(counter, luna, index_luna(luna))
              console.log('AM INSERAT ----------------')
            })
          }
        }
      })
    }
    if (criteriu == 'medii' && luna !== 'mai') {
      connection.query('SELECT * FROM ' + criteriu + '_' + luna, (error, results, fields) => {
        if (error) { console.log(luna); throw error }
        for (var i = 0; i < results.length; i++) {
          var result = JSON.stringify(results[i])
          if (typeof result !== 'undefined') {
            var result2 = JSON.parse(result)
            connection.query('INSERT INTO ' + criteriu + ' VALUES(' + counter++ + ', ' + index_luna(luna) + ', 2019, ' + '"' + result2.JUDET + '"' + ', ' + result2.NUMAR_TOTAL_SOMERI + ', ' + result2.NUMAR_TOTAL_SOMERI_FEMEI + ', ' + result2.NUMAR_TOTAL_SOMERI_BARBATI + ', ' + result2.NUMAR_TOTAL_SOMERI_DIN_MEDIUL_URBAN + ', ' + result2.NUMAR_SOMERI_FEMEI_DIN_MEDIUL_URBAN + ', ' + result2.NUMAR_SOMERI_BARBATI_DIN_MEDIUL_URBAN + ', ' + result2.NUMAR_TOTAL_SOMERI_DIN_MEDIUL_RURAL + ', ' + result2.NUMAR_SOMERI_FEMEI_DIN_MEDIUL_RURAL + ', ' + result2.NUMAR_SOMERI_BARBATI_DIN_MEDIUL_RURAL + ')', (err, results, fields) => {
              if (err) throw err
              console.log(counter, luna, index_luna(luna))
              console.log('AM INSERAT ----------------')
            })
          }
        }
      })
    }
  }
} */

connection.end(function (err) {
  if (err) { return console.log('error: ' + err.message) }
  console.log('closed the db connection')
})
