let latitude = document.getElementById('valuesearch1')
let longitude = document.getElementById('valuesearch2')
let searchbutton = document.getElementById('searchButton')
let localInfo = document.getElementById('localinfo')
let resp = document.getElementById('res')

searchbutton.addEventListener('click', function(){
  if(latitude.value.includes('.') && longitude.value.includes('.')){
    resp.innerHTML = "Carregando..."
    
    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude.value}&lon=${longitude.value}`)
    .then(res => res.json())
    .then(dados => {
      if(dados.error){
      resp.innerHTML = "Não foi encointrado um local!"
    }else{
      resp.innerHTML = `<h2>Resultado da consulta 🏠:</h2><p><strong>Sua consulta foi um sucesso ✅!</strong></p><p><strong>Latitude:</strong> ${dados.lat}<br><strong>Longitude:</strong> ${dados.lon}<br><strong>Tipo: </strong> ${dados.type == "residential" ? "Residencial":"não é residencial"}<br><strong>País</strong> ${dados.address.country}<br><strong>Região:</strong> ${dados.address.region}<br><strong>Cep:</strong> ${dados.address.postcode}<br><strong>Cidade:</strong> ${dados.address.city}<br><strong>Município:</strong> ${dados.address.municipality}<br><strong>Condado:</strong> ${dados.address.county}<br><strong>Estado:</strong> ${dados.address.state}<br><strong>Residencia:</strong> ${dados.address.residential}<br><strong>Rua :</strong> ${dados.address.road}<br><br><a href='https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude.value}&lon=${longitude.value}' target='_blank'><strong>Mais informações em JSON</strong></a></p>`
    }
    })
    .catch(err =>{
      resp.innerHTML = "Sem conexão com o servidor"
      console.error(err)
    })
  }else{
    resp.innerHTML = "A latitude e longitude deve ter '.'"
  }
})

navigator.geolocation.getCurrentPosition(
  (position) => {
      let lat = position.coords.latitude;  // Armazena a latitude
      let lon = position.coords.longitude; // Armazena a longitude
      localInfo.innerHTML = `<strong>Seu local</strong>: <br>Latitude: ${lat} <br> Longitude: ${lon} <br><br><p style="font: 11px monospace"><strong>Se tiver muitas informações como "UNDEFINED" no resultado da consulta, basta abrir em mais informações</strong></p>`
  })