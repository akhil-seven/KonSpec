import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {KonSpecSpecService} from '../service/KonSpecService'
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {HttpModule} from '@angular/http'
import {AddstaffPage} from '../pages/addstaff/addstaff'
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddstaffPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddstaffPage
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    KonSpecSpecService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

