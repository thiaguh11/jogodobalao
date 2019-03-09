var count = 0;
var placar = 0;

function jogar () {
    let nome = document.getElementById("txtnome").value;
    console.log(nome);
    if( nome != ""){
       window.location.href = 'game.html';
        console.log(nome);
    }
}

function addBall () {
    var bola = document.createElement("div");
    bola.setAttribute("class","ball");
    let width = window.screen.availWidth - 100;
    let height = window.screen.availHeight - 150;

    let x = Math.floor(Math.random() * width);
    let y = Math.floor(Math.random() * height);

    bola.setAttribute("style","left:"+x+"px;top:"+y+"px;");
    bola.setAttribute("onclick","estourar(this);");

    document.body.appendChild(bola);
    count += 1;
} 

function estourar (el) {
    document.body.removeChild(el);
    count -= 1;
    placar += 1;
    document.getElementById("placar").innerHTML = "Placar: " + placar;
}

function begin () {
    setInterval(()=>{if(count < 5){
        addBall();
    } else {
        clearInterval();
        document.getElementById("gameover").style.display = "block";
        document.getElementById("btn-try").style.display = "block";
    }
    },700);
}