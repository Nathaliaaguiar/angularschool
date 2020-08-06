import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNavComponent } from './page-nav/page-nav.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { FormUsuarioComponent } from './form-usuario/form-usuario.component';
import { PageHomeComponent } from './page-home/page-home.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNavComponent,
    PageHeaderComponent,
    PageFooterComponent,
    FormUsuarioComponent,
    PageHomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }