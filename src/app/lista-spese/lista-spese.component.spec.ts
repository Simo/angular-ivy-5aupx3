import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSpeseComponent } from './lista-spese.component';

describe('ListaSpeseComponent', () => {
  let component: ListaSpeseComponent;
  let fixture: ComponentFixture<ListaSpeseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaSpeseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSpeseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
