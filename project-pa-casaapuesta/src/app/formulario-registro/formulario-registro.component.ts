import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.scss']
})
export class FormularioRegistroComponent implements OnInit {

  viewModal: boolean = false; //mostrar
  message: string = 'Prueba'; //mensaje
  message_enlace: string = 'mostrar';	//mensaje enlace

  constructor(private modalSS: ServiceService) { }

  closeModal(){
    this.modalSS.$modal.emit(false);
  }

  ngOnInit(): void {
  }

   //Mostrar - Ocultar componente
   showhide(){
    if(this.viewModal){
      this.viewModal = false;
    }else{
      this.viewModal = true;
    }
  }

}
