/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PCarrinhoComponent } from './pCarrinho.component';

describe('PCarrinhoComponent', () => {
  let component: PCarrinhoComponent;
  let fixture: ComponentFixture<PCarrinhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PCarrinhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PCarrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
