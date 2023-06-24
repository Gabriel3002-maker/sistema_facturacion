import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sell-client',
  templateUrl: './sell-client.component.html',
  styleUrls: ['./sell-client.component.css']
})
export class SellClientComponent {
  constructor(
    private router: Router
  ){}

  onButtonRegisterClient(){
    this.router.navigate(['registerclient']);
  }

  onButtonEditeClient(){
    this.router.navigate(['editerclient']);
  }

  onButtonSellClient(){
    this.router.navigate(['sellclient']);
  }
}
