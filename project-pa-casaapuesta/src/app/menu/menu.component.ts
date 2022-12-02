import { Component, Input, NgModuleFactory } from '@angular/core';
import { ServiceService } from '../services/service.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  modalSwitch: boolean = false;
  viewModal: boolean = false;
  //title = 'project-pa-casaapuesta';

  constructor(private modalSS: ServiceService){ }

    ngOnInit() {
      this.modalSS.$modal.subscribe((valor)=>this.modalSwitch = valor)
    }

    openModal() {
      this.modalSwitch = true;
    }

    closeModal(){
      this.modalSS.$modal.emit(false);
    }

    showhide(){
      if(this.viewModal){
        this.viewModal = false;
      }else{
        this.viewModal = true;
      }
    }
}
