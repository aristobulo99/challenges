import { NgModule } from "@angular/core";
import { MapViewerComponent } from './components/organism/map-viewer/map-viewer.component';
import { DialogComponent } from './components/molecules/dialog/dialog.component';
import { CommonModule } from "@angular/common";
import { LoadingComponent } from './components/atoms/loading/loading.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { InputComponent } from './components/atoms/input/input.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ButtonComponent } from './components/atoms/button/button.component';
import {MatButtonModule} from '@angular/material/button';
import { FormControlPipe } from './pipe/form-control.pipe';


@NgModule({
  declarations: [
    MapViewerComponent,
    DialogComponent,
    LoadingComponent,
    InputComponent,
    ButtonComponent,
    FormControlPipe
  ],
  exports: [
    MapViewerComponent,
    DialogComponent,
    LoadingComponent,
    InputComponent,
    ButtonComponent,
    FormControlPipe
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,

  ]
}) export class SharedModule  {}
