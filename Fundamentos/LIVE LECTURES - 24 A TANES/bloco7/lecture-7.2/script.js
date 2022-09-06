const getNumberOfDaysInMonth = (month) => {
  switch (parseInt(month)) {
    case 1:
      return 31;
    case 2:
      return 28;
    case 3:
      return 31;
    case 4:
      return 30;
    case 5:
      return 31;
    case 6:
      return 30;
    case 7:
      return 31;
    case 8:
      return 31;
    case 9:
      return 30;
    case 10:
      return 31;
    case 11:
      return 30;
    case 12:
      return 31;
    default:
      // return 'Mês inválido';
      throw new Error('Mês inválido');
  }
};
const renderAmountOfDaysInMonth = () => {
  const month = document.getElementById('month');
  const result = document.getElementById('result');
  try {
    result.innerHTML = `O mês ${month.value} tem ${getNumberOfDaysInMonth(month.value)} dias`;
    result.style.color = 'black';
  } catch (error) {
    result.innerHTML = `${month.value} é um ${error.message}`;
    result.style.color = 'red';
  }
  month.value = '';
  month.focus();
};

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', renderAmountOfDaysInMonth);
};
