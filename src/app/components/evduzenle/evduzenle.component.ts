import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ev } from 'src/app/models/model/model.module';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-evduzenle',
  templateUrl: './evduzenle.component.html',
  styleUrls: ['./evduzenle.component.css']
})
export class EvduzenleComponent implements OnInit {
  key: string;
  secEv: Ev = new Ev();
  uid: string;
  constructor(
    public route: ActivatedRoute,
    public fbServis: FirebaseService,
    public router: Router
  ) { }

  ngOnInit() {
    var user = JSON.parse(localStorage.getItem("user"));
    this.uid = user.uid;
    this.route.params.subscribe(p => {
      this.key = p.key;
      this.KayitGetir();
    });
  }
  KayitGetir() {
    this.fbServis.KayitByKey(this.key).snapshotChanges().subscribe(data => {
      const y = { ...data.payload.toJSON(), key: this.key };
      this.secEv = (y as Ev);
      if (this.uid != this.secEv.uid) {
        this.router.navigate(['/evler']);
      }
    });
  }

  Kaydet() {
    this.fbServis.KayitDuzenle(this.secEv).then(d => {
      this.router.navigate(['/evler']);
    });
  }

}
