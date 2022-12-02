import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService){
    //Instancia Directa
     this.buildForm();
    /* this.form.valueChanges.
      pipe(debounceTime(1000)).
      subscribe(value=>{
        console.log(value);
      });*/
  }
  ngOnInit(): void { }

  private buildForm(){
    //Validaciones
    this.form=this.formBuilder.group({
      username: new FormControl('',[Validators.required, Validators.maxLength(10)]),
      password: new FormControl('',[Validators.required]),
    });
  }

  save(event: Event){
    event.preventDefault();
    if(this.form.valid){
      const value=this.form.value;
      console.log(value);
    }else{
      this.form.markAllAsTouched();
    }
  }


  siteKey:string="6LeDdkgjAAAAAKWpc68nDy0I7JztAepiF8XP0MCG";

  login = {
    id_log: null,
    username_log: null,
    password_log: null,
  }

  Agregar() {
    this.usuarioService.agregar(this.login).subscribe(datos => {
      alert('Usuario ingresado correctamente');
    });
  }
}
