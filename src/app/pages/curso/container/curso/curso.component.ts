import { Component, OnInit} from "@angular/core";
import { CursoService } from "src/providers/curso/curso.service";
import { Curso } from "../../model/curso";
import { NgbModal} from "@ng-bootstrap/ng-bootstrap";
import { CursoNewComponent } from "../../components/forms/curso-new/curso-new.component";
import { CursoEditComponent } from "src/app/pages/curso/components/forms/curso-edit/curso-edit.component";
@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  error: string;
  cursos: Curso[];
  curso: Curso;

  constructor(private cursoService: CursoService, private modalService: NgbModal) {

   }

  ngOnInit(): void {
    this.getCursos();
  }
  getCursos(): void {
    this.cursoService.getCurso().subscribe(response => {
      this.cursos = response.data;
      console.log(this.cursos);
    }, error => {
      this.error = error;
    });
  }

  public onNewCurso($event): void {
    if ($event) {
      const cursoForm = this.modalService.open(CursoNewComponent, {size: 'lg'});
      cursoForm.componentInstance.title = 'Nuevo Curso';
      cursoForm.result.then((result) => {
        this.cursoService.postCurso(result).subscribe(response => {
          if (response.success) {
            this.getCursos();
          }
        }, error => {
          this.error = error;
        });

      });
    }
  }
  public delete(id: number): void {
    this.cursoService.deleteCurso(id).subscribe(response => {
      if (response.success) {
        this.getCursos();
      }
    }, error => {
      this.error = error;
    });
  }
  edit(id: number): void {
    this.cursoService.getCursoById(id).subscribe(response => {
      this.curso = response.data;
      console.log("fff")
      const cursoForm = this.modalService.open(CursoEditComponent, {size: 'lg'});
      cursoForm.componentInstance.title = 'Editar Curso';
      cursoForm.componentInstance.curso = this.curso;
      cursoForm.result.then((result) => {
        if (result) {
          this.cursoService.updateCurso(this.curso.id, result).subscribe(resp => {
            if (resp.success) {
              this.getCursos();
            }
          }, error => {
            this.error = error;
          });
        }
        console.log(result);
      });

    }, error => {
      this.error = error;
    });
  }
}
