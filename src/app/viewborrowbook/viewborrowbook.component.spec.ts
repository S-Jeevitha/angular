import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewborrowbookComponent } from './viewborrowbook.component';

describe('ViewborrowbookComponent', () => {
  let component: ViewborrowbookComponent;
  let fixture: ComponentFixture<ViewborrowbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewborrowbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewborrowbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
