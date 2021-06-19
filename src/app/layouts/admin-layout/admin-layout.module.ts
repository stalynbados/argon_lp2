import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {ClipboardModule} from 'ngx-clipboard';

import {AdminLayoutRoutes} from './admin-layout.routing';
import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {IconsComponent} from '../../pages/icons/icons.component';
import {MapsComponent} from '../../pages/maps/maps.component';
import {UserProfileComponent} from '../../pages/user-profile/user-profile.component';
import {TablesComponent} from '../../pages/tables/tables.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ProductComponent} from "../../pages/product/container/product/product.component";
import {ProductNewComponent} from "../../pages/product/components/forms/product-new/product-new.component";
import {ProductEditComponent} from "../../pages/product/components/forms/product-edit/product-edit.component";
import {ProductListComponent} from "../../pages/product/components/list/product-list/product-list.component";
import {ProductsService} from "../../../providers/products/products.service";

import { CursoComponent } from 'src/app/pages/curso/container/curso/curso.component';
import { CursoEditComponent } from 'src/app/pages/curso/components/forms/curso-edit/curso-edit.component';
import { CursoNewComponent } from 'src/app/pages/curso/components/forms/curso-new/curso-new.component';
import { CursoListComponent } from 'src/app/pages/curso/components/list/curso-list/curso-list.component';
import { CursoService } from 'src/providers/curso/curso.service';

// import { ToastrModule } from 'ngx-toastr';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        HttpClientModule,
        NgbModule,
        ClipboardModule,
        ReactiveFormsModule
    ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    ProductComponent,
    ProductNewComponent,
    ProductEditComponent,
    ProductListComponent,
    CursoComponent,
    CursoNewComponent,
    CursoEditComponent,
    CursoListComponent,
  ], providers: [ProductsService, CursoService]
})

export class AdminLayoutModule {
}
