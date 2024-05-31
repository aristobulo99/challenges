import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {OneThreeNine} from '../../../../shared/functions/oneThreeNine.class'
import { LoadingService } from 'src/app/core/services/loading/loading.service';

@Component({
  selector: 'app-one-three-nine',
  templateUrl: './one-three-nine.component.html',
  styleUrls: ['./one-three-nine.component.scss']
})
export class OneThreeNineComponent implements OnInit {

  public numberForm: FormGroup = new FormGroup({});
  public numberValue: number | undefined = undefined;
  public listSearchNumber: SearchNumber[] = [
    { name: 'Uno', number: 1 },
    { name: 'Tre', number: 3 },
    { name: 'Nueve', number: 9 }
  ];

  constructor(
    private fb: FormBuilder,
    private loadingService: LoadingService
  ){

  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.numberForm = this.fb.group(
      {
        valueNumber: new FormControl<number | undefined>(undefined)
      }
    );
  }

  addButton(){
    this.loadingService.activeLoading = true;
    setTimeout(() => {
      if(this.numberForm.get('valueNumber')?.value && typeof (Number(this.numberForm.get('valueNumber')?.value))  === 'number'){
        this.numberValue = this.numberForm.get('valueNumber')?.value as number;

        this.listSearchNumber.forEach(
          value => {
            value.class = new OneThreeNine(this.numberValue as number, value.number);
          }
        );
      }
      this.loadingService.activeLoading = false;
    }, 1000)
  }
}

export interface SearchNumber {
  name: string;
  number: number;
  class?: OneThreeNine;
}
