import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../pages/order/interfaces/hero.interfaces';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  // Se utiliza keyof para extraer el tipo de clave de un tipo de objeto, en este caso de la interface Hero
  // Asi podemos tipar mas adelante que sortBy sea de un tipo de acuerdo a las claves Hero
  transform(heroes: Hero[], sortBy?: keyof Hero | ''): Hero[] {
    // sortBy = ''
    switch(sortBy){
      case 'name':
        return heroes.sort((a, b) => a.name > b.name ? 1 : -1);
      case 'canFly':
        return heroes.sort((a, b) => a.canFly < b.canFly ? 1 : -1);
      case 'color':
        return heroes.sort((a, b) => a.color > b.color ? 1 : -1);
      default:
        return heroes;
    }
  }
}
