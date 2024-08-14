import { Component } from '@angular/core';
import { Color, Hero } from './interfaces/hero.interfaces';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {

  public isUpperCase: boolean = false;
  public valueOrder?: keyof Hero;

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'Green Lanter',
      canFly: true,
      color: Color.green,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'Flash',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Iron man',
      canFly: true,
      color: Color.red,
    },
    {
      name: 'Aquaman',
      canFly: false,
      color: Color.blue,
    },
    {
      name: 'X-men',
      canFly: false,
      color: Color.black,
    },
  ]

  toggleUpperCase(): void{
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Hero): void{
    this.valueOrder = value;
  }

}
