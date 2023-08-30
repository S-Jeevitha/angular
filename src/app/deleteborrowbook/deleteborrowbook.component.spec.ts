import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteborrowbookComponent } from './deleteborrowbook.component';

describe('DeleteborrowbookComponent', () => {
  let component: DeleteborrowbookComponent;
  let fixture: ComponentFixture<DeleteborrowbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteborrowbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteborrowbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
