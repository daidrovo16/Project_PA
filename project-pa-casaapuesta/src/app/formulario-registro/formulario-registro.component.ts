import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.scss']
})
export class FormularioRegistroComponent implements OnInit {

  form!: FormGroup;

  viewModal: boolean = false; //mostrar
  message: string = 'Prueba'; //mensaje
  message_enlace: string = 'mostrar';	//mensaje enlace

  constructor(private modalSS: ServiceService, private formBuilder: FormBuilder) {
    this.buildForm();
  }



  closeModal(){
    this.modalSS.$modal.emit(false);
  }
   //Mostrar - Ocultar componente
   showhide(){
    if(this.viewModal){
      this.viewModal = false;
    }else{
      this.viewModal = true;
    }
  }

  ngOnInit(): void {
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      nameCtrl: new FormControl('', [Validators.required]),
      numCtrl: new FormControl('', [Validators.required]),
      dateCtrl: new FormControl('', [Validators.required]),
      emailCtrl: new FormControl('', [Validators.required, Validators.email]),
      paisesCtrl: new FormControl('', [Validators.required]),
      genderCtrl: new FormControl('', [Validators.required]),
      terminosCtrl: new FormControl('', [Validators.required]),

    });
  }

  save(event: Event){
    event.preventDefault();
    if(this.form.valid){
      const value = this.form.value;
      console.log(value.nameCtrl);
      console.log(value.numCtrl);
      console.log(value.dateCtrl);
      console.log(value.emailCtrl);
      console.log(value.paisesCtrl);
      console.log(value.genderCtrl);
      console.log(value.terminosCtrl);
      console.log(value.captcha);

    }else{
      this.form.markAllAsTouched();
      console.log('los datos no estan llegando');
    }

  }

  get textField(){
    return this.form.get('bibliografiaCtrl');
  }

  get numCtrl(){
    return this.form.get('numCtrl');
  }

  get nameCtrl(){
    return this.form.get('nameCtrl');
  }

  get dateCtrl(){
    return this.form.get('dateCtrl');
  }

  get emailCtrl(){
    return this.form.get('emailCtrl');
  }

  get paisesCtrl(){
    return this.form.get('paisesCtrl');
  }

  get genderCtrl(){
    return this.form.get('genderCtrl');
  }

  get terminosCtrl(){
    return this.form.get('terminosCtrl');
  }

}

