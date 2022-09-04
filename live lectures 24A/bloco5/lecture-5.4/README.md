# Repositório: sd-024-a-live-lectures

## Conteúdos das aulas ao vivo da Turma 24 - Tribo A 😉 🚀

O objetivo desse repositório é armazenar todos os códigos, scripts, imagens e documentos trabalhados / criados durante as aulas ao vivo pelos especialistas da Trybe.

## Começando 🧑🏻‍🏫

Para ter acesso aos conteúdos você só precisa clonar o repositório com o comando:

```sh
git clone git@github.com:tryber/sd-024-a-live-lectures.git
```
E não esquecer de dar um comando ``` git pull ``` depois de cada aula ao vivo para poder atualizar seu repositório local!

### Estrutura 👀

Para ter acesso aos conteúdos dados em aula, na sua máquina, é só acessar as branchs criadas para cada aula com o comando ``` git checkout lecture/3.1 ```, por exemplo!

No repositório remoto cada conetudo estará diponivel em seu respectivo Pull Request!

### Atividade em grupo

Vocês devem criar os códigos necessários no arquivo ```script.js``` para aplicar as bordas existentes na ```paleta de bordas``` da página ```calendar.html``` nos elementos da página após a seleção feita pelo seu usuário conforme imagem abaixo:

![Project Gif](./images/paletadebordas.gif)

Obs.: As classes CSS para aplicar os estilos das bordas já estão disponiveis no arquivo ```style.css``` dessa aula, ok!

```css
.margen-geral {
  margin: 5px;
}

.borda {
  border: 3px solid darkslategrey;
}

.borda-pontilhada {
  border: 3px solid darkslategrey;
  border-style: dotted;
}

.borda-arredondada {
  border: 3px solid darkslategrey;
  border-radius: 10px;
}

.borda-dupla {
  border: 5px solid darkslategrey;
  border-style: double;
}

.margin-paleta {
  margin-left: 15px;
}
```