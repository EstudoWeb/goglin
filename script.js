let valueForSearch = document.getElementById('valuesearch')
let search = document.getElementById('searchButton')
let resForSearch = document.getElementById('res')
let ipLink = document.getElementById('ipLink')

ipLink.addEventListener('click', function(){
  window.location.href = "src/ip.html"
})

search.addEventListener('click', ()=>createSearch(valueForSearch.value))

const createSearch=(value)=>{
  if(value.replace(/\D/g, "").length != 8){
    resForSearch.innerHTML = "<h2 style='font-family: monospace'>Esse cep não tem 8 digítos!</h2>"
  }else{
    resForSearch.innerHTML = "<h2>Carregando...</h2>"
    fetch(`https://viacep.com.br/ws/${value.replace(/\D/g, "")}/json/`)
    .then(res => res.json())
    .then(dados=>{
      if(dados.erro != "true"){
        res.innerHTML = `<h2>Resultado da consulta 🏠:</h2><p><strong>Sua consulta foi um sucesso ✅!</strong></p><p><strong>Cep:</strong> ${dados.cep}<br><strong>Estado:</strong> ${dados.estado}<br><strong>Sigla:</strong> ${dados.uf}<br><strong>Região:</strong> ${dados.regiao}<br><strong>DDD:</strong> ${dados.ddd}<br><strong>Localidade:</strong> ${dados.localidade}<br><strong>Bairro:</strong> ${dados.bairro}<br><strong>Logradouro:</strong> ${dados.logradouro} <br><br><a href='https://viacep.com.br/ws/${value.replace(/\D/g, "")}/json/' target='_blank'><strong>Mais informações em JSON</strong></a></p>`
      }else{
        res.innerHTML = `<br>Não foi encontrado um local com esse cep!`
      }
    }).catch((err)=>{
      res.innerHTML = `<h2>Sem conexão com o servidor!</h2>`
      console.error(err)
    })
}
}