import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCeldasComponent } from './listar-celdas.component';

describe('ListarCeldasComponent', () => {
  let component: ListarCeldasComponent;
  let fixture: ComponentFixture<ListarCeldasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarCeldasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarCeldasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
