let ConsulCep = document.getElementById('consulCep')
let ConsulIp = document.getElementById('consulIp')
let ConsulLocal = document.getElementById('consulLocal')

ConsulCep.addEventListener('click', function(){
  window.location.href = 'src/cep.html'
})
ConsulIp.addEventListener('click', function(){
  window.location.href = 'src/ip.html'
})
ConsulLocal.addEventListener('click', function(){
  window.location.href = 'src/local.html'
})
