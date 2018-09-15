import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitulekComponent } from './titulek.component';

describe('TitulekComponent', () => {
  let component: TitulekComponent;
  let fixture: ComponentFixture<TitulekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitulekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitulekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
