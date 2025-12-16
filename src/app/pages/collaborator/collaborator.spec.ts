import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Collaborator } from './collaborator';

describe('Collaborator', () => {
  let component: Collaborator;
  let fixture: ComponentFixture<Collaborator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Collaborator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Collaborator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
