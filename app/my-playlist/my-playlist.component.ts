import { Component, OnInit ,Input} from '@angular/core';


@Component({
  selector: 'app-my-playlist',
  templateUrl: './my-playlist.component.html',
  styleUrls: ['./my-playlist.component.css']
})
export class MyPlaylistComponent implements OnInit {

  

  @Input() data:string
  constructor() { }

  ngOnInit(): void {
    
  }

}
