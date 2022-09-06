
## HTML
```html
<div>
    <h1 />
    <input />
    <img />
    <hr/>
    <ul>
        <li>
          <div />
        </li>
    </ul>
</div>
```

## Css
```css
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #303030;
  color: white;
  text-align: center;
}

ul {
  list-style: none;
}

.color-display {
  width: 30px;
  height: 30px;
  border-radius: 5px;
  display: inline-block;
  margin-right: 10px;
}

li {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
}

img {
  display: block;
  margin: 0 auto;
}
```

## Data.js

```js
const colors = [
  {
    name: 'red',
    hex: '#ff0000',
    suco: 'Tomate',
  },
  {
    name: 'green',
    hex: '#00ff00',
    suco: 'Limão',
  },
  {
    name: 'blue',
    hex: '#0000ff',
    suco: 'Cramberries',
  },
  {
    name: 'cyan',
    hex: '#0ff',
    suco: 'Clorofila',
  },
  {
    name: 'magenta',
    hex: '#f0f',
    suco: 'Morango',
  },
  {
    name: 'yellow',
    hex: '#ff0',
    suco: 'Cevada',
  },
  {
    name: 'black',
    hex: '#000',
    suco: 'Jabuticaba',
  },
];

export default colors;
```