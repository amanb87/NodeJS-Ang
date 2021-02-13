import { Component } from '@angular/core';
import { Channel } from 'src/app/models/channel-model';

const CHANNELS: Channel[] = [
  { id: 11, name: 'Zee News' },
  { id: 12, name: 'Zee Business' },
  { id: 13, name: 'Sony' },
  { id: 14, name: 'ETV Raj' },
  { id: 15, name: 'Colors' },
  { id: 16, name: 'ET Now' },
  { id: 17, name: 'Bloomberg' },
  { id: 18, name: 'BBC' },
  { id: 19, name: 'CNN' },
  { id: 20, name: 'Nat Geo' }
];

@Component({
  selector: 'app-listview2',
  templateUrl: './listview2.component.html',
  styleUrls: ['./listview2.component.css']
})
export class Listview2Component {

  title = 'Tata Sky: Popular TV Channels (6b)';
  channels = CHANNELS;

  selectedChannel!: Channel ;
  onSelect(channel: Channel): void {
        this.selectedChannel = channel;
        console.log(channel);
      }

}
