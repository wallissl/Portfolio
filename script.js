let artDes = document.getElementById('artDes');
let artDev = document.getElementById('artDev');

artDes.addEventListener('click', cliDes);
artDev.addEventListener('click', cliDev);

function cliDes(){
    alert('Portfólio de Design | Behance');
}

function cliDev(){
    alert('Repositório | GitHub ')
}

function clickCur(){
    alert('Currículo | Linkedin')
}