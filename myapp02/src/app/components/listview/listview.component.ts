import { Component } from '@angular/core';

class Channel {
  constructor(public  id: number, public name: string ){}
}

const CHANNELS: Channel[] = [
  { id: 11, name: 'Zee News' },
  { id: 12, name: 'Zee Business' },
  { id: 13, name: 'Sony' },
  { id: 14, name: 'ETV' },
  { id: 15, name: 'Colors' },
  { id: 16, name: 'ET Now' },
  { id: 17, name: 'Bloomberg' },
  { id: 18, name: 'BBC' },
  { id: 19, name: 'CNN' },
  { id: 20, name: 'Nat Geo' }
];

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})

export class ListviewComponent {
  title = 'Tata Sky: The Most Popular TV Channels';
  channels = CHANNELS;
  selectedChannel!: Channel ;
  onSelect(channel: Channel): void { this.selectedChannel = channel; }

}
