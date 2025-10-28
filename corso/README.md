# 🚀 Corso Angular 4Bi - 2025/2026

Benvenuto nel corso di Angular! Questo progetto contiene tutti gli esempi e gli esercizi per imparare i concetti fondamentali di Angular.

## 📚 Argomenti Trattati

### 🔗 1. Angular Bindings

I **bindings** sono gli strumenti che ci consentono di collegare e rendere dinamici i template HTML con gli attributi e metodi della classe TypeScript del componente.

#### 📌 String Interpolation

La **string interpolation** permette di visualizzare nel template il valore di una "variabile" TypeScript.

**⚠️ IMPORTANTE:** Le variabili che possono essere visualizzate sono solo attributi della classe!

**🎯 Signals in Zone-less projects:**
In un progetto zone-less, per garantire che la vista venga aggiornata quando cambia il valore della variabile, DEVI usare i **signals** e non variabili tradizionali.

**🔬 Cosa sono i signals?**
- Sono funzioni wrapper (contenitori) che gestiscono un valore
- Possono contenere qualsiasi tipo: String, number, array, oggetti
- Quando vengono modificati tramite i loro metodi, la vista si aggiorna automaticamente

**📋 Steps per String Interpolation:**
1. Dichiarare un signal in TypeScript ed assegnargli un valore
2. Inserire una chiamata alla funzione signal fra doppie parentesi graffe `{{}}`

**💡 Esempio:**
```typescript
// Nel component TypeScript
studente: WritableSignal<string> = signal('Theo Zadra');
```

```html
<!-- Nel template HTML -->
<p>Studente: {{studente()}}</p>
```

#### 🎯 Event Binding

L'**event binding** consente di eseguire codice TypeScript al verificarsi di un evento.

**📋 Come procedere:**
1. Scegliere l'evento che vi interessa
2. Dal nome dell'evento togliere "on" iniziale e inserire quello che resta fra parentesi tonde
3. Aggiungere un metodo alla classe con il codice da eseguire

**💡 Esempi:**

**Esempio 1 - Event Binding Semplice:**
```html
<button class="btn btn-primary" (click)="cambiaNome()">Cambia nome</button>
```

```typescript
cambiaNome(): void {
    this.studente.set('Luca Boschi');
}
```

**Esempio 2 - Contatore con Incremento/Decremento:**
```html
<div class="row">
    <div class="col-sm-4">
        <button class="btn btn-danger" (click)="decrementa()">Decrementa</button>
    </div>
    <div class="col-sm-4">
        Valore contatore: {{contatore()}}
    </div>
    <div class="col-sm-4">
        <button class="btn btn-success" (click)="incrementa()">Incrementa</button>
    </div>
</div>
```

```typescript
contatore: WritableSignal<number> = signal(0);

incrementa(): void {
    // Metodo consigliato con update()
    this.contatore.update(valoreAttuale => valoreAttuale + 1);
}

decrementa(): void {
    this.contatore.update(valoreAttuale => valoreAttuale - 1);
}
```

#### 🔧 Property Binding

Il **property binding** permette di impostare il valore di un attributo HTML in modo dinamico usando variabili/signal TypeScript.

**🔍 Sintassi:** 
Racchiudere il nome dell'attributo fra `[parentesi quadre]` e inserire la variabile/signal che contiene il valore.

**💡 Esempi:**

**Binding di immagini:**
```typescript
nomeImmagine: WritableSignal<string> = signal('/bicicletta.jpg');
```

```html
<!-- Immagine statica -->
<img class="img-fluid" src="/bicicletta.jpg">

<!-- Property binding -->
<img class="img-fluid" [src]="nomeImmagine()">
```

**Carosello di immagini:**
```typescript
indiceImmagine: WritableSignal<number> = signal(0);
immagini: string[] = ['/bicicletta.jpg', '/ciao.jpg', '/cinquecento.jpg', '/aereo.jpg'];

prev(): void {
    if (this.indiceImmagine() > 0) {
        this.indiceImmagine.update(valoreCorrente => valoreCorrente - 1);
    } else {
        this.indiceImmagine.set(this.immagini.length - 1);
    }
}

next(): void {
    if (this.indiceImmagine() == this.immagini.length - 1) {
        this.indiceImmagine.set(0);
    } else {
        this.indiceImmagine.update(valoreAttuale => valoreAttuale + 1);
    }
}
```

```html
<div class="row">
    <div class="col-sm-3">
        <button class="btn btn-primary" (click)="prev()">Prev</button>
    </div>
    <div class="col-sm-6">
        <img class="img-fluid" [src]="immagini[indiceImmagine()]">
    </div>
    <div class="col-sm-3">
        <button class="btn btn-primary" (click)="next()">Next</button>
    </div>
</div>
```

#### 🎨 Style Binding

Lo **style binding** permette di impostare stili CSS dinamicamente.

**🔍 Sintassi:** 
`[style.nomestile]="espressione typescript che determina il valore"`

**💡 Esempi:**

```typescript
colori: string[] = ['red', 'green', 'blue', 'yellow'];
```

```html
<!-- Stile statico -->
<p style="color:red;">Paragrafo rosso statico</p>

<!-- Style binding dinamico -->
<p [style.color]="colori[2]">Paragrafo con colore dinamico</p>
```

## 🛠️ Codice Completo del Componente

### 📄 bindings.ts
```typescript
import { Component, signal, WritableSignal } from '@angular/core';

@Component({
    selector: 'app-bindings',
    imports: [],
    templateUrl: './bindings.html',
    styleUrls: ['./bindings.css']
})
export class Bindings {
    // Dichiarazione dei signals
    studente: WritableSignal<string> = signal('Theo Zadra');
    contatore: WritableSignal<number> = signal(0);
    nomeImmagine: WritableSignal<string> = signal('/bicicletta.jpg');
    indiceImmagine: WritableSignal<number> = signal(0);
    
    // Arrays per esempi
    immagini: string[] = ['/bicicletta.jpg', '/ciao.jpg', '/cinquecento.jpg', '/aereo.jpg'];
    colori: string[] = ['red', 'green', 'blue', 'yellow'];

    // Metodi per Event Binding
    cambiaNome(): void {
        this.studente.set('Luca Boschi');
    }

    incrementa(): void {
        this.contatore.update(valoreAttuale => valoreAttuale + 1);
    }

    decrementa(): void {
        this.contatore.update(valoreAttuale => valoreAttuale - 1);
    }

    prev(): void {
        if (this.indiceImmagine() > 0) {
            this.indiceImmagine.update(valoreCorrente => valoreCorrente - 1);
        } else {
            this.indiceImmagine.set(this.immagini.length - 1);
        }
    }

    next(): void {
        if (this.indiceImmagine() == this.immagini.length - 1) {
            this.indiceImmagine.set(0);
        } else {
            this.indiceImmagine.update(valoreAttuale => valoreAttuale + 1);
        }
    }
}
```

## 🎯 Concetti Chiave da Ricordare

### 🔸 Signals
- **WritableSignal**: Signal che può essere modificato
- **signal()**: Funzione per creare un nuovo signal
- **set()**: Imposta un nuovo valore
- **update()**: Modifica il valore basandosi su quello attuale
- **Chiamata**: Usare `nomeSignal()` per leggere il valore

### 🔸 Lambda Functions
```typescript
// Sintassi lambda per update()
this.contatore.update(valoreAttuale => valoreAttuale + 1);

// Equivale a:
this.contatore.update((valoreAttuale) => {
    return valoreAttuale + 1;
});
```

### 🔸 Binding Syntax Summary
- **String Interpolation**: `{{expression}}`
- **Event Binding**: `(event)="method()"`
- **Property Binding**: `[property]="expression"`
- **Style Binding**: `[style.property]="expression"`

## 🚀 Setup e Avvio del Progetto

## 🚀 Setup e Avvio del Progetto

Questo progetto è stato generato usando [Angular CLI](https://github.com/angular/angular-cli) versione 20.3.5.

### 💻 Server di Sviluppo

Per avviare il server di sviluppo locale, esegui:

```bash
ng serve
```

Una volta avviato il server, apri il browser e naviga su `http://localhost:4200/`. L'applicazione si ricaricherà automaticamente ogni volta che modifichi i file sorgente.

### 🏗️ Generazione di Codice

Angular CLI include potenti strumenti di scaffolding. Per generare un nuovo componente, esegui:

```bash
ng generate component nome-componente
```

Per una lista completa degli schemi disponibili (come `components`, `directives`, o `pipes`), esegui:

```bash
ng generate --help
```

### 🔨 Build del Progetto

Per compilare il progetto esegui:

```bash
ng build
```

Questo compilerà il progetto e salverà gli artefatti nella directory `dist/`. Di default, il build di produzione ottimizza l'applicazione per performance e velocità.

### 🧪 Test Unitari

Per eseguire i test unitari con [Karma](https://karma-runner.github.io), usa:

```bash
ng test
```

### 🔍 Test End-to-End

Per i test end-to-end (e2e), esegui:

```bash
ng e2e
```

Angular CLI non include un framework di testing end-to-end di default. Puoi sceglierne uno che soddisfi le tue esigenze.

## 📖 Studio e Ripasso

### 🎯 Esercizi Consigliati

1. **String Interpolation**: Crea un signal per il tuo nome e visualizzalo
2. **Event Binding**: Implementa un bottone che cambia il valore di un signal
3. **Property Binding**: Crea un carosello di immagini
4. **Style Binding**: Implementa un cambio colore dinamico
5. **Combinato**: Crea un contatore con colori che cambiano in base al valore

### 📚 Domande di Verifica

1. Qual è la differenza tra una variabile normale e un signal?
2. Come si chiama un signal per leggere il suo valore?
3. Qual è la sintassi per event binding?
4. Quando usare `set()` vs `update()` sui signals?
5. Come implementare property binding per attributi HTML?

### 🔥 Tips per l'Esame

- **Signals**: Ricorda sempre di chiamarli come funzioni `signal()`
- **Event Binding**: Usa parentesi tonde `(click)`
- **Property Binding**: Usa parentesi quadre `[src]`
- **String Interpolation**: Usa doppie parentesi graffe `{{}}`
- **Zone-less**: SEMPRE usare signals, mai variabili normali!

## 📞 Risorse Aggiuntive

Per maggiori informazioni sull'uso di Angular CLI, inclusi riferimenti dettagliati ai comandi, visita la pagina [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).

---

## 👨‍💻 Autore

**Corso Angular 4Bi** - Anno Scolastico 2025/2026  
Studente: Theo Zadra

---

*Happy coding! 🚀*
