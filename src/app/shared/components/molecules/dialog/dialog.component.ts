import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { Countries } from 'src/app/core/services/countries/countries.service';
import { DialogData } from 'src/app/core/services/dialog/dialog.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  public map: Countries[] = [];
  public maps: L.Map | undefined;
  public percentageCountryArea: number | undefined = undefined;

  constructor(
    @Inject(DIALOG_DATA) public data: DialogData,
    public dialogRef: DialogRef
  ){
    console.log(this.data.map.length);
    if(this.data.map.length > 0){
      this.map = this.data.map;

      this.percentageCountryArea =  Number(((this.map[0].area/148940000) * 100).toFixed(2))
    }
  }

  accept() {
    this.dialogRef.close('accept');
  }

  cancel() {
    this.dialogRef.close('cancel');
  }

}
