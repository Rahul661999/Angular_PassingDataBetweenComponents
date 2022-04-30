import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { SongListComponent } from './song-list/song-list.component';
import { ChangeDetectorRef } from '@angular/core';  //this import is used for handling error in changedetection

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{

  message: string="";
  @ViewChild(SongListComponent) child:SongListComponent | any;

  constructor(private detectchange : ChangeDetectorRef) {}

  
  
  ngAfterViewInit(): void {
    
    this.message = this.child.songList;
    this.detectchange.detectChanges();
    //console.log(this.child.songList);
  }

  message1 :string="";
  receiveMessage($event)
  {
    this.message1=$event;
    console.log(this.message1);
  }
  
  title = 'assignment02';
}
