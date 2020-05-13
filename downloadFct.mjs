var JsonArray = [{
  Femei: 11,
  Barbati: 12,
  Total: 100

}, {
  Femei: 10,
  Barbati: 16,
  Total: 50
}]

var JsonArrayFields = ['Femei', 'Barbati', 'Total']

function CSVdata () {
  var CSVstring = JsonArrayFields.join(',') + '\n'
  JsonArray.forEach(element => {
    var femei = element.Femei
    var barbati = element.Barbati
    var total = element.Total

    CSVstring += femei + ',' + barbati + ',' + total + '\n'
  })

  return CSVdownload(CSVstring)
}
// o sa le punem dupa id-ul dat in divuri in html sau id-urile tabelelor gen document.getElementById('tabel1');
function CSVdownload (CSVstring) {
  var hiddenElement = document.createElement('a')
  hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(CSVstring)
  hiddenElement.target = '_blank'
  hiddenElement.download = 'file.csv'
  hiddenElement.click()
}

function SVGdata () {
  var SVGstring = JsonArrayFields.join(',') + '\n'
  JsonArray.forEach(element => {
    var femei = element.Femei
    var barbati = element.Barbati
    var total = element.Total

    SVGstring += femei + ',' + barbati + ',' + total + '\n'
  })

  return SVGdownload(SVGstring)
}

function SVGdownload (SVGstring) {
  var hiddenElement = document.createElement('a')
  hiddenElement.href = 'data:image/svg+xml;charset=utf-8,' + encodeURI(SVGstring)
  hiddenElement.target = '_blank'
  hiddenElement.download = 'file.svg'
  hiddenElement.click()
}

function XMLdata () {
  var XMLstring = JsonArrayFields.join(',') + '\n'
  JsonArray.forEach(element => {
    var femei = element.Femei
    var barbati = element.Barbati
    var total = element.Total

    XMLstring += femei + ',' + barbati + ',' + total + '\n'
  })

  return XMLdownload(XMLstring)
}

function XMLdownload (XMLstring) {
  var hiddenElement = document.createElement('a')
  hiddenElement.href = 'data:image/svg+xml;charset=utf-8,' + encodeURI(XMLstring)
  hiddenElement.target = '_blank'
  hiddenElement.download = 'file.xml'
  hiddenElement.click()
}
