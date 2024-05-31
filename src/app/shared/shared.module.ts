import { NgModule } from "@angular/core";
import { MapViewerComponent } from './components/organism/map-viewer/map-viewer.component';
import { DialogComponent } from './components/molecules/dialog/dialog.component';
import { CommonModule } from "@angular/common";
import { LoadingComponent } from './components/atoms/loading/loading.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    MapViewerComponent,
    DialogComponent,
    LoadingComponent
  ],
  exports: [
    MapViewerComponent,
    DialogComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ]
}) export class SharedModule  {}
