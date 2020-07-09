import './styles/main.scss';

let loader = document.querySelector(".loaders");

let numberInput = document.getElementById("number");
// fact
let fact = document.querySelector(".fact");
let factText = document.getElementById("factText");
// Buttons
let btnNumber = document.getElementById("btnNumber");
let btnYear = document.getElementById("btnYear");
let btnMath = document.getElementById("btnMath");
let buttons = document.getElementsByClassName("type__buttons__btn ");

//API
let url = 'http://numbersapi.com/';
let type= '';

// Generate Facts when Input
numberInput.addEventListener('input', getFact);

btnNumber.addEventListener('click', changeToNumber);
btnYear.addEventListener('click', changeToYear);
btnMath.addEventListener('click', changeToMath);


// Change API Facts 
// Change API to Number Facts
function changeToNumber(){
	for(let b of buttons){b.classList.remove('active')};
  btnNumber.classList.add('active');
  type = '';
  getFact();
}
// Change API to Year Facts 
function changeToYear(){
  for(let b of buttons){b.classList.remove('active')};
  btnYear.classList.add('active');
  type = '/year';
  getFact();
}
// Change API to Math Facts
function changeToMath(){
	for(let b of buttons){b.classList.remove('active')};
  btnMath.classList.add('active');
  type = '/math';
  getFact();
}


function getFact() {
  loader.style.display = 'block';
  let number = `${numberInput.value}`;
  let xhr = new XMLHttpRequest();
  xhr.open("GET", `${url}${number}${type}`, true);
  
  xhr.onload = function(){
    if(this.status == 200 && number != ''){
      loader.style.display = 'none';
      fact.style.display = 'block';
      factText.textContent = this.responseText;
    }else if(this.status == 404 || number == ''){
      fact.style.display = 'none';
    }
  }
  xhr.send();
}
