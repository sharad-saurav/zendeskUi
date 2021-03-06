import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZendeskComponent } from './zendesk.component';

describe('ZendeskComponent', () => {
  let component: ZendeskComponent;
  let fixture: ComponentFixture<ZendeskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZendeskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZendeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
