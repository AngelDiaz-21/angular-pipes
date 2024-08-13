import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'canFly'
})

export class CanFlyPipe implements PipeTransform {
  // transform(value: boolean): string {
  //   return (value)
  //   ? 'Puede volar'
  //   : 'No puede volar'
  // }
  transform(value: boolean): 'vuela' | 'no vuela' {
      return value ? 'vuela' : 'no vuela'
  }
}
