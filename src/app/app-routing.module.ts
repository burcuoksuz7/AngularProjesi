import { DetayComponent } from './components/detay/detay.component';
import { EvduzenleComponent } from './components/evduzenle/evduzenle.component';
import { EvekleComponent } from './components/evekle/evekle.component';
import { KategorilerComponent } from './components/kategoriler/kategoriler.component';
import { EvlerComponent } from './components/evler/evler.component';
import { YonetimComponent } from './components/yonetim/yonetim.component';
import { UyelerComponent } from './components/uyeler/uyeler.component';
import { UyeolComponent } from './components/uyeol/uyeol.component';
import { GirisComponent } from './components/giris/giris.component';

import { AnasayfaComponent } from './components/anasayfa/anasayfa.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { UyeduzenleComponent } from './components/uyeduzenle/uyeduzenle.component';

const redirectLogin = () => redirectUnauthorizedTo(['']);
const routes: Routes = [
  {
    path: '',
    component: AnasayfaComponent
  },
  {
    path: 'uyeler',
    component: UyelerComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    }
  },
  {
    path: 'uyeduzenle/:key',
    component: UyeduzenleComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    }
  },
  {
    path: 'yonetim',
    component: YonetimComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    }
  },
  {
    path: 'evler',
    component: EvlerComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    }
  },
  {
    path: 'evekle',
    component: EvekleComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    }
  },
  {
    path: 'evduzenle/:key',
    component: EvduzenleComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    }
  },
  {
    path: 'detay/:key',
    component: DetayComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    }
  },
  {
    path: 'kategoriler',
    component: KategorilerComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    }
  },
  { path: 'giris', component: GirisComponent },
  { path: 'uyeol', component: UyeolComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
