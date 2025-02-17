let valueForSearch = document.getElementById('valuesearch')
let search = document.getElementById('searchButton')
let resForSearch = document.getElementById('res')
let ipLink = document.getElementById('ipLink')

ipLink.addEventListener('click', function(){
  window.location.href = "../index.html"
})

search.addEventListener('click', ()=>createSearch(valueForSearch.value))

const createSearch=(value)=>{
  if(value.replace(/\D/g, "").length < 4 || value.replace(/\D/g, "").length > 12){
    resForSearch.innerHTML = "<h2 style='font-family: monospace'>Esse ip não tem entre 4 e 12 digítos!</h2>"
  }else if(!value.includes('.')){
    resForSearch.innerHTML = "<h2 style='font-family: monospace'>O ip deve ser inserido com '.'</h2>"
  }else{
    resForSearch.innerHTML = "<h2>Carregando...</h2>"
    fetch(`https://cors-anywhere.herokuapp.com/https://api.ip2location.io/?key=B8524D268FC4937AAAF34DEA7CE93BE8&ip=${value}`)
    .then(res => res.json())
    .then(dados=>{
      if(!dados.error){
        res.innerHTML = `<h2>Resultado da consulta 🏠:</h2><p><strong>Sua consulta foi um sucesso ✅!</strong></p><p><strong>Ip:</strong> ${dados.ip}<br><strong>Estado:</strong> ${dados.region_name}<br><strong>país:</strong> ${dados.country_code}<br><strong>Região:</strong> ${dados.country_name}<br><strong>cidade:</strong> ${dados.city_name}<br><strong>wifi ligado:</strong>${dados.as == "Connect Network" ? " sim":" não"}<br><strong>é proxy:</strong>${dados.is_proxy ? " sim":" não"}<br><br><a href='https://api.ip2location.io/?key=B8524D268FC4937AAAF34DEA7CE93BE8&ip=${value}' target='_blank'><strong>Mais informações em JSON</strong></a></p>`
      }else{
        res.innerHTML = `<br>ip inválido, não foi encontrado um local com esse ip!`
      }
    }).catch((err)=>{
      res.innerHTML = `<h2>Sem conexão com o servidor!</h2>`
      console.error(err)
      console.log(dados)
    })
}
}