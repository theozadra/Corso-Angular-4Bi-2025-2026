import { Component, signal, WritableSignal } from '@angular/core';
import { ClasseScolastica } from './classe-scolastica';

@Component({
  selector: 'app-classi-interfacce',
  imports: [],
  templateUrl: './classi-interfacce.html',
  styleUrl: './classi-interfacce.css'
})
export class ClassiInterfacce {
  classe: WritableSignal<ClasseScolastica | undefined> = signal(undefined);

  creaClasse(nome: string, annoScolastico: string): void {
    try {
      this.classe.set(new ClasseScolastica(nome, annoScolastico));
      console.log(this.classe())
    } catch (error) {
      console.log(error);
    }
  }
}
