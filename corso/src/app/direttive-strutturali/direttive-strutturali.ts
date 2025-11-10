import { Component, signal, WritableSignal } from '@angular/core';
import { getCurrentInjector } from '@angular/core/primitives/di';
import { timer } from 'rxjs';

@Component({
  selector: 'app-direttive-strutturali',
  imports: [],
  templateUrl: './direttive-strutturali.html',
  styleUrl: './direttive-strutturali.css'
})
export class DirettiveStrutturali {
  visualizzaBanner: WritableSignal<boolean> = signal(false);
  visualizzaImmagineOTesto: WritableSignal<string> = signal('immagine');
  nomi: WritableSignal<string[]> = signal(['Andrea', 'Luca', 'Matteo']);
  indiceModifica: WritableSignal<number> = signal(-1);
  // Signal da utilizzare per la direttiva switch
  // Supponiamo di avere un signal chiamato tipoUtente di tipo string
  // che abbia come valori possibili: studente, genitore, docente, altro
  tipoUtente: WritableSignal<string> = signal('studente');

  toggleBanner(): void {
    // Visualizza il banner
    this.visualizzaBanner.set(true);
    let conta = timer(3000).subscribe(() => {
      this.visualizzaBanner.set(false);
    })
  }

  immagineOTesto(): void {
    if(this.visualizzaImmagineOTesto() == 'immagine') {
      this.visualizzaImmagineOTesto.set('testo');
    }
    else {
      this.visualizzaImmagineOTesto.set('immagine');
    }
  }

  aggiungiNome(nome: any): void {
    //console.log(nome.value);
    this.nomi.update(current => [...current, nome.value]);
    //let x = ['Andrea', 'Luca', 'Matteo', 'Pippo'];
    //let x = [...this.nomi(), 'Pippo'];
    // this.nomi.set([...this.nomi(), 'Pippo']);
  }

  elimina(indice: number): void {
    // Eliminare un elemento in posizione i-esima da un vettore?
    // let v = [1,2,3];
    this.nomi.update(current => {
      current.splice(indice, 1);
      return [...current];
    })
  }

  attivaModifica(indice: number): void {
    this.indiceModifica.set(indice);
  }

  annulla(): void {
    this.indiceModifica.set(-1);
  }

  salva(nuovoNome: string): void {
    this.nomi.update(current  => {
      current[this.indiceModifica()] = nuovoNome;
      return current;
    })
    this.indiceModifica.set(-1);
  }

  switchToStudente(): void {
    this.tipoUtente.set('studente');
  }
  switchToGenitore(): void {
    this.tipoUtente.set('genitore');
  }
  switchToDocente(): void {
    this.tipoUtente.set('docente');
  }
  switchToAltro(): void {
    this.tipoUtente.set('altro');
  }
}
