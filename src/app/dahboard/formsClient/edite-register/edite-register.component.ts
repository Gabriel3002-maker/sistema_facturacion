import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/services/clients.service';
@Component({
  selector: 'app-edite-register',
  templateUrl: './edite-register.component.html',
  styleUrls: ['./edite-register.component.css']
})
export class EditeRegisterComponent implements OnInit {
  form!: FormGroup;
  loading: boolean = false;
  //ruc: number;
 constructor(
  private router:Router,
  private activatedRoute: ActivatedRoute,
  private fb: FormBuilder,
  private EditeClient: ClientService,
  private snackbar: MatSnackBar,
  public location:Location,
 ){
  /*Carga data
  this.inicializarForm();
  this.ruc =this.activatedRoute.snapshot.paramMap.get("ruc");
  if(this.ruc) {
      this.EditeClient.getById(this.ruc).subscribe({
          next: (resp) => {
              let item = resp;
              console.log(resp)
          },
          error: (err) => {
              this.router.navigate(["centros/listado"]);
              this.snackbar.open(err.error.msg, "Cerrar", {
                duration: 2000,
              });
          },
      });
  }*/

 }

  ngOnInit(): void {
  }

  inicializarForm(): void{
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
  this.EditeClient.create(formValue).subscribe(
      (data) => {
        this.form.reset();
        //this.inicializarForm();
        this.snackbar.open("Usuario Actualizado Correctamente!!", "Cerrar", {
          duration: 2000,
        });
        this.router.navigateByUrl('registerclient');
      },
      (error) => {
        //this.loading = false;
        console.log(error);
        this.snackbar.open("Error al Actualizar", "Cerrar", {
          duration: 2000,
        });
      }
  );

}


}