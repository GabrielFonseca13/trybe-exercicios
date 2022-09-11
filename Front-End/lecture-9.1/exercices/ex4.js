// 4 - Suponha que você precise simular uma mensagem enviada do robô Curiosity de Marte para a Terra. O Curiosity envia para a Terra a temperatura atual em Marte, gastando um tempo variável de até 5 segundos para que termine o envio. 

// Crie a função sendMarsTemperature de forma que:

// A função sendMarsTemperature imprima no console o seguinte texto: "A temperatura de Marte é: temperaturaAtual graus celsius" onde, temperaturaAtual é o valor recebido da função getMarsTemperature; e

// A mensagem deve ser impressa no console depois de no máximo 5 segundos.

// Dica: utilize a função messageDelay para gerar o tempo de espera necessário

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// console.log(getMarsTemperature())
// crie a função sendMarsTemperature abaixo

const sendMarsTemperature = () => {
  const currentTemperature = getMarsTemperature();
  setTimeout(() => console.log(`A temperatura de Marte é: ${currentTemperature} graus celsius`), messageDelay());
};

sendMarsTemperature();