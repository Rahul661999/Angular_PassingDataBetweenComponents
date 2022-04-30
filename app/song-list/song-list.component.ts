import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {

  songList: any;

  songName:any;
  selectedItemsList = [{name1:''}];

  isSelected : boolean | undefined;
  
  constructor() { }

  @Output() event = new EventEmitter<string>();
  ngOnInit(): void {

    this.songList=[
      {name:'Song1'},
      {name:'Song2'},
      {name:'Song3'}
    ];

    console.log(this.songList);
    
  }

  addSong()
  {
    this.songList.push({name:this.songName});
  }

  addPlaylist()
  {
    this.event.emit(this.songList);
    console.log(this.songList);
    this.selectedItemsList.push({name1:this.songList.isChecked});
    this.songList[1]['name'];
    
  }

  buttonState()
  {
    return !this.songList.some(song=>song.chosen);
  }
  
  
}
