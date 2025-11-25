import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DueVie } from './due-vie';

describe('DueVie', () => {
  let component: DueVie;
  let fixture: ComponentFixture<DueVie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DueVie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DueVie);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
