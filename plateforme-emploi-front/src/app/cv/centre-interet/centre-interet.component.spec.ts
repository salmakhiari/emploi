import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentreInteretComponent } from './centre-interet.component';

describe('CentreInteretComponent', () => {
  let component: CentreInteretComponent;
  let fixture: ComponentFixture<CentreInteretComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentreInteretComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentreInteretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
