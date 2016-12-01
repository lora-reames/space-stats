import { Component } from '@angular/core';


import { Astro }   from './astro';
import { AstroService }   from './astro.service';

@Component({
    selector: 'my-app',
    template: `
      <my-astros></my-astros>
    `
})
export class AppComponent {

}
