let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
  };
let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  };

  for (let key in info){
    if (key === 'recorrente' && info.recorrente === "Sim" && info2.recorrente === "Sim"){
        console.log('Ambos Recorrentes');        
    } else {
        console.log(info[key] + ' e ' + info2[key]);
    }
  }    