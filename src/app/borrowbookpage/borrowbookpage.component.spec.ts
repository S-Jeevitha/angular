import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowbookpageComponent } from './borrowbookpage.component';

describe('BorrowbookpageComponent', () => {
  let component: BorrowbookpageComponent;
  let fixture: ComponentFixture<BorrowbookpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowbookpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrowbookpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
