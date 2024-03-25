import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TabelaClientesComponent } from './tabela-clientes.component';

describe('TabelaClientesComponent', () => {
  let component: TabelaClientesComponent;
  let fixture: ComponentFixture<TabelaClientesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
