# 🚀 Introduzione ad Angular

## 🎨✨ Aggiungere Bootstrap al progetto

[🌐 Sito ufficiale Bootstrap](https://getbootstrap.com/)

```bash
npm install bootstrap@5.3.8
```

🔧🛠️ Modifica il file `angular.json`:

```json
"styles": [
    "src/styles.css",
    "node_modules/bootstrap/dist/css/bootstrap.min.css"
],
"scripts": [
    "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
]
```

---

## 🧩🔑 Oggetti principali di Angular

### 🏗️🧑‍💻 Componente

Un componente è composto da:
- 📝 Template HTML
- 🎨 Foglio di stile CSS
- 💻 File TypeScript

Un componente in TypeScript è una classe:
```typescript
export class App {
    protected readonly title = signal('Corso Angular 4BI 2025/2026');
}
```

✨ Prima della classe c’è un decoratore che dice al builder che questa è una classe componente.

- 🏷️ **selector**: il tag da usare per inserire il componente nella pagina web
- 📄 **templateUrl**: percorso del file HTML che definisce la vista del componente
- 🎨 **styleUrl**: percorso del file CSS con gli stili solo per questo componente
- 📦 **imports[...]**: librerie, funzionalità o altre classi da usare nel componente

```typescript
@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
```