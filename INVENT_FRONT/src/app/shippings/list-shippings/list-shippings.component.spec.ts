import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListShippingsComponent } from './list-shippings.component';

describe('ListShippingsComponent', () => {
  let component: ListShippingsComponent;
  let fixture: ComponentFixture<ListShippingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListShippingsComponent]
    });
    fixture = TestBed.createComponent(ListShippingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
