import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingSearchbarComponent } from './housing-searchbar.component';

describe('HousingSearchbarComponent', () => {
  let component: HousingSearchbarComponent;
  let fixture: ComponentFixture<HousingSearchbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HousingSearchbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HousingSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
