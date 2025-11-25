import { Component, signal, WritableSignal } from '@angular/core';
import { ListaNomi } from '../lista-nomi/lista-nomi';
import { InserimentoNomi } from '../inserimento-nomi/inserimento-nomi';
import { DueVie } from '../due-vie/due-vie';

@Component({
  selector: 'app-contenitore-padre',
  imports: [ListaNomi, InserimentoNomi, DueVie],
  templateUrl: './contenitore-padre.html',
  styleUrl: './contenitore-padre.css'
})
export class ContenitorePadre {
  nomi: WritableSignal<string[]> = signal([]);
  colore: WritableSignal<string> = signal('');

  aggiungi(nome: string): void {
    this.nomi.update(current => [...current, nome]);
    console.log(this.nomi());
  }
}
