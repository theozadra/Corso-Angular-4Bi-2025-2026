import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirettiveStrutturali } from './direttive-strutturali';

describe('DirettiveStrutturali', () => {
  let component: DirettiveStrutturali;
  let fixture: ComponentFixture<DirettiveStrutturali>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirettiveStrutturali]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirettiveStrutturali);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
