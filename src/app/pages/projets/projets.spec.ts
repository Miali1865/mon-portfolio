import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projets } from './projets';

describe('Projets', () => {
  let component: Projets;
  let fixture: ComponentFixture<Projets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Projets]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Projets);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
