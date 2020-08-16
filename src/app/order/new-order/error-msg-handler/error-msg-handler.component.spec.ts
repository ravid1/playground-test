import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMsgHandlerComponent } from './error-msg-handler.component';

describe('ErrorMsgHandlerComponent', () => {
  let component: ErrorMsgHandlerComponent;
  let fixture: ComponentFixture<ErrorMsgHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorMsgHandlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorMsgHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
