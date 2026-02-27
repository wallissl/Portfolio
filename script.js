console.log('Hello World');

let artDes = document.getElementById('artDes');
let artDev = document.getElementById('artDev');
let header = document.getElementById('header');
let linke = document.getElementsByClassName('linke');

artDes.addEventListener('click', cliDes);
artDev.addEventListener('click', cliDev);
header.addEventListener('mousemove', mouHea);

function cliDes(){
    alert('Portfólio de Design | Behance');
}

function cliDev(){
    alert('Repositório | GitHub ')
}

function clickCur(){
    alert('Currículo | Linkedin')
}

function mouHea(){
    header.style.backgroundColor="#6729ca";
}

header.addEventListener('mouseout', ()=>{
    header.style.backgroundColor="#000";
});

const ola = function() {

}