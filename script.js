var currentNumberSpan = document.getElementById('currentNumber');
var currentNumber = 0;
var galo;

function increment() {
  currentNumber += 1;
  currentNumberSpan.innerHTML = currentNumber;
  document.title = currentNumber;
    if(currentNumber == 13){

      galo = '13 é galo';
      document.title = galo; //muda o titulo da aba document.title, aceita diversos valores
     
      document.getElementById('galoDoido').setAttribute('src', 'img/Escudo_atletico_mineiro_de_tete.svg'); //faltou chamar função
          
      document.getElementById("galo").textContent="13 é galo";
      
    }else{
      document.getElementById("galo").textContent="";
      document.getElementById('galoDoido').setAttribute('src', '');
    }

}

function decrement() {
  currentNumber -= 1;
  currentNumberSpan.innerHTML = currentNumber;
  document.title = currentNumber;
    if(currentNumber == 13){
      galo = '13 é galo';
      document.title = galo;
      document.getElementById('galoDoido').setAttribute('src', 'img/Escudo_atletico_mineiro_de_tete.svg');
      
      document.getElementById("galo").textContent="13 é galo";
      
    }else{
      document.getElementById("galo").textContent="";
      document.getElementById('galoDoido').setAttribute('src', '');
    }
}

