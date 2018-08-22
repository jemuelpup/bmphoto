import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPhotographerComponent } from './search-photographer.component';

describe('SearchPhotographerComponent', () => {
  let component: SearchPhotographerComponent;
  let fixture: ComponentFixture<SearchPhotographerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPhotographerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPhotographerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
