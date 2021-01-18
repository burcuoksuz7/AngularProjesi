import { Ev, Uye } from './../models/model/model.module';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'
import { AngularFireAuth } from '@angular/fire/auth'


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private dbEv = '/Evler';
  private dbUye = '/Uyeler';
  evRef: AngularFireList<Ev> = null;
  uyeRef: AngularFireList<Uye> = null;
  constructor(
    public db: AngularFireDatabase,
    public afAuth: AngularFireAuth
  ) {
    this.evRef = db.list(this.dbEv);
    this.uyeRef = db.list(this.dbUye);
  }

  OturumAc(mail: string, parola: string) {
    return this.afAuth.signInWithEmailAndPassword(mail, parola);
  }
  OturumKapat() {
    return this.afAuth.signOut();
  }
  OturumKontrol() {
    if (localStorage.getItem("user")) {
      return true;
    } else {
      return false;
    }
  }
  UyeOl(uye: Uye) {
    return this.afAuth.createUserWithEmailAndPassword(uye.mail, uye.parola);
  }

  UyeEkle(uye: Uye) {
    return this.uyeRef.push(uye);
  }
  UyeDuzenle(uye: Uye) {
    return this.uyeRef.update(uye.key,uye);
  }
  UyebyId(key:string){
    return this.db.object("/Uyeler/" + key);
  }
  UyeSil(key: string) {
    return this.uyeRef.remove(key);
  }
  UyeListele() {
    return this.uyeRef;
  }


  KayitListele() {
    return this.evRef;
  }
  KayitByKey(key: string) {
    return this.db.object("/Evler/" + key);
  }
  KayitEkle(kayit: Ev) {
    return this.evRef.push(kayit);
  }
  KayitDuzenle(kayit: Ev) {
    return this.evRef.update(kayit.key, kayit);
  }
  KayitSil(key: string) {
    return this.evRef.remove(key);
  }
}
