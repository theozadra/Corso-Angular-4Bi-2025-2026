import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenitorePadre } from './contenitore-padre';

describe('ContenitorePadre', () => {
  let component: ContenitorePadre;
  let fixture: ComponentFixture<ContenitorePadre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContenitorePadre]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenitorePadre);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
