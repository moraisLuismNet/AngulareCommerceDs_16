import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// PrimeNG Modules
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

// Ecommerce Module
import { EcommerceModule } from './ecommerce/ecommerce.module';

// Shared Module
import { SharedModule } from './shared/shared.module';

// Locale
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeEn from '@angular/common/locales/en';

registerLocaleData(localeEs);
registerLocaleData(localeEn);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    EcommerceModule,
    SharedModule,
    TableModule,
    ButtonModule,
    ConfirmDialogModule,
  ],
  providers: [
    ConfirmationService,
    { provide: LOCALE_ID, useValue: navigator.language },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
