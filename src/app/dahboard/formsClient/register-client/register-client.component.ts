import { Component , OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/clients.service';
@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css']
})
export class RegisterClientComponent implements OnInit {

  form!: FormGroup;
  constructor(
    private router:Router,
    private fb : FormBuilder,
    private RegisterClient: ClientService,
    private snackbar : MatSnackBar,
  ){}


  ngOnInit(): void {
      //formulario
      this.form = this.fb.group({
        ruc:["", Validators.required],
        nombre:["", Validators.required],
        ubicacion:["" , Validators.required],
        telefono:["", Validators.required],
        gmail:["", Validators.required],
        placa:["", Validators.required]
      })
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

  onSubmit(){
    console.log(this.form.value);
    if (this.form.invalid) {
        this.form.markAllAsTouched();
        //this.formIncompleto = true;
        return;
    }
    //this.formIncompleto = false;
    const formValue = this.form.value;
    console.log(formValue)
    this.RegisterClient.create(formValue).subscribe(
        (data) => {
          this.form.reset();
          //this.inicializarForm();
          this.snackbar.open("Usuario Registrado Correctamente!!", "Cerrar", {
            duration: 2000,
          });
          this.router.navigateByUrl('registerclient');
        },
        (error) => {
          //this.loading = false;
          console.log(error);
          this.snackbar.open("Error al guardar", "Cerrar", {
            duration: 2000,
          });
        }
    );
}

}
