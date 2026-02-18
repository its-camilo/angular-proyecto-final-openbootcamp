import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBasica } from './lista-basica';

describe('ListaBasica', () => {
  let component: ListaBasica;
  let fixture: ComponentFixture<ListaBasica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaBasica]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaBasica);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
