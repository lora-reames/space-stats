import { Injectable } from '@angular/core';

import { Astro } from './astro';
import { ASTROS } from './fake_astros';

@Injectable()
export class AstroService {
  getAstros(): Astro[] {
    return ASTROS;
  }
}
