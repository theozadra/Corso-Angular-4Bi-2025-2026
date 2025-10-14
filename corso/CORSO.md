# Introduzione ad Angular

## Aggiungere bootstrap al progetto

[Sito ufficiale Bootstrap](https://getbootstrap.com/)

```bash
npm install bootstrap@5.3.8
```

Modificare il file angular.json:
```json
"styles": [
    "src/styles.css",
    "node_modules/bootstrap/dist/css/bootstrap.min.css"
],
"scripts": [
    "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
]
```

## Oggetti principali di angular

### Componente
Un componente è costituito da:
- un template HTML
- un foglio stile
- un file typescript

Un componente dal punto di vista di typescript è una classe 
```Typescript
export class App {
  protected readonly title = signal('Corso angular 4Bi 2025/2026');
}

```
anticipata da un decoratore che informa il builder che si tratta di una classe che definisce un componente.
- selector: il tag da utilizzare per inserire il componente nella pagina WEB
- templateUrl: percorso del file HTML che definisce il template (o vista) per il componente
- styleUrl: percorso del file CSS cogn gli stili da applicare solo a questo componente
- imports[...]: Le librerie o funzionalità o altre classi che si vuole usare nel componente

```Typescript
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
```