import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddborrowbookComponent } from './addborrowbook.component';

describe('AddborrowbookComponent', () => {
  let component: AddborrowbookComponent;
  let fixture: ComponentFixture<AddborrowbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddborrowbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddborrowbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
