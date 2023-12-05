import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFormularioUsuarioComponent } from './modal-formulario-usuario.component';

describe('ModalFormularioUsuarioComponent', () => {
  let component: ModalFormularioUsuarioComponent;
  let fixture: ComponentFixture<ModalFormularioUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalFormularioUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalFormularioUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
