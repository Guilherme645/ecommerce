/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PfavoritosComponent } from './pfavoritos.component';

describe('PfavoritosComponent', () => {
  let component: PfavoritosComponent;
  let fixture: ComponentFixture<PfavoritosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfavoritosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
