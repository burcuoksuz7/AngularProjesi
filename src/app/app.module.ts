import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnasayfaComponent } from './components/anasayfa/anasayfa.component';
import { UyeolComponent } from './components/uyeol/uyeol.component';
import { GirisComponent } from './components/giris/giris.component';

import { UyelerComponent } from './components/uyeler/uyeler.component';
import { UyeduzenleComponent } from './components/uyeduzenle/uyeduzenle.component';
import { UyedetayComponent } from './components/uyedetay/uyedetay.component';
import { UstmenuComponent } from './components/ustmenu/ustmenu.component';

import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { RouterModule } from '@angular/router';
import { YonetimComponent } from './components/yonetim/yonetim.component';
import { EvlerComponent } from './components/evler/evler.component';
import { KategorilerComponent } from './components/kategoriler/kategoriler.component';
import { EvekleComponent } from './components/evekle/evekle.component';
import { EvduzenleComponent } from './components/evduzenle/evduzenle.component';
import { DetayComponent } from './components/detay/detay.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AnasayfaComponent,
    UyeolComponent,
    GirisComponent,

    UyelerComponent,
    UyeduzenleComponent,
    UyedetayComponent,
    UstmenuComponent,
    YonetimComponent,
    EvlerComponent,
    KategorilerComponent,
    EvekleComponent,
    EvduzenleComponent,
    DetayComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
