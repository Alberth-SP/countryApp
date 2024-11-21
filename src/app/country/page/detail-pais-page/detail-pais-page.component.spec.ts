import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPaisPageComponent } from './detail-pais-page.component';

describe('DetailPaisPageComponent', () => {
  let component: DetailPaisPageComponent;
  let fixture: ComponentFixture<DetailPaisPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPaisPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPaisPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
