import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdatecontactPage } from './updatecontact.page';

describe('UpdatecontactPage', () => {
  let component: UpdatecontactPage;
  let fixture: ComponentFixture<UpdatecontactPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdatecontactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
