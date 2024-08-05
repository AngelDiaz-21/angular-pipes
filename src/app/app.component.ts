import { Component } from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
// Ripple es una animacion visual que se activa cuando el usuario hace clic en un elemento de la interfaz. Ripple effect (efecto de ondulación). Al agregarlo aquí se habilita el efecto globalmente en todos los componentes de PrimeNG que soportan esta característica
  constructor(private primengConfig: PrimeNGConfig){}

  ngOnInit(){
    this.primengConfig.ripple = true;
  }

  public title = 'pipesApp';
}
