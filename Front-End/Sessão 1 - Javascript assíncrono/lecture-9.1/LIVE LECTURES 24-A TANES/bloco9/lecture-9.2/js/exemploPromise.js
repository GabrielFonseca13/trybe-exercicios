const novoIdioma = (idioma, frase)=> {
  return new Promise((resolve, reject)=>{
    if(idioma === 'Francês'){
      resolve(frase);
    }else{
      reject('Desculpe mas não sei falar Francês! :(')
    }
  })
}

const executandoPromessa = () => {
  novoIdioma('Inglês', 'Eu sei programar em JavaScript! :)')
  .then((response)=> console.log(response))
  .catch((error)=>console.log(error));
}

window.onload = executandoPromessa(); 