import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Curso } from '../../../model/curso';

@Component({
  selector: 'app-curso-edit',
  templateUrl: './curso-edit.component.html',
  styleUrls: ['./curso-edit.component.css']
})
export class CursoEditComponent implements OnInit {
  @Input() curso: Curso;
  @Input() title: string;
  cursoForm: FormGroup;
  constructor(private formBuilder: FormBuilder, public activeModal: NgbActiveModal) {
    this.cursoForm = this.formBuilder.group({
      curso_nombre: [''],
      curso_descripcion: [''],
      curso_estado: ['']

    });
   }

  ngOnInit(): void {
    if (this.curso) {
      this.cursoForm.patchValue({
        curso_nombre: this.curso.curso_nombre,
        curso_descripcion: this.curso.curso_descripcion,
        curso_estado: this.curso.curso_estado
      });
    }



  }

  public edit(): void {
    if (this.cursoForm.valid) {
      this.activeModal.close(this.cursoForm.value);
    }

  }












}
