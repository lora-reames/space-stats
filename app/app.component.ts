import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <ul class="astros">
      <li *ngFor="let astro of astros">
      {{astro.name}} onboard {{astro.craft}}
      </li>
    </ul>
    `
})
export class AppComponent {
title = 'people in space';
astros = ASTROS;
}

export class Astro {
  craft: string;
  name: string;

}

const ASTROS: Astro[] = [
  { craft: 'freedom 7', name: 'Mr. Nice' },
  { craft: 'mercury 3', name: 'Narco' },
  { craft: 'giant penis', name: 'Bombasto' }
];
