import { NgModule } from "@angular/core";
import { MapViewerComponent } from './components/organism/map-viewer/map-viewer.component';


@NgModule({
  declarations: [
    MapViewerComponent
  ],
  exports: [
    MapViewerComponent
  ]
}) export class SharedModule  {}
