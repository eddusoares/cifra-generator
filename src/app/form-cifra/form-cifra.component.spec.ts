import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCifraComponent } from './form-cifra.component';

describe('FormCifraComponent', () => {
  let component: FormCifraComponent;
  let fixture: ComponentFixture<FormCifraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCifraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCifraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
