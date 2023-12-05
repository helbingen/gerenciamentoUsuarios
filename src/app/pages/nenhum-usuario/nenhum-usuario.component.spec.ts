import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NenhumUsuarioComponent } from './nenhum-usuario.component';

describe('NenhumUsuarioComponent', () => {
  let component: NenhumUsuarioComponent;
  let fixture: ComponentFixture<NenhumUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NenhumUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NenhumUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
