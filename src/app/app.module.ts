import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpClientModule } from '@angular/common/http';
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { BuscarPage } from '../pages/buscar/buscar';
import { ProductoPage } from '../pages/producto/producto';
import { FavoritosProvider } from '../providers/favoritos/favoritos';
import { CpuPage } from '../pages/cpu/cpu';
import { PetsPage } from '../pages/pets/pets';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FavoritosPage,
    BuscarPage,
    ProductoPage,
    CpuPage,
    PetsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FavoritosPage,
    BuscarPage,
    ProductoPage,
    CpuPage,
    PetsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FavoritosProvider
  ]
})
export class AppModule {}
