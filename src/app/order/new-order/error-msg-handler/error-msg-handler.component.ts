import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'cm-error-msg-handler',
  templateUrl: './error-msg-handler.component.html',
  styleUrls: ['./error-msg-handler.component.css']
})
export class ErrorMsgHandlerComponent implements OnInit {

  @Input() control: FormControl;
  @Input() errorMsg: string;

  constructor() { }

  ngOnInit(): void {
  }

}
