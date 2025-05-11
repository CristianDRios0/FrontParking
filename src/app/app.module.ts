import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { LayoutModule } from './layout/layout.module';
import { CeldasModule } from './celdas/celdas.module';
import { ParqueoModule } from './parqueo/parqueo.module';
import { PagosModule } from './pagos/pagos.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    CeldasModule,
    ParqueoModule,
    PagosModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
