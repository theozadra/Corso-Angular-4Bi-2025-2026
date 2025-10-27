import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-bindings',
  imports: [],
  templateUrl: './bindings.html',
  styleUrl: './bindings.css'
})
export class Bindings {
  // Dichiro il signal writable
  studente: WritableSignal<string> = signal('Andrea Trentini');

  // Aggiungo il metodo cambiaNome
  cambiaNome(): void {
    this.studente.set('Luca Boschi');
  }
}
