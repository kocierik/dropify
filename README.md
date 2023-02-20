


<h1 align="center">
  <br>
  <img width="200px" src="https://user-images.githubusercontent.com/41591336/219984344-12198766-c9c8-44e0-a057-a6dac7191df2.png" alt="useWorker"
    title="useWorker() Use web workers with react hook" />
  <br>
</h1>



<h3 align="center">
 <img alt="GitHub" src="https://img.shields.io/npm/dm/@kocierik/dropify" />
 <!--  <img alt="size" src="https://img.shields.io/bundlephobia/minzip/@kocierik/dropify/0.1.8" /> -->
  <img alt="GitHub" src="https://img.shields.io/npm/l/@koale/useworker" />
 <img src="https://camo.githubusercontent.com/6ef0a300e96da21e04d4d45bf54285202674498c/68747470733a2f2f62616467656e2e6e65742f62616467652f547970655363726970742f537570706f7274" alt="TypeScript Support" title="TypeScript Support" data-canonical-src="https://badgen.net/badge/TypeScript/Support" style="max-width:100%;">
</h3>

---

## 🎨 Features

- Run asynchronous function 
- Supports **Promises** 
- Typescript support

---

## 💾 [Install](https://www.npmjs.com/package/@koale/useworker)

- **@latest**

```bash
npm install --save @kocierik/dropify
```

---

## 🔨 Import

```tsx
import { DropDown, Setting } from "@kocierik/dropify";
```

---

## 📙 Documents


---

## 🐾 Usage DropDown 

```ts
import { DropDown } from '@kocierik/dropify';

const App = () => {
  const list = ['a', 'b', 'c', 'd']
  const [filter, setFilter] = React.useState([])
  return (
    <div className='flex flex-1 p-5'>
      <div>
        <DropDown label={'label'} list={list} filter={filter} setFilter={setFilter} />
      </div>
      <div className='p-5 flex-row flex'>
        {filter.map((item, index) => {
          return <div key={index} className='p-5'>{item}</div>;
        })
        }
      </div>
    </div>
  );
};
```

## 🐾 Usage Setting 

```ts
import { Setting } from '@kocierik/dropify';

const App = () => {
  const setting: Isetting[] = [{
    label: 'helper',
    handler: () => {
      alert('help!')
    }
  }, {
    label: 'Click me',
    handler: () => {
      alert('clicked!')
    }
  }
  ]
  return (
    <div className='flex flex-1 p-5'>
      <Setting settings={setting} />
    </div>
  );
};
```

---

## 🖼 Live Demo

<div align='center'>
<img alt="dropdown demo" height='300px' src="https://user-images.githubusercontent.com/41591336/219983423-c4c0f62b-5a48-4ad9-ae9a-3574042444f4.gif" />
<img alt="setting demo" height='300px' src="https://user-images.githubusercontent.com/41591336/219983427-bf352e1d-5074-48e4-894d-a72e68e9504d.gif" />
</div>

---

## 🔧 Roadmap

- [] Add more components
- [] Add more style
- [] Add animation


---

## 🌏 Contribute? Bug? New Feature?

The library is experimental so if you find a **bug** or would like to request a new **feature**, open an [issue](https://github.com/kocierik/dropify/issues/new)

---

## 💻 Mantainers

- [@kocierik](https://github.com/kocierik)

---

## 📜 License

[MIT](https://github.com/kocierik/dropify/blob/main/LICENSE)

---

