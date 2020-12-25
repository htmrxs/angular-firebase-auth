import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireMessagingModule} from '@angular/fire/messaging';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { environment } from '../environments/environment';

import {FormsModule} from '@angular/forms';
import { AuthService } from './service/auth.service' ;



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireStorageModule,
    FormsModule
  ],
  
  providers: [
    AngularFirestore,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }