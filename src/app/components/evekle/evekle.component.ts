import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ev } from 'src/app/models/model/model.module';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-evekle',
  templateUrl: './evekle.component.html',
  styleUrls: ['./evekle.component.css']
})
export class EvekleComponent implements OnInit {
  secEv: Ev = new Ev();
  constructor(
    public fbServis: FirebaseService,
    public router: Router
  ) { }

  ngOnInit() {

  }
  Kaydet() {
    var user = JSON.parse(localStorage.getItem("user"));
    this.secEv.uid = user.uid;
    this.fbServis.KayitEkle(this.secEv).then(d => {
      this.router.navigate(['/']);
    });
  }

}
