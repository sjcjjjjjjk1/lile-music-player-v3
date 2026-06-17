
import { api } from './api.js';

export class Player {
  constructor(audio) {
    this.audio = audio;
    this.loading = false;
  }

  async play(song) {
    if (!song || this.loading) return;
    this.loading = true;

    const res = await api.request({
      types: 'url',
      source: 'netease',
      id: song.id,
      br: 320
    });

    if (res?.url) {
      this.audio.src = res.url;
      await this.audio.play();
    }

    this.loading = false;
  }
}
