import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PagesModule } from './pages/pages.module';
import { AngularFireModule } from '@angular/fire/compat';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';

registerLocaleData(ptBr);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    PagesModule,
    NgxMaskModule.forRoot(),
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyDLcPCGf-tn9VLzg8s6m3tYhR6KQOgwte8',
      authDomain: 'store-web-4991a.firebaseapp.com',
      databaseURL: 'https://store-web-4991a-default-rtdb.firebaseio.com',
      projectId: 'store-web-4991a',
      storageBucket: 'store-web-4991a.appspot.com',
      messagingSenderId: '750696239514',
      appId: '1:750696239514:web:bdeef23d12dd897dff2a23',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
