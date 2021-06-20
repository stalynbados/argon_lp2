import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Rol} from '../../../model/rol';

@Component({
  selector: 'app-rol-edit',
  templateUrl: './rol-edit.component.html',
  styleUrls: ['./rol-edit.component.css']
})
export class RolEditComponent implements OnInit {
  @Input() rol: Rol;
  @Input() title: string;
  rolForm: FormGroup;
  constructor(private formBuilder: FormBuilder, public activeModal: NgbActiveModal) {
    this.rolForm = this.formBuilder.group({
      rol_descripcion: [''],
      rol_estado: ['']
      

    });
   }

  ngOnInit(): void {
    if (this.rol) {
      this.rolForm.patchValue({
        
        rol_descripcion: this.rol.rol_descripcion,
        
        rol_estado: this.rol.rol_estado
       
      });
      console.log("fff");
      console.log(this.rolForm);
    }

  }
  public edit(): void {
    if (this.rolForm.valid) {
      this.activeModal.close(this.rolForm.value);
      console.log("fff");
      console.log(this.rolForm.value);
    }
  }


}
