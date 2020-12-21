import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  @Input()
  comm:string=''
  allComm=['สวัสดีครับ ผมชื่อเอก ชื่อเอก ไม่ทราบว่าคุณชื่ออะไรนะครับ']

  constructor() { }

  ngOnInit(): void {
  }

  addComm(comm){
    this.allComm.push(comm);
    this.comm=''
  }
}
