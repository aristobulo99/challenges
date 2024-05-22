import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/components/molecules/dialog/dialog.component';
import { Countries } from '../countries/countries.service';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openDialog(dialogData: DialogData) {
    this.dialog.open(DialogComponent, {
      width: '31.25rem',
      data: dialogData
    });
  }

  closeDialog(): void {
    this.dialog.closeAll();
  }
}

export interface DialogData {
  map: Countries[],
}
