import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { ClasseScolastica } from './classe-scolastica';
import { Studente } from './studente';
import { timer } from 'rxjs';
import { IDocente } from './i-docente';

@Component({
  selector: 'app-classi-interfacce',
  imports: [],
  templateUrl: './classi-interfacce.html',
  styleUrl: './classi-interfacce.css'
})
export class ClassiInterfacce {
  classe: WritableSignal<ClasseScolastica | undefined> = signal(undefined);
  idStudente: number = 1;
  messaggioErrore: WritableSignal<string> = signal('');
  docente: WritableSignal<IDocente> = signal({
    id: 1,
    nome: 'Andrea',
    cognome: 'Trentini',
    materie: ['Informatica'],
    classi: ['4Bi']
  });

  creaClasse(nome: string, annoScolastico: string): void {
    try {
      this.classe.set(new ClasseScolastica(nome, annoScolastico));
      console.log(this.classe())
    } catch (error: any) {
      this.messaggioErrore.set(error);
      timer(4000).subscribe(() => {
        this.messaggioErrore.set('');
      })
    }
  }

  aggiungiStudente(nome: string, cognome: string, sesso:string): void {
    // Il punto esclamativo dopo this.classe() è una asserzione che l'oggetto gestito 
    // dal signal esiste e non è undefined
    try {      
      this.classe()!.aggiungiStudente(new Studente(this.idStudente, nome, cognome, sesso, this.classe()!.nome));
      this.idStudente++;
    } catch (error: any) {
      this.messaggioErrore.set(error.message);
      timer(4000).subscribe(() => {
        this.messaggioErrore.set('');
      })
    }
  }
}
