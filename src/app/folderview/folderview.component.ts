import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { } from 'events';

@Component({
  selector: 'app-folderview',
  templateUrl: './folderview.component.html',
  styleUrls: ['./folderview.component.css']
})
export class FolderviewComponent implements OnInit {
  @Output() titleEmit: EventEmitter<any> = new EventEmitter();
  @Output() ffEmit: EventEmitter<any> = new EventEmitter();
  constructor() { }
  allFolders = [];
  showGPR=-1;
  showInstallFolder=-1;
  showInstallFiles=-1;
  showResourceFiles=-1;
  openGPR(i) {
    if (this.showGPR == i)
      {
        this.showGPR = -1;
        this.titleEmit.emit('');
        this.ffEmit.emit("false");
      }
    else {
      this.showGPR = i;
      this.titleEmit.emit(this.allFolders[i].title);
    }
  }
  showInstallRD(i) {
    if (this.showInstallFolder == i)
      {
        this.showInstallFolder = -1;
        this.ffEmit.emit("false");
      }
    else {
    this.showInstallFolder = i;
      this.ffEmit.emit("true");
    }
  }
  showResource(i) {
    if (this.showResourceFiles == i)
      this.showResourceFiles = -1;
    else
      this.showResourceFiles = i;
  }

  showInstalls(i) {
    if (this.showInstallFiles == i)
      this.showInstallFiles = -1;
    else
      this.showInstallFiles = i;
  }
  ngOnInit() {
    this.allFolders = JSON.parse(localStorage.getItem("longJson"));
    console.log(this.allFolders);
  }

}
