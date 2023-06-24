import {Component} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dahboard',
  templateUrl: './dahboard.component.html',
  styleUrls: [],
  
})
export class DahboardComponent {
  options: FormGroup;

  constructor(
    fb: FormBuilder,
    private router: Router
    ) {
    this.options = fb.group({
      'fixed': false,
      'top': 0,
      'bottom': 0,
    });
  }

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
