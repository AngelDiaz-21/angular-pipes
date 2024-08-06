import { Component, OnInit } from '@angular/core';
import { interval, Observable, of, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent{
  // Propertys publics and privates
  // constructor
  // methods
  // ! i18n Select
  public name: string = 'Angel';
  public gender: 'male' | 'female' | 'no existe' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    female: 'invitarla',
    'no existe': 'No existe'
  }

  changeClient(): void {
    this.name = 'no existe';
    this.gender = 'no existe';
  }

  // ! i18nPlural
  public clients: string[] = ['Maria', 'Alberto', 'Angel', 'Daniel', 'Eduardo', 'Abril', 'Monse', 'Roberto', 'Macario'];
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 personas esperando',
    'other': 'tenemos # clientes esperando',

  }

  deleteClient():void{
    this.clients.shift ();
  }

  // ! keyValue pipe
  public person = {
    name: 'Fernando',
    age: 25,
    address: 'Guerrero, Mexico'
  }

  // ! Async pipe
  // public myObservableTimer: Observable<number> = interval(2000).pipe(
  //   tap(value => console.log('tap:', value))
  // );

  // public myObservableTimer = interval();
  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
    }, 3500);
  })


}
