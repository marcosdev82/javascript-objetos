# 📦 Objetos Embutidos Padrão em JavaScript

Este repositório documenta e exemplifica todos os **objetos internos padrão** (standard built-in objects) do JavaScript, incluindo seus métodos e propriedades mais importantes.

> ⚠️ **Nota:** O termo "objetos globais" ou "objetos internos padrão" **não deve ser confundido** com o objeto global (`globalThis`, `window`, etc.). Neste contexto, referem-se a objetos que estão disponíveis **no escopo global da linguagem JavaScript**, definidos pela especificação ECMAScript.

---

## 🧠 O que são Objetos Embutidos?

Objetos embutidos são fornecidos nativamente pela linguagem JavaScript e estão disponíveis automaticamente no ambiente de execução (como navegadores ou Node.js). Eles não exigem importação ou configuração adicional.

---

## 🌐 Escopo Global

O próprio **objeto global** pode ser acessado usando o operador `this` no escopo global, ou via `globalThis`. O escopo global inclui as propriedades deste objeto, como:

```js
console.log(globalThis.Math); // acesso ao objeto Math
