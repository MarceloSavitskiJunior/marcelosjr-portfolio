import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SobreMimComponent } from './sobre-mim.component';

describe('SobreMimComponent', () => {
  let component: SobreMimComponent;
  let fixture: ComponentFixture<SobreMimComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SobreMimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SobreMimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
