import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../pages/order/interfaces/hero.interfaces';

@Pipe({
  name: 'showColor'
})
export class ShowColorPipe implements PipeTransform {

  transform(value: Color): 'Red' | 'Black' | 'Blue' | 'Green'  {

    // if(value === 0) {
    //   return 'Red'
    // } else if(value === 1 ) {
    //   return 'Black'
    // } else if(value === 2){
    //   return 'Blue'
    // } else {
    //   return 'Green'
    // }

    // if(!value) return 'Red'
    // if(value == 1) return 'Black'
    // if(value === 2) return 'Blue';
    // else return 'Green';

    switch(value) {
      case Color.red: //0
        return 'Red';
      case Color.black: //1
        return 'Black';
      case Color.blue: //2
        return 'Blue';
      case Color.green: //3
        return 'Green';
      default:
        return 'Red'; // Default case, in case value is undefined or doesn't match any case.
    }
  }
}
