import { BindingParser } from '@angular/compiler';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { NavBar } from './nav-bar/nav-bar';
import { Bindings } from './bindings/bindings';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, NavBar, Bindings ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Corso Angular 4BI 2025/2026');
}
