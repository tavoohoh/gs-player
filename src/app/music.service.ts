import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { PlayerFile } from 'projects/gs-player/src/public-api';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  files: Array<PlayerFile> = [
    {
      url:
        // tslint:disable-next-line: max-line-length
        'https://ia801504.us.archive.org/3/items/EdSheeranPerfectOfficialMusicVideoListenVid.com/Ed_Sheeran_-_Perfect_Official_Music_Video%5BListenVid.com%5D.mp3',
      name: 'Perfect',
      artist: 'Ed Sheeran',
      album: 'Album'
    },
    {
      url:
      // tslint:disable-next-line: max-line-length
        'https://ia801609.us.archive.org/16/items/nusratcollection_20170414_0953/Man%20Atkiya%20Beparwah%20De%20Naal%20Nusrat%20Fateh%20Ali%20Khan.mp3',
      name: 'Man Atkeya Beparwah',
      artist: 'Nusrat Fateh Ali Khan',
      album: 'Album'
    },
    {
      url:
        'https://ia801503.us.archive.org/15/items/TheBeatlesPennyLane_201805/The%20Beatles%20-%20Penny%20Lane.mp3',
      name: 'Penny Lane',
      artist: 'The Beatles',
      album: 'Album'
    }
  ];

  getFiles() {
    return of(this.files);
  }
}
