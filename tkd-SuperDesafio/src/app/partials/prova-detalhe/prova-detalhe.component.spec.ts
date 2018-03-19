import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvaDetalheComponent } from './prova-detalhe.component';

describe('ProvaDetalheComponent', () => {
  let component: ProvaDetalheComponent;
  let fixture: ComponentFixture<ProvaDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvaDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvaDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
