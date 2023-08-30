import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowbooksingleComponent } from './borrowbooksingle.component';

describe('BorrowbooksingleComponent', () => {
  let component: BorrowbooksingleComponent;
  let fixture: ComponentFixture<BorrowbooksingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowbooksingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrowbooksingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
