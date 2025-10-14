# Corso-Angular-4Bi-2025-2026

## Riferimenti

- [Download Node.js](https://nodejs.org/)
- [Download Angular CLI](https://angular.io/cli)
- [Documentazione ufficiale Angular](https://angular.io/docs)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Guida npm](https://docs.npmjs.com/)

### Windows

Scaricare ed installare il programma.

2. Installare Angular:

```bash
npm install -g @angular/cli
```

Questo comando aggiunge **ng** ai programmi disponibili sul PC, permettendo di eseguire le principali operazioni relative ad Angular.

## Creare la prima applicazione

```bash
ng new nome-applicazione
```

> [!TIP]
> Scrivere sempre i nomi di applicazioni, componenti, servizi, ecc. in **minuscolo**. Se il nome è composto da più parole, separarle con un trattino (es. `nome-applicazione`).

## Struttura dell'applicazione

- `.vscode`: directory nascosta con le impostazioni di Visual Studio Code **(NON MODIFICARE NE' CANCELLARE)**
- `node_modules`: pacchetti Node.js necessari per la creazione e lo sviluppo della webapp. **NON AGGIUNGERE AI COMMIT!** Può essere cancellata e ricreata con `npm install` (assicurarsi di essere nella directory del progetto).
- `public`: contiene file multimediali (immagini, sfondi, audio, video, favicon...) utilizzati nell'applicazione.
- `src`: contiene tutti i file sorgente da scrivere, modificare e creare.
  - `app`: contiene i file TypeScript, HTML e CSS della tua applicazione.
    - `app.config.ts`: configurazione principale.
    - `app.html`, `app.css`, `app.ts`: rispettivamente template HTML, stile CSS e logica TypeScript di un componente.
    - `app.route.ts`: gestisce le URL associate ai componenti (single page application).
    - `app.spec.ts`: file di test automatici (TypeScript).
- `index.html`: pagina principale dell'applicazione.
- `main.ts`: punto d'ingresso dell'applicazione.
- `style.css`: stili globali.
- `.gitignore`: elenca file/cartelle **NON TRACCIATI DA GIT**.
- `angular.json`: configurazione del progetto generata da `ng new`.
- `package.json`, `package-lock.json`: configurazione del progetto Node.js, **NON MODIFICARE!**
- `tsconfig.app.json`, `tsconfig.json`, `tsconfig.spec.json`: configurazione TypeScript, **NON MODIFICARE!**

## Eseguire il DEPLOY dell'applicazione

Per ottenere i file da distribuire ai clienti (senza SSR), eseguire:

```bash
ng build
```

Verrà creata la directory `dist/nome-progetto/browser` contenente:
- `index.html`
- `style.css`
- file JavaScript

Per pubblicare l'applicazione, basta mettere questi file su un web server statico. Eseguire nuovamente il build dopo ogni modifica.

## Server WEB di sviluppo

Angular offre un server WEB per lo sviluppo, che aggiorna automaticamente la pagina del browser ad ogni modifica:

```bash
ng serve
```

## Collegamenti
- [Guida sull'applicazione Corso:](./corso/CORSO.md)