import { Pipe, PipeTransform } from '@angular/core';

// ! Objetivo del pipe: Dependiendo del string que se reciba, ya sea en mayuscula o minuscula, el pipe lo transformara a lo contrario
// angel | toggleCase = 'ANGEL'
// ANGEL | toggleCase = 'angel'

@Pipe({
  name: 'toggleCase'
})

// El pipeTransform es el metodo que se va a llamar para hacer la transformacion visual de la data
// Para que angular sepa la existencia de este pipe y se pueda utilizar se debe declarar en algun modulo, que este caso sera products.module.ts
  // Si se quiere utilizar de forma global se debe de declarar en app.module.ts
export class ToggleCasePipe implements PipeTransform {
  // Se implementa la interface de PipeTransform denominada transform
  // El value puede ser cualquier tipo de dato dependiendo del pipe que se quiera hacer
  // Tambien se puede reciber otros argumento, sin embargo, en este pipe no se reciben mas
  transform(value: string, toUpper: boolean = false): string {

    // Si toUpper esta en true se pasa a mayuscula
    return (toUpper)
    ? value.toUpperCase()
    : value.toLowerCase()
  }
}
