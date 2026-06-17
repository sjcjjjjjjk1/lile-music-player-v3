
import { api } from './core/api.js';
import { Player } from './core/player.js';
import { renderSearch } from './ui/search.js';
import { toast } from './ui/toast.js';

const audio = document.getElementById('audio');
const player = new Player(audio);

document.getElementById('searchBtn').onclick = async () => {
  const kw = document.getElementById('searchInput').value;
  if (!kw) return;

  const data = await api.request({
    types: 'search',
    source: 'netease',
    name: kw,
    count: 20,
    pages: 1
  });

  if (!data) return toast('搜索失败');

  renderSearch(document.getElementById('results'), data, (song) => {
    player.play(song);
  });
};
