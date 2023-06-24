import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {  
    form!: FormGroup;
    constructor(
        private fb: FormBuilder,
        private RegisterUser: UserService,
        private _snackBar: MatSnackBar,
        private router: Router
    ) { }

    ngOnInit(): void {

        this.form = this.fb.group({
            ruc: ["", Validators.required],
            nombre: ["", Validators.required],
            apellidos: ["", Validators.required],
            telefono: ["", Validators.required],
            usuario:["",Validators.required],
            contrasena:["", Validators.required]
        });
    }
    
    onSubmit() {
        console.log(this.form.value);
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            //this.formIncompleto = true;
            return;
        }
        //this.formIncompleto = false;
        const formValue = this.form.value;
        console.log(formValue)
        this.RegisterUser.create(formValue).subscribe(
            (data) => {
              this.form.reset();
              //this.inicializarForm();
              this._snackBar.open("Guardado correctamente!!", "Cerrar", {
                duration: 2000,
              });
              this.router.navigateByUrl('login');
            },
            (error) => {
              //this.loading = false;
              console.log(error);
              this._snackBar.open("Error al guardar", "Cerrar", {
                duration: 2000,
              });
            }
        );
    }

}