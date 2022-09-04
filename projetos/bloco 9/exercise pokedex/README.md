# Boas-vindas ao repositório do exercício Pokédex Components!

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

Você vai implementar de forma simplificada uma [Pokedex](https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9dex)!! Para os que não estão familiarizados com o universo Pokémon, a Pokédex é uma enciclopédia de todos os pokémons na natureza.

Você pode usar a imaginação para estilizar a sua aplicação. Entretanto, é <strong>obrigatório</strong> que você implemente <strong>pelo menos</strong> estes dois componentes:
<ol>
  <li>
    <strong>Pokedex</strong>: esse componente representa a enciclopédia de pokémons. Esse componente recebe como entrada uma lista de pokémons para serem mostrados na tela. Para cada um desses pokémons recebidos, Pokedex chama o componente citado abaixo (Pokemon).</li>
  <li>
    <strong>Pokemon</strong>: como o próprio nome diz, esse componente representa um pokémon. Esse componente recebe como entrada um objeto que contém informações referentes a um pokémon específico. Esse componente precisa retornar as seguintes informações obrigatórias para serem mostradas para quem usar a aplicação, essas informações devem ser validadas utilizando PropTypes:
    <ul>
      <li>nome do pokemon;</li>
      <li>tipo do pokemon;</li>
      <li>peso médio do pokemon, acompanhado da unidade de medida usada;</li>
      <li>imagem do pokemon.</li>
    </ul>
  </li>
</ol>
Segue uma sugestão de implementação da aplicação:

![image](my-pokedex-project.gif)


</details>

<details>
  <summary><strong>:memo: Habilidades</strong></summary><br />

Neste exercício, verificamos se você é capaz de:

- Criar componentes React reutilizáveis;

- Renderizar as informações contidas em um array em forma de componente;

- Fazer as validações de PropTypes corretamente.

</details>



# Orientações

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary><br />

1. Clone o repositório

- Use o comando: `git clone git@github.com:tryber/sd-024-a-exercise-pokedex.git`.
- Entre na pasta do repositório que você acabou de clonar:
  - `cd sd-024-a-exercise-pokedex`

2. Instale as dependências

- `npm install`.

3. Crie uma branch a partir da branch `main`

- Verifique que você está na branch `main`
  - Exemplo: `git branch`
- Se não estiver, mude para a branch `main`
  - Exemplo: `git checkout main`
- Agora crie uma branch à qual você vai submeter os `commits` do seu exercício
  - Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-exercicio`
  - Exemplo: `git checkout -b joaozinho-sd-0x-exercise-pokedex-part-1`

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`

- Verifique que as mudanças ainda não estão no _stage_
  - Exemplo: `git status` (deve aparecer listada a pasta _joaozinho_ em vermelho)
- Adicione o novo arquivo ao _stage_ do Git
  - Exemplo:
    - `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
    - `git status` (deve aparecer listado o arquivo _joaozinho/README.md_ em verde)
- Faça o `commit` inicial
  - Exemplo:
    - `git commit -m 'iniciando o exercício x'` (fazendo o primeiro commit)
    - `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

5. Adicione a sua branch com o novo `commit` ao repositório remoto

- Usando o exemplo anterior: `git push -u origin joaozinho-sd-0x-exercise-pokedex-part-1`

6. Crie um novo `Pull Request` _(PR)_

- Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-0x-exercise-pokedex-part-1/pulls)
- Clique no botão verde _"New pull request"_
- Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
- Coloque um título para a sua _Pull Request_
  - Exemplo: _"Cria tela de busca"_
- Clique no botão verde _"Create pull request"_
- Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
- **Não se preocupe em preencher mais nada por enquanto!**
- Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-0x-exercise-pokedex-part-1/pulls) e confira que o seu _Pull Request_ está criado

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

Use o conteúdo sobre [Code Review](https://app.betrybe.com/course/real-life-engineer/code-review) para te ajudar a revisar os _Pull Requests_.

</details>

<details>
  <summary><strong>🎛 Linter</strong></summary><br />

Para garantir a qualidade do código, vamos utilizar neste exercício os linters `ESLint` e `StyleLint`.
Assim o código estará alinhado com as boas práticas de desenvolvimento, sendo mais legível
e de fácil manutenção! Para rodá-los localmente, execute os comandos abaixo:

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

Para avaliar o exercício iremos utilizar [React Testing Library (RTL)](https://testing-library.com/docs/react-testing-library/intro) para execução dos testes.

Na descrição dos requisitos (logo abaixo) será pedido que seja feita a adição de atributos data-testid nos elementos *HTML*. Vamos a um exemplo para deixar evidente essa configuração: se o requisito pedir "crie um botão e adicione o id de teste (ou data-testid) com o valor my-action, você pode escrever:

```html
<button data-testid="my-action"></button>
```

ou

```html
<a data-testid="my-action"></a>
```

Ou seja, o atributo `data-testid="my-action"` servirá para o React Testing Library(RTL) identificar o elemento e dessa forma, conseguiremos realizar testes focados no comportamento da aplicação.

**ATENÇÃO!** Muito cuidado com os nomes especificados nos requisitos! O conteúdo deve ser exatamente igual ao texto descrito no requisito.

Para verificar a solução proposta, você pode executar todos os testes localmente, basta executar:

```bash
npm test
```

### Dica: desativando testes

Especialmente no início, quando a maioria dos testes está falhando, a saída após executar os testes é extensa. Você pode desabilitar temporariamente um teste utilizando a função `skip` junto à função `it`. Como o nome indica, esta função "pula" um teste. Veja um exemplo:

```js
it.skip("Será validado se o campo de filtro por nome renderiza na tela", () => {
  render(<App />);
  const filterNameInput = screen.getByTestId(/name-filter/i);
  expect(filterNameInput).toBeInTheDocument();
});
```

![image](skip-image.png)

Uma estratégia é pular todos os testes no início e ir implementando um teste de cada vez, removendo dele a função `skip`.

Você também pode rodar apenas um arquivo de teste, por exemplo:

```bash
npm test 
```

Uma outra forma para contornar esse problema é a utilização da função `.only` após o `it`. Com isso, será possível que apenas um requisito rode localmente e seja avaliado.

```js
it.only("Será validado se o campo de filtro por nome renderiza na tela", () => {
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

## 1 - Crie o componente `<Pokedex />`
<details>
  <summary>Este componente deverá renderizar um título e uma <code>ul</code></summary><br />
  
  - Este componente deve ser criado dentro da pasta `src/components`.
  
  - Este componente deverá conter uma tag `h1` com o texto `Pokédex`.
  
  - Este componente deverá conter uma tag `ul`. Por enquanto, essa lista estará vazia.
  
  - Renderize esse componente dentro do `App.js`.

</details>

<details>
  <summary><strong>O que será verificado</strong></summary><br />

  - Será validado se uma tag `h1` com o texto `Pokédex` é renderizado dentro do componente `<Pokédex />`.
  
  - Será validado se uma tag `ul` é renderizada dentro do componente `<Pokedex />`.
  
  - Será validado se o componente `<Pokedex />` é renderizado dentro do `App.js`.

</details>

## 2 - Crie o componente `<Pokemon />`
<details>
  <summary>Este componente deverá renderizar as informações de um pokémon</summary><br />
  
  - Este componente deve ser criado dentro da pasta `src/components`.
  
  - Este componente deverá recerber um `props` chamada `pokemon`, que será um objeto com as informações de um pokémon.
  
  - Este componente deverá conter uma tag `li` que envolva todo seu conteúdo.
  
  - Este componente deverá renderizar as seguintes informações (que estão dentro do objeto recebido via `props` chamada `pokemon`): 
    - o nome do pokémon;
    - o tipo do pokémon;
    - o peso médio do pokémon, acompanhado da unidade de medida usada. Por exemplo: "20 kg";
    - a imagem do pokémon.
  
  - A imagem deve conter o atributo `alt` com o valor do nome do pokémon.

</details>

<details>
  <summary><strong>O que será verificado</strong></summary><br />

  - Será verificado se o componente possui a tag `li` envolvendo seu conteúdo.
  
  - Será validado se o nome do pokémon passado via `props` é renderizado.
  
  - Será validado se o tipo do pokémon passado via `props` é renderizado.
  
  - Será validado se o peso médio do pokémon e a unidade de medida passados via `props` serão renderizados.
  
  - Será validado se a imagem do pokémon passado via `props` é renderizada.
  
  - Será validado se a imagem do pokémon possui o atributo `alt` com o nome do pokémon passado via `props`.
  - 
</details>

## 3 - Renderize uma lista com as informações de cada pokémon
<details>
  <summary>Renderize uma lista com as informações dos pokémon dentro do componente <code>&lt;Pokedex /&gt;</code></summary><br />
  
  - O componente `<Pokedex />` deve receber a lista de pokémon através de uma `props` chamada `pokemonList`. Adicione essa `props` ao componente, caso ainda não tenha criado ela. 
  
  - Você encontrará a lista com as informações dos pokémon no arquivo `src/data.js`.
  
  - Cada pokémon da lista deverá ser renderizado por um componente `Pokemon`. Passe as informações do pokémon através da `props` que já existe nesse componente.
  
</details>


<details>
  <summary>💡dicas</summary><br />
  
  - Dependendo da sua implementação, o teste do requisito 1 pode começar a falhar quando você adicionar a lógica de renderizar a lista que é recebida por `props` no componente `<Pokedex />`. Pense em um jeito de garantir um valor padrão para esse `props` mesmo que nenhum valor seja passado.
  
  - Lembre-se de que, quando você está renderizando uma lista no React, é necessário adicionar um atributo `key` em cada elemento. Você pode usar o `id` do pokémon como `key`.

</details>

<details>
  <summary><strong>O que será verificado</strong></summary><br />
  
  - Será validado se o componente `<Pokedex />` renderiza a quantidade correta de elementos.
  
  - Será validado se todos os elementos da lista são renderizados.

</details>

# Exercício extra (não é testado pelo avaliador)

Estilize a aplicação adicionando classes para estilização dos seus componentes de forma que cada conteúdo listado seja um card
