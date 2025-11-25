import { Injectable, Signal, signal, WritableSignal } from '@angular/core';

// providedIn: 'root' fa sì che un'istanza di DataService venga creata in automatico
// all'avvio dell'applicazione (SingleTon).
// Questa istanza può essere usata da tutti i componenti dell'applicazione e anche dagli altri servizi
// attraverso il meccanismo di dependency injection.
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _dati: WritableSignal<string[]> = signal([]);
  public dati: Signal<string[]> = this._dati.asReadonly();

}
