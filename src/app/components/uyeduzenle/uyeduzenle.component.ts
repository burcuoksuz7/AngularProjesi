import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Uye } from 'src/app/models/model/model.module';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-uyeduzenle',
  templateUrl: './uyeduzenle.component.html',
  styleUrls: ['./uyeduzenle.component.css']
})
export class UyeduzenleComponent implements OnInit {

  key: string;
  secUye: Uye = new Uye();
  constructor(
    public route: ActivatedRoute,
    public fbServis: FirebaseService,
    public router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.key = p.key;
      this.KayitGetir();
    });
  }
  KayitGetir() {
    this.fbServis.UyebyId(this.key).snapshotChanges().subscribe(data => {
      const y = { ...data.payload.toJSON(), key: this.key };
      this.secUye = (y as Uye);
    });
  }

  Kaydet() {
    this.fbServis.UyeDuzenle(this.secUye).then(d => {
      this.router.navigate(['/uyeler']);
    });
  }


}
