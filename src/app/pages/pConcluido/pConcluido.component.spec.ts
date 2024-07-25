/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PConcluidoComponent } from './pConcluido.component';

describe('PConcluidoComponent', () => {
  let component: PConcluidoComponent;
  let fixture: ComponentFixture<PConcluidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PConcluidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PConcluidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
