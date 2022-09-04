# Boas-vindas ao repositório do exercício React Form!

Para realizar o exercício, atente-se a cada passo descrito a seguir e, se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu exercício a partir deste repositório, utilizando uma branch específica e um _Pull Request_ (PR) para colocar seus códigos.

# Termos e acordos

Ao iniciar este exercício, você concorda com as diretrizes do Código de Conduta e do Manual da Pessoa Estudante da Trybe.

# Entregáveis

<details>
  <summary><strong>🤷🏽‍♀️ Como entregar</strong></summary><br />

Para entregar o seu exercício você deverá criar um _Pull Request_ neste repositório.

Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/course/4d67f5b4-34a6-489f-a205-b6c7dc50fc16/) e nosso [Blog - Git & GitHub](https://blog.betrybe.com/tecnologia/git-e-github/) sempre que precisar!

</details>

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

Formulários estão presentes em todas as aplicações web. Se você já fez algum cadastro em algum site, você já preencheu um formulário.

Mas agora chegou a hora de você estar do outro lado! Nesse exercício, você desenvolverá seu próprio formulário, com regras de validação bem específicas para cada campo.

Para conseguir montar seu formulário e validar seus campos, você usará todo seu conhecimento em React: será necessário criar componentes, gerenciar estados e lidar com eventos usando `event handlers`. 

</details>

<details>
  <summary><strong>:memo: Habilidades</strong></summary><br />

Neste exercício, verificamos se você é capaz de:

- Manipular estado de um component React

- Capturar eventos utilizando a sintaxe do React

- Criar formulários com React

</details>



# Orientações

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary><br />

1. Clone o repositório

- Use o comando: `git clone git@github.com:tryber/sd-024-a-exercise-react-form`
- Entre na pasta do repositório que você acabou de clonar:
  - `cd sd-024-a-exercise-react-form`

2. Instale as dependências

- `npm install`.

3. Crie uma branch a partir da branch `main`

- Verifique que você está na branch `main`
  - Exemplo: `git branch`
- Se não estiver, mude para a branch `main`
  - Exemplo: `git checkout main`
- Agora crie uma branch à qual você vai submeter os `commits` do seu exercício
  - Você deve criar uma branch no seguinte formato: `nome-sobrenome-nome-do-exercício`
  - Exemplo: `git checkout -b fernando-soares-sd-024-a-exercise-react-form`
- Agora faça alguma alteração no arquivo `App.js`
  - Exemplo: Alterar de `<h1>React Form</h1>` para `<h1>My React Form</h1>`

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`

- Verifique que as mudanças ainda não estão no _stage_
  - Exemplo: `git status` (deve aparecer listado arquivo _App.js_ em vermelho)
- Adicione o novo arquivo ao _stage_ do Git
  - Exemplo:
    - `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
    - `git status` (deve aparecer listado o arquivo _App.js_ em verde)
- Faça o `commit` inicial
  - Exemplo:
    - `git commit -m 'iniciando o exercicio react form'` (fazendo o primeiro commit)
    - `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

5. Adicione a sua branch com o novo `commit` ao repositório remoto

- Usando o exemplo anterior: `git push -u origin joaozinho-sd-0x-exercise-react-form`

6. Crie um novo `Pull Request` _(PR)_

- Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-0x-exercise-react-form/pulls)
- Clique no botão verde _"New pull request"_
- Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
- Coloque um título para a sua _Pull Request_
  - Exemplo: _"Cria tela de busca"_
- Clique no botão verde _"Create pull request"_
- Adicione uma boa descrição para o _Pull Request_ (Exemplo: `Fernando Soares - React Form`) e clique no botão verde _"Create pull request"_
- **Não se preocupe em preencher mais nada por enquanto!**
- Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-0x-exercise-react-form/pulls) e confira que o seu _Pull Request_ está criado

</details>

<details>
  <summary><strong>⌨️ Durante o desenvolvimento</strong></summary><br />

- Faça `commits` das alterações que você fizer no código regularmente

- Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

- Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
  2. `git add` _(para adicionar arquivos ao stage do Git)_
  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
  4. `git push -u origin nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
  5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

</details>

<details>
  <summary><strong>🤝 Depois de terminar o desenvolvimento (opcional)</strong></summary><br />

Para sinalizar que o seu exercício está pronto para o _"Code Review"_, faça o seguinte:

- Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas:

  - No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**;

  - No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**;

  - No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-0x`.

Caso tenha alguma dúvida, [aqui tem um video explicativo](https://vimeo.com/362189205).

</details>

<details>
  <summary><strong>🕵🏿 Revisando um pull request</strong></summary><br />

Use o conteúdo sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os _Pull Requests_.

</details>

<details>
  <summary><strong>🎛 Linter</strong></summary><br />

Para garantir a qualidade do código, vamos utilizar neste exercício os linters `ESLint` e `StyleLint`.
Assim o código estará alinhado com as boas práticas de desenvolvimento, sendo mais legível
e de fácil manutenção! Para rodá-los localmente no exercício, execute os comandos abaixo:

```bash
  npm run lint
  npm run lint:styles
```

⚠️ **PULL REQUESTS COM ISSUES DE LINTER NÃO SERÃO AVALIADAS.
ATENTE-SE PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO!** ⚠️

Em caso de dúvidas, confira o material do course sobre [ESLint e Stylelint](https://app.betrybe.com/course/real-life-engineer/eslint).

</details>

<details>
  <summary><strong>🛠 Testes</strong></summary><br />

Para avaliar o exercício iremos utilizar [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) para execução dos testes.

Esse _framework_ de testes utiliza algumas marcações no código para verificar a solução proposta, uma dessas marcações é o atributo `data-testid` e faremos uso dele aqui.

Na descrição dos requisitos (logo abaixo) será pedido que seja feita a adição de atributos `data-testid` nos elementos _HTML_. Vamos a um exemplo para deixar claro essa configuração:

Se o requisito pedir "crie um botão e adicione o id de teste (ou `data-testid`) com o valor `my-action`, você pode criar:

```html
<button data-testid="my-action"></button>
```

ou

```html
<a data-testid="my-action"></a>
```

Ou seja, o atributo `data-testid="my-action"` servirá para o React Testing Library(RTL) identificar o elemento e dessa forma, conseguiremos realizar testes focados no comportamento da aplicação.

Em alguns requisitos, utilizamos o `getByRole` para poder selecionar os elementos de forma semântica. Portanto atente-se às instruções de cada requisito. Por exemplo, se o requisito pedir explicitamente um `button`, você deverá utilizar exatamente esse elemento.

Afim de verificar a solução proposta, você pode executar todos os testes localmente, basta executar:

```bash
npm test
```

### Dica: desativando testes

Especialmente no início, quando a maioria dos testes está falhando, a saída após executar os testes é extensa. Você pode desabilitar temporariamente um teste utilizando a função `skip` junto à função `it`. Como o nome indica, esta função "pula" um teste. Veja um exemplo:

```js
it.skip("Será verificado se o campo de filtro por nome renderiza na tela", () => {
  render(<App />);
  const filterNameInput = screen.getByTestId(/name-filter/i);
  expect(filterNameInput).toBeInTheDocument();
});
```

![image](skip-image.png)

Uma estratégia é pular todos os testes no início e ir implementando um teste de cada vez, removendo dele a função `skip`.

Você também pode rodar apenas um arquivo de teste, por exemplo:

```bash
npm test personaldata.test
```

Uma outra forma para contornar esse problema é a utilização da função `.only` após o `it`. Com isso, será possível que apenas um requisito rode localmente e seja avaliado.

```js
it.only("Será verificado se o campo de filtro por nome renderiza na tela", () => {
  render(<App />);
  const filterNameInput = screen.getByTestId(/name-filter/i);
  expect(filterNameInput).toBeInTheDocument();
});
```

![image](only-image.png)

⚠️ **O avaliador automático não necessariamente avalia seu exercício na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?**

</details>


<details>
  <summary><strong>🗂 Compartilhe seu portfólio!</strong></summary><br />

Você sabia que o LinkedIn é a principal rede social profissional e compartilhar o seu aprendizado lá é muito importante para quem deseja construir uma carreira de sucesso? Compartilhe esse exercício no seu LinkedIn, marque o perfil da Trybe (@trybe) e mostre para a sua rede toda a sua evolução.

</details>


# Requisitos

## 1 - Crie um `<fieldset>` para dados pessoais


<details>
  <summary>Neste fieldset a pessoa usuária deverá ser capaz de informar seus dados pessoais. Para isso crie os seguintes campos:</summary><br />


  <details>
    <summary><strong>Nome</strong></summary><br />

  - **Tipo de campo**: texto.
  - **Validação**: limite de 40 caracteres.
  - **Comportamento**: todos os caracteres devem ser transformados para `UPPER CASE` assim que forem digitados.

  </details><br />

  <details>
    <summary><strong>Email</strong></summary><br />

  - **Tipo de campo**: texto.
  - **Validação**: Limite de 50 caracteres.

  </details><br />

  <details>
    <summary><strong>CPF</strong></summary><br />

  - **Tipo de campo**: texto.
  - **Validação**: limite de 11 caracteres.

  </details>

</details><br />


<details>
  <summary><strong>💡 Dica</strong></summary><br />

- Lembre-se de envolver seus campos em uma `label` com o nome do campo, pois é esse valor que o avaliador automático irá usar para encontrar o elemento.

</details><br />


<details>
  <summary><strong>O que será verificado</strong></summary><br />

- Será verificado se exsite um campo do tipo `text` envolto por uma `label` com o texto `Nome`.
- Será verificado se o campo `Nome` tem o tamanho máximo de 40 caracteres.
- Será verificado se, ao digitar no campo `Nome` todas as letras ficam em caixa alta.

- Será verificado se existe um campo do tipo `email` envolto por uma `label` com o texto `Email`.
- Será verificado se o campo `Email` tem o tamanho máximo de 50 caracteres.
- Será verificado se, ao digitar no campo `Email`, o campo recebe o valor corretamente.

- Será verificado se existe um campo do tipo `text` envolto por uma `label` com o texto `CPF`.
- Será verificado se o campo `CPF` tem o tamanho máximo de 11 caracteres.
- Será verificado se, ao digitar no campo `CPF`, o campo recebe o valor corretamente.

</details><br />


## 2 - Crie outro `<fieldset>` para dados de endereço

<details>
  <summary>Neste fieldset a pessoa usuária deverá ser capaz de informar seus dados de endereço. Para isso crie os seguintes campos:</summary><br />

  <details>
    <summary><strong>Endereço</strong></summary><br />

  - **Tipo de campo**: texto.
  - **Validação**: limite de 200 caracteres.
  - **Comportamento**: remover qualquer caracter especial que seja digitado (exemplo: $%^'@+=).

  </details><br />

  <details>
    <summary><strong>Cidade</strong></summary><br />

  - **Tipo de campo**: texto.
  - **Validação**: limite de 28 caracteres.
  - **Comportamento**: ao remover o foco desse campo (evento onBlur), verificar se o nome da cidade começa com números. Caso comece, limpar o campo.

  </details><br />

  <details>
    <summary><strong>Estado</strong></summary><br />

  - **Tipo de campo**: comboBox.
  - **Opções**: todos os estados do Brasil.
  - **Observação**: use o arquivo `src/countryStates.js` para preencher as opções deste campo.

  </details><br />

  <details>
    <summary><strong>Tipo</strong></summary><br />

  - **Tipo de campo**: Radio Button.
  - **Opções**: "Casa" e "Apartamento".

  </details>

</details><br />


<details>
  <summary><strong>💡 Dica</strong></summary><br />

- Lembre-se de envolver seus campos em uma `label` com o nome do campo, pois é esse valor que o avaliador automático irá usar para encontrar o elemento.

</details><br />


<details>
  <summary><strong>O que será verificado</strong></summary><br />

- Será verificado se existe um campo do tipo `text` envolto por uma `label` com o texto `Endereço`.
- Será verificado se o campo `Endereço` tem o tamanho máximo de 200 caracteres.
- Será verificado se, ao digitar no campo `Endereço` os caracteres especiais (exemplo: $%^'@+=) são ignorados.

- Será verificado se existe um campo do tipo `text` envolto por uma `label` com o texto `Cidade`.
- Será verificado se o campo `Cidade` tem o tamanho máximo de 28 caracteres.
- Será verificado que, ao digitar no campo `Cidade`, se nome da cidade começar por número, o campo é limpo após perder o foco.

- Será verificado se existe um campo do tipo `select` envolto por uma `label` com o texto `Estado`.
- Será verificado se o estado inicial do campo `Estado` é o primeiro estado da lista de estados.
- Será verificado que, ao clicar no campo `Estado`, é possivel selecionar um estado.

- Será verificado se existe dois campos do tipo `Radio Button`. O primeiro deve estar envolto por uma `label` com o texto `Casa` e o segundo por uma label com o texto `Apartamento`.
- Será verificado se, ao carregar a página, o campo `Casa` está checado e o campo `Apartamento` não está checado.
- Será verificado se, ao clicar no campo `Apartamento`, este fica checado e o campo `Casa` não fica mais checado e vice-versa.

</details><br />


## 3 - Crie um terceiro `<fieldset>` para dados do último emprego

<details>
  <summary>Neste fieldset a pessoa usuária deverá ser capaz de informar seus dados profissionais. Para isso crie os seguintes campos:</summary><br />

  <details>
    <summary><strong>Resumo do currículo</strong></summary><br />

  - **Tipo de campo**: TextArea.
  - **Validação**: limite de 1000 caracteres.

  </details><br />

  <details>
    <summary><strong>Cargo</strong></summary><br />

  - **Tipo de campo**: Texto.
  - **Validação**: limite de 40 caracteres.
  - **Comportamento**: quando o mouse passar por cima deste campo (evento `onMouseEnter`), exibir um alerta dizendo "Preencha com cuidado esta informação.". Exiba essa mensagem apenas uma vez.

  </details><br />

  <details>
    <summary><strong>Descrição do cargo</strong></summary><br />

  - **Tipo de campo**: TextArea.
  - **Validação**: limite de 500 caracteres .

  </details>
</details><br />

<details>
  <summary><strong>💡 Dica</strong></summary><br />

- Lembre-se de envolver seus campos em uma `label` com o nome do campo, pois é esse valor que o avaliador automático irá usar para encontrar o elemento.

</details><br />

<details>
  <summary><strong>O que será verificado</strong></summary><br />

- Será verificado se existe uma caixa de texto envolta por uma `label` com o texto `Resumo do currículo`.
- Será verificado se o campo `Resumo do currículo` tem o tamanho máximo de 1000 caracteres.
- Será verificado se, ao digitar no campo `Resumo do currículo`, o campo recebe o valor corretamente.

- Será verificado se existe um campo do tipo `text` envolto por uma `label` com o texto `Cargo`.
- Será verificado se o campo `Cargo` tem o tamanho máximo de 40 caracteres.
- Será verificado que, na primeira vez (e apenas na primeira vez) em que o mouse é passado por cima desse campo, um `alert` com a mensagem "Preencha com cuidado esta informação." é exibido.


- Será verificado se existe uma caixa de texto envolta por uma `label` com o texto `Descrição do cargo`.
- Será verificado se o campo `Descrição do cargo` tem o tamanho máximo de 500 caracteres.
- Será verificado se, ao digitar no campo `Descrição do cargo`, o campo recebe o valor corretamente.

</details><br />

## 4 - Crie um botão que, ao ser clicado, monta uma `<div>` com o consolidado dos dados que foram inseridos no formulário.

<details>
  <summary>A pessoa usuária deverá ser capaz de ver seus dados pessoais e profissionais consolidados após preencher todo o formulario e enviá-lo. Para isso crie os seguintes elementos:</summary><br />

- Um botão com o texto `Enviar` que, ao ser clicado, exibe os dados consolidados.

- Um elemento de texto que tem como conteúdo o nome informado no formulário.

- Um elemento de texto que tem como conteúdo o email informado no formulário.
 
- Um elemento de texto que tem como conteúdo o cpf informado no formulário.

- Um elemento de texto que tem como conteúdo o endereço informado no formulário.

- Um elemento de texto que tem como conteúdo a cidade informada no formulário.

- Um elemento de texto que tem como conteúdo o estado informado no formulário.

- Um elemento de texto que tem como conteúdo o tipo de endereço informado no formulário.

- Um elemento de texto que tem como conteúdo o resumo do currículo informado no formulário.

- Um elemento de texto que tem como conteúdo o cargo informado no formulário.

- Um elemento de texto que tem como conteúdo a descrição do cargo informada no formulário.

</details><br />



<details>
  <summary><strong>O que será verificado</strong></summary><br />

- Será verificado se existe um botão com o texto `Enviar`.
- Será verificado se os dados consolidados não aparecem na tela antes de o formulário ser enviado
- Será verificado que, ao clicar no botão `Enviar`, os dados consolidados aparecem na tela.

</details>

## 5 - Crie um botão `Limpar` que limpa todos os campos do formulário e a `<div>` com seu currículo também.

<details>
  <summary>A pessoa usuária deverá ser capaz de limpar todos os campos do formulário e, consequentemente, consolidado as informações de seu currículo após preencher todo o formulario e enviá-lo. Para isso crie:</summary><br />

- Um botão com o  texto "Limpar" que, ao ser clicado, faz com que os dados dos formulário e os dados consolidados deixem de ser exibidos

</details>

<details>
  <summary><strong>O que será verificado</strong></summary><br />

- Será verificado se existe um botão com o texto `Limpar`.
- Será verificado que, após clicar no botão "Limpar",  os dados do formulário e os dados consolidados não aparecem na tela.

</details><br />

# Exercícios extras (não são testados pelo avaliador)

## Utilize regex para validar o campo email.

<details>
  <summary>Utilize uma Expressão Ragular para validar o campo de email</summary><br />

- A validação deve acontecer no evento `onChange` do input.
- O formato esperado é `trybe@gmail.com`.
- Você pode validar a sua regex nesse [link do regextester.com](https://www.regextester.com/100026).
- Caso o campo esteja inválido, exiba uma mensagem `email is inválid`
- 💡 Dica: Para estudar como o regex funciona, utilize [esse conteúdo do site regexone.com](https://regexone.com/)

</details>
