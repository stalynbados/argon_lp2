import { Component, OnInit} from "@angular/core";
import { RolService } from "src/providers/rol/rol.service";
import { Rol} from "../../model/rol";
import { NgbModal} from "@ng-bootstrap/ng-bootstrap";
import { RolNewComponent } from "../../components/forms/rol-new/rol-new.component";
import { RolEditComponent } from "src/app/pages/rol/components/forms/rol-edit/rol-edit.component";

@Component({
  selector: 'app-rol-container',
  templateUrl: './rol-container.component.html',
  styleUrls: ['./rol-container.component.css']
})
export class RolContainerComponent implements OnInit {
  error: string;
  rols: Rol[];
  rol: Rol;
  constructor(private rolService: RolService, private modalService: NgbModal) {

   }

  ngOnInit(): void {
    this.getRols();
  }
  getRols(): void {
    this.rolService.getRol().subscribe(response => {
      this.rols = response.data;
      console.log(this.rols);
    }, error => {
      this.error = error;
    });
  }
  public onNewRol($event): void {
    if ($event) {
      console.log("fff");
      const rolForm = this.modalService.open(RolNewComponent, {size: 'lg'});
      console.log("fff");
      
      rolForm.componentInstance.title = 'Nuevo Rol';
      console.log("fe");
      rolForm.result.then((result) => {
        console.log("s");
        console.log(result);
        this.rolService.postRol(result).subscribe(response => {
          if (response.success) {

            this.getRols();
          }
        }, error => {
          this.error = error;
        });

      });
    }
  }
    public delete(id: number): void {
      console.log("fff")
      this.rolService.deleteRol(id).subscribe(response => {
        console.log("fff")
        if (response.success) {
          this.getRols();
        }
      }, error => {
        this.error = error;
      });
    }
    edit(id: number): void {
      this.rolService.getRolById(id).subscribe(response => {
        this.rol = response.data;
        console.log("fff")
        const rolForm = this.modalService.open(RolEditComponent, {size: 'lg'});
        rolForm.componentInstance.title = 'Editar Rol';
        rolForm.componentInstance.rol = this.rol;
        rolForm.result.then((result) => {
          if (result) {
            this.rolService.updateRol(this.rol.id, result).subscribe(resp => {
              if (resp.success) {
                this.getRols();
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










