let statusLogin = 'Deslogado';

function logarDeslogar(){
    if( statusLogin === "Deslogado"){
        statusLogin = "Logado";
    } else {
        statusLogin = "Deslogado"
    }
}

logarDeslogar();
console.log(statusLogin);

logarDeslogar();
console.log(statusLogin);

logarDeslogar();
console.log('O Usuário está '+ statusLogin);

logarDeslogar();
console.log('O Usuário está '+ statusLogin);