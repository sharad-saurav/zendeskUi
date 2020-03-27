import { Component, OnInit } from '@angular/core';
import {isBoolean} from 'util';
import {stringify} from 'querystring';

@Component({
  selector: 'app-zendesk',
  templateUrl: './zendesk.component.html',
  styleUrls: ['./zendesk.component.css']
})
export class ZendeskComponent implements OnInit {
  rrn = "";
  ticketId = "";
  cont = false
  ticket = {
    type: '',
    id: '',
    isProof: ''
  }
  constructor() { }

  ngOnInit() {
    //rrn api get all rrns

  }

   checkRrn(rrn){
    console.log(rrn)
  }

  continue(){
    this.cont = true;
    console.log(this.rrn);
    console.log(this.ticketId);
  }
}
