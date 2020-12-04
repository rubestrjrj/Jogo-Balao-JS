var tmp;
function adicionarBola(){
    var bola = document.createElement("div");
    bola.setAttribute("class", "bola");
    var x = Math.floor(Math.random() * 400);
    var y = Math.floor(Math.random() * 400);
    var r = Math.floor(Math.random() * 254);
    var g = Math.floor(Math.random() * 254);
    var b = Math.floor(Math.random() * 254);
    bola.setAttribute("style","left:"+x+"px;top:"+y+"px; background-color: rgb("+r+","+g+","+b+");");
    bola.setAttribute("onclick", "estourar(this)");
    document.body.appendChild(bola);
    
}
function estourar(elemento){
    document.body.removeChild(elemento);
    var p = parseInt(document.getElementById("pontos").innerHTML);
    p = p +1;
    document.getElementById("pontos").innerHTML = p;
  }
function iniciar(){
    tmp = setInterval(adicionarBola, 1000);
}
function parar(){
    clearInterval(tmp);
}
function limpar(){
    const bolas = document.querySelectorAll(".bola");
    bolas.forEach(estourar);
    document.getElementById("pontos").innerHTML = 0;
    parar();
    
}

