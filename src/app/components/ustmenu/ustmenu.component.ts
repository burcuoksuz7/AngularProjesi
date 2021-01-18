import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-ustmenu',
  templateUrl: './ustmenu.component.html',
  styleUrls: ['./ustmenu.component.css']
})
export class UstmenuComponent implements OnInit {

  constructor(    
    public fbServis: FirebaseService,
    public router: Router) { }

  ngOnInit(): void {
  }

  OturumKapat() {
    this.fbServis.OturumKapat().then(d => {
      localStorage.removeItem("user");
      window.alert("Çıkış Yaptınız.")
      this.router.navigate(['']);
    });

  }
}
