import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mainview',
  templateUrl: './mainview.component.html',
  styleUrls: ['./mainview.component.css']
})
export class MainviewComponent implements OnInit {
  @Input() folderTitle;
  @Input() showFF;
  constructor() { }
  allFolders=[];
  currentTitle;
  ngOnInit() {
    this.allFolders=JSON.parse(localStorage.getItem("longJson"));
    this.showFF='false';
  }

}
