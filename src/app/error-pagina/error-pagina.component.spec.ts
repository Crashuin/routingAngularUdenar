import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorPaginaComponent } from './error-pagina.component';

describe('ErrorPaginaComponent', () => {
  let component: ErrorPaginaComponent;
  let fixture: ComponentFixture<ErrorPaginaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorPaginaComponent]
    });
    fixture = TestBed.createComponent(ErrorPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
