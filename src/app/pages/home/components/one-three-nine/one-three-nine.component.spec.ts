import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneThreeNineComponent } from './one-three-nine.component';

describe('OneThreeNineComponent', () => {
  let component: OneThreeNineComponent;
  let fixture: ComponentFixture<OneThreeNineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneThreeNineComponent]
    });
    fixture = TestBed.createComponent(OneThreeNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
