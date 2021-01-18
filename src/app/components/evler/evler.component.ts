import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ev } from 'src/app/models/model/model.module';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-evler',
  templateUrl: './evler.component.html',
  styleUrls: ['./evler.component.css']
})
export class EvlerComponent implements OnInit {
  evler: Ev[];
  constructor(
    public fbServis: FirebaseService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.KayitListele();
  }

  KayitListele() {
    this.fbServis.KayitListele().snapshotChanges().subscribe(data => {
      this.evler = [];
      data.forEach(satir => {
        const y = { ...satir.payload.toJSON(), key: satir.key };
        this.evler.push(y as Ev);
      });
    });
  }
  Sil(ev:Ev){
    this.fbServis.KayitSil(ev.key).then(d => {
      this.router.navigate(['/evler']);
    });
  }

}
