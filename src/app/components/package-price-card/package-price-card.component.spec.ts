import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagePriceCardComponent } from './package-price-card.component';

describe('PackagePriceCardComponent', () => {
  let component: PackagePriceCardComponent;
  let fixture: ComponentFixture<PackagePriceCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackagePriceCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagePriceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
