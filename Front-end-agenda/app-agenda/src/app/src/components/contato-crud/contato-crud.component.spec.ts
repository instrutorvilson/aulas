import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoCrudComponent } from './contato-crud.component';

describe('ContatoCrudComponent', () => {
  let component: ContatoCrudComponent;
  let fixture: ComponentFixture<ContatoCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatoCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatoCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
