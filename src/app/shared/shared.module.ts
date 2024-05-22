import { NgModule } from "@angular/core";
import { MapViewerComponent } from './components/organism/map-viewer/map-viewer.component';
import { DialogComponent } from './components/molecules/dialog/dialog.component';
import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [
    MapViewerComponent,
    DialogComponent
  ],
  exports: [
    MapViewerComponent,
    DialogComponent
  ],
  imports: [
    CommonModule
  ]
}) export class SharedModule  {}
