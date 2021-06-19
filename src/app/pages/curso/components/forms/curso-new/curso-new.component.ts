import {Component, EventEmitter, Input , OnInit, Output} from '@angular/core';//imput(son datos que se estan mandand desde el codigo hasta el formulario)output(del formulario hacia el codigo) eventemitter(esun evento de cualquier accion)
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({//aqui se indica cuales son los archiivos usados para este componente(.css y .html)
  selector: 'app-curso-new', //es el nombre de selector, como un rompecabesas 
  templateUrl: './curso-new.component.html',//aqui se indica cual es el archivo .html
  styleUrls: ['./curso-new.component.css']//aqui se indica cual        es el archivo .css
})
export class CursoNewComponent implements OnInit {// es una clase publica que se puede usar sin restriccion desde otros clases 
  cursoForm: FormGroup;
  @Input() title: string;
  @Output() onNewData: EventEmitter<Object> = new EventEmitter();
  constructor(private formBuilder: FormBuilder, public activeModal: NgbActiveModal) { 
    this.cursoForm = this.formBuilder.group({
      curso_nombre: ['', [Validators.required]],
      curso_descripcion: ['', [Validators.required]],
      curso_estado: ['', [Validators.required]]
    });




  }
   
  ngOnInit(): void {
  }
  public save(): void {// esto es un metodo vacio que no devuelve nada, se encarga de enviar la orden de guardar
    if (this.cursoForm.valid) {
      this.activeModal.close(this.cursoForm.value);//activemodad(cada ves que s einicia se crea el elmento y se crea comoa activo)
    }

  }





}
