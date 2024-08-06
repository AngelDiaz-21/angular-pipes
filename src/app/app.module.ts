import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

// Configuracion del locale de la app(esto es para el pipe de la fecha), se selecciona el idioma de mexico
import localEsMX from '@angular/common/locales/es-MX';
import localFrCA from '@angular/common/locales/fr-CA'; //Este es frances de canada

// Se tiene que llamar para que angular establezca el idioma o idiomas(ya que se puede usar mas de uno) que se deseen maneja en la app
import { registerLocaleData } from '@angular/common';
registerLocaleData(localEsMX);
registerLocaleData(localFrCA);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [
    provideClientHydration(),
    {
      // Con el LOCALE_ID establece este idioma, ya que por defecto esta en ingles
      provide: LOCALE_ID, useValue: 'es-MX'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
