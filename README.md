# Corso-Angular-4Bi-2025-2026

## Riferimenti

- [Nodejs](https://nodejs.org/en)
- [Angular](https://angular.dev/)
- [Repository Andrea Trentini](https://github.com/andreatrentini/Corso-Angular-4Bi-2025-2026)

## Configurazione iniziale

1. Installare nodejs (Node.js - v20.19.0 or newer) sul computer (in codespaces risulta già installato)

**Linux**
```bash
sudo apt update
sudo apt install nodejs npm
```
**Windows**  
Scaricare ed installare il programma

2. Installare angular
```bash
npm install -g @angular/cli
```
Come risultato aggiungiamo **ng** ai programmi disponibili sul pc, con il quale eseguiamo pe principali operazioni che riguardano angular

## Creare la prima applicazione
```bash
ng new nome-applicazione
```
> [!TIP]
> Scrivere sempre i nomi di applicazioni, componenti, servizi, ecc in **minuscolo**. Se il nome è costituito da più parole separarle con un trattino (meno)

## Struttura dell'applicazione
- .vscode: directory nascosta che contiene le impostazioni di Visual Studio Code **(NON MODIFICARE NE' CANCELLARE)**
- node_modules: packages nodejs necessari per la creazione della webapp, cioè per il funzionamento sia della nostra applicazione che per il suo sviluppo. **NON AGGIUNGERE AI COMMIT!**. La directory può essere cancellata. Per ricrearla è sufficiente eseguire il comando `npm install`. Attenzione alla directory corrente quando si esegue il comando: deve essere la directory che contiene il progetto.
- public: in genere contiene tutti i file multimediali (immagini, sfondi, audui, filmati, favicon...) che vogliamo utilizzare nella nostra applicazione
-src: contiene tutti i file che devono essere scritti, modificati, creati e che contengono il codice sorgente della nostra applicazione
  - app: saranno contenuti tutti i file typescript, html e css che costituiscono la nostra applicazione
    - app.config.ts: configurazione principale della nostra applicazione
    - app.html, app.cs, app.ts: costituiscono il template di un componente (html), aspetto grafico di un componente (css) e business logic di un componente (Typescript). Un componente è un pezzo della mia applicazione
    - app.route.ts: Con angular si realizzano single page application, il contenuto della finestra viene creato in tempo reale da javascript. Questo file mi consente di associare diverse URL a diversi componenti
    - app.spec.ts: tutti i file che finiscono per spec.ts contengono codice typescript per il test automatico dei componenti
  - index.html: è la pagina principale dell'applicazione
  - main.ts: è il punto di ingresso dell'applicazione
  - style.css: contiene gli stili globali dell'applicazione
- .editorconfig: contiene parametri di configurazione di Visual Studio Code
- .gitignore: contiene un elenco di file e cartelle che **NON DEVONO ESSERE TRACCIATI DA GIT**, quindi non saranno presenti nei commit e non verranno salvati su Github.
- angular.json: configurazione del progetto **angular** definita da `ng new nome-progetto`
- package.json, package-lock.json: sono file di configurazione di un qualsiasi progetto **Nodejs**. NON va modificato!!!
- tsconfig.app.json, tsconfig.json, tsconfig.spec.json: configurazione linguaggio Typescript, **NON vanno modificati.**

## Eseguire il DEPLOY dell'applicazione
Per eseguire il deploy dell'applicazione ed ottenere i file da distribuire ai clienti (attenzione stiamo parlandi di un'applicazione che non prevede SSR (Server side rendering)) si utilizza il comando:
```bash
ng build
```
In questo modo viene creata la directory dist/nome-progetto/browser ed all'interno troviamo:
- index.html
- style.css
- alcuni file javascript
Per la pubblicazione dell'applicazione è sufficiente mettere in rete i file con un web server statico.
Il build deve essere rieseguito dopo ogni modifica apportata al progetto.

## Server WEB di sviluppo
Angular ci mette a disposizione un server WEB da utilizzare in fase di sviluppo. Il server WEB risponde in automatico ad ogni modifica apportata al progetto, eseguendo nuovamente ed automaticamente il build ed aggiornando la pagina del browser.
```bash
ng serve
```

## Collegamenti
- [Guida sull'applicazione Corso](./corso/CORSO.md)