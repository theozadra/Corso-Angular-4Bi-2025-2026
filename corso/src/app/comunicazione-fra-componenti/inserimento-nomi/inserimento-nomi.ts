import { Component, output, OutputEmitterRef } from '@angular/core';

@Component({
  selector: 'app-inserimento-nomi',
  imports: [],
  templateUrl: './inserimento-nomi.html',
  styleUrl: './inserimento-nomi.css'
})
export class InserimentoNomi {
  onNuovoNome: OutputEmitterRef<string> = output<string>();
  
  aggiungi(nome: string): void {
    this.onNuovoNome.emit(nome);
  }
}
