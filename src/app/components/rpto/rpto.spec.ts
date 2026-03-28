import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rpto } from './rpto';

describe('Rpto', () => {
  let component: Rpto;
  let fixture: ComponentFixture<Rpto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rpto],
    }).compileComponents();

    fixture = TestBed.createComponent(Rpto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
