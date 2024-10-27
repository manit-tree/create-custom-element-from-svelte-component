# Create custom elment from Svelte component

Mini project for learning how to create custom element from Svelte component.

### Counter.svelte

```html
<script>
    let { color } = $props();
    let count = $state(0);

    let increase = () => {
        count++;
    }
</script>

<div>    
    <h1 style="--color:{ color||'blue' }">Counter : <span>{ count }</span></h1>
    <button onclick={increase}>Increase</button>
</div>

<style>
div {
    font-family: sans-serif, tahama;

    h1 {
        span {
            color: var(--color);
        }
    }

    button {
        padding: 0.5em 0.75em;
        text-transform: uppercase;
    }
}
</style>
```

### CounterComponent.js

```javascript
import Counter from './Counter.svelte';

customElements.define('x-counter', Counter.element);
```

### index.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Create custom element from Svelte Component</title>
  </head>
  <body>
    <div id="app">
      <x-counter color="red"></x-counter> 
    </div>
    <script src="./dist/CounterComponent.iife.js?v=1.0.4"></script>
  </body>
</html>
```

### package.json

```json
{
  "name": "custom-element",
  "description": "create custom element from Svelte component",
  "version": "1.0.0",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  },
  "keywords": [],
  "author": "",
  "license": "MIT",
  "devDependencies": {
    "@sveltejs/vite-plugin-svelte": "^4.0.0",
    "svelte": "^5.0.5",
    "vite": "^5.4.8"
  }
}
```

### vite.config.js

```javascript
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte({
      compilerOptions: {
        customElement: true
      }
    })
  ],
  build: {
        outDir: './dist',
        minify: true,
        sourcemap: false,
        emptyOutDir: true,   

        lib: {
            entry: ['./src/CounterComponent.js'],
            name:'___',
            formats: ['iife'],
            fileName: (format) => `[name].[format].js`
        }
    },
})
```


