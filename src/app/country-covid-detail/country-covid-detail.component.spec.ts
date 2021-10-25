import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryCovidDetailComponent } from './country-covid-detail.component';

describe('CountryCovidDetailComponent', () => {
  let component: CountryCovidDetailComponent;
  let fixture: ComponentFixture<CountryCovidDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryCovidDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryCovidDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
