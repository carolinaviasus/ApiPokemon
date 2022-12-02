import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPokComponent } from './detail-pok.component';

describe('DetailPokComponent', () => {
  let component: DetailPokComponent;
  let fixture: ComponentFixture<DetailPokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPokComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailPokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
