import { Component,OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  folderTitle;
  showFF;
  constructor(private _http:HttpClient){}
  getTitle(event){
    this.folderTitle=event;
  }
  getFF(event){
    this.showFF=event;
  }
  ngOnInit(){
    let shortJson;
    let longJson;
    this._http.get('http://localhost:4200/assets/shortJson.json').subscribe(res=>{
      shortJson=res;
      //console.log(shortJson);
      localStorage.setItem("shortJson",JSON.stringify(shortJson));
    });
    this._http.get('http://localhost:4200/assets/longJson.json').subscribe(res=>{
      longJson=res;
      localStorage.setItem("longJson",JSON.stringify(longJson));
    });
    
  }
}
