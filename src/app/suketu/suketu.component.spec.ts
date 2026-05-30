import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuketuComponent } from './suketu.component';

describe('SuketuComponent', () => {
  let component: SuketuComponent;
  let fixture: ComponentFixture<SuketuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuketuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuketuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
