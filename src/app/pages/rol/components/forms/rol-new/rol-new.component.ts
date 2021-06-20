import {Component, EventEmitter, Input , OnInit, Output} from '@angular/core';//imput(son datos que se estan mandand desde el codigo hasta el formulario)output(del formulario hacia el codigo) eventemitter(esun evento de cualquier accion)
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rol-new',
  templateUrl: './rol-new.component.html',
  styleUrls: ['./rol-new.component.css']
})
export class RolNewComponent implements OnInit {
  rolForm: FormGroup;
  @Input() title: string;
  @Output() onNewData: EventEmitter<Object> = new EventEmitter();
  constructor(private formBuilder: FormBuilder, public activeModal: NgbActiveModal) { 

    this.rolForm = this.formBuilder.group({
      rol_descripcion: ['', [Validators.required]],
      rol_estado: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }
  public save(): void {// esto es un metodo vacio que no devuelve nada, se encarga de enviar la orden de guardar
    if (this.rolForm.valid) {
      this.activeModal.close(this.rolForm.value);//activemodad(cada ves que s einicia se crea el elmento y se crea comoa activo)
    }

  }
}
