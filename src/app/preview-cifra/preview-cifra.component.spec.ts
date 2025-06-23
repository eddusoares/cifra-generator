import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewCifraComponent } from './preview-cifra.component';

describe('PreviewCifraComponent', () => {
  let component: PreviewCifraComponent;
  let fixture: ComponentFixture<PreviewCifraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewCifraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewCifraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
