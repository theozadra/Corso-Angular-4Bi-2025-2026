import { Component, signal, WritableSignal } from '@angular/core';
import { withIncrementalHydration } from '@angular/platform-browser';

@Component({
  selector: 'app-bindings',
  imports: [],
  templateUrl: './bindings.html',
  styleUrl: './bindings.css'
})
export class Bindings {
  // Dichiro il signal writable
  studente: WritableSignal<string> = signal('Andrea Trentini');
  contatore: WritableSignal<number> = signal(0);
  nomeImmagine: WritableSignal<string> = signal('/bicicletta.jpg');
  indiceImmagine: WritableSignal<number> = signal(0);

  classeTitolo: string = "display-1";

  immagini: string[] = ['/bicicletta.jpg', '/ciao.jpg', '/cinquecento.jpg', '/aereo.jpg'];
  colori: string[] = ['red', 'green', 'blue', 'yellow'];

  // Aggiungo il metodo cambiaNome
  cambiaNome(): void {
    this.studente.set('Luca Boschi');
  }

  incrementa(): void {
    // Il metodo deve aumentare di uno il valore di contatore.
    // 1° sistema: non consigliato
    // this.contatore.set(this.contatore() + 1);
    //2° sistema: più usato
    // Si tratta di una espressione LAMBDA, a sinistra dell'uguale dichiaro una variabile
    // che verrà inizializzata con il valore corrente gestito da signal
    // a destra del > scrivo l'istruzione che consente di calcolare il nuvo valore
    this.contatore.update(valoreAttuale => valoreAttuale + 1);
    // La funzione LAMBDA può prevedere anche un blocco di istruzioni.
    // Nel blocco deve essere presente l'istruzione return, che restituirà il nuovo valore per il signal.
    //this.contatore.update(valoreAttuale => {
      //return valoreAttuale + 1;
    //})       
  }

  decrementa(): void {
    this.contatore.update(valoreAttuale => valoreAttuale - 1);
  }

  prev(): void {
    if (this.indiceImmagine() > 0) {
      this.indiceImmagine.update(valoreCorrente => valoreCorrente - 1);
    }
    else {
      this.indiceImmagine.set(this.immagini.length - 1);
    }
  }

  next(): void {
    if (this.indiceImmagine() == this.immagini.length - 1) {
      this.indiceImmagine.set(0);
    }
    else {
      this.indiceImmagine.update(valoreAttuale => valoreAttuale + 1);
    }
    // l'if può essere sostituito dalla seguente istruzione:
    // this.indiceImmagine.update(valoreAttuale => (valoreAttuale + 1) % this.immagini.length);
  }
}
