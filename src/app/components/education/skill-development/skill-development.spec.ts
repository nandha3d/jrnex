import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillDevelopment } from './skill-development';

describe('SkillDevelopment', () => {
  let component: SkillDevelopment;
  let fixture: ComponentFixture<SkillDevelopment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillDevelopment],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillDevelopment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
