import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{
   myForm!: FormGroup;
    //Regresar a una pagina anterior
    constructor(
        private location: Location,
        private router: Router
    ){}

    ngOnInit(): void {
            this.myForm = new FormGroup({
                usuario: new FormControl(),
                contrasena: new FormControl(),
            })
    }
    goBack(): void{
        this.location.back();
    }
    irDashboard(){
        this.router.navigate(['/dashboard']);
    }
}