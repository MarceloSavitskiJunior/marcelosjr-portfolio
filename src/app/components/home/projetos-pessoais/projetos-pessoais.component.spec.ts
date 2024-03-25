import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProjetosPessoaisComponent } from './projetos-pessoais.component';

describe('ProjetosPessoaisComponent', () => {
  let component: ProjetosPessoaisComponent;
  let fixture: ComponentFixture<ProjetosPessoaisComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetosPessoaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetosPessoaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
