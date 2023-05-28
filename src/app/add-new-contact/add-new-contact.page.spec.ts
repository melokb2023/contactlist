import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddNewContactPage } from './add-new-contact.page';

describe('AddNewContactPage', () => {
  let component: AddNewContactPage;
  let fixture: ComponentFixture<AddNewContactPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddNewContactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
