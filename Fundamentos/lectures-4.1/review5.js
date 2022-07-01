let statusAluno = 'reprovado';

switch (statusAluno) {
  case 'aprovada':
    console.log('Parabéns, você foi aprovada(o)!');
    break;
  case 'lista':
    console.log('Você esta na lista de espera');
    break;
  case 'reprovado':
    console.log('VocÊ foi reprovado(a)');
    break;
  default :
    console.log('Não se aplica');
    break;
}
