import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPokComponent } from './search-pok.component';

describe('SearchPokComponent', () => {
  let component: SearchPokComponent;
  let fixture: ComponentFixture<SearchPokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPokComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
