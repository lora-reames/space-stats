import { Injectable } from '@angular/core';

import { Astro } from './astro';
import { ASTROS } from './fake_astros';

@Injectable()
export class AstroService {
  getAstros(): Promise<Astro[]> {
    return Promise.resolve(ASTROS);
  }
}
