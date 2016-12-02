import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let astros = [
      { craft: 'freedom 7', name: 'Mr. Nice' },
      { craft: 'mercury 3', name: 'Narco' },
      { craft: 'vostok', name: 'Bombasto' }
    ];
    return {astros};
  }
}
