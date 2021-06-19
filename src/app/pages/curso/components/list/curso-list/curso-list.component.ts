import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Curso } from '../../../model/curso';

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.css']
})
export class CursoListComponent implements OnInit {
  @Input() cursos: Curso[];
  @Output() onNew: EventEmitter<boolean> = new EventEmitter();
  @Output() onDelete: EventEmitter<number> = new EventEmitter();
  @Output() onEdit: EventEmitter<number> = new EventEmitter();
  constructor() { //son parametros del contructor
  }

  ngOnInit(): void {
  }
  public newCurso(): void {
    this.onNew.emit(true);
  }

  public delete(id: number): void {
    this.onDelete.emit(id);
  }

  public edit(id: number): void {
    this.onEdit.emit(id);
  }




}
