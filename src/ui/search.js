
export function renderSearch(container, list, onPlay) {
  container.innerHTML = '';

  list.forEach(song => {
    const el = document.createElement('div');
    el.className = 'card';

    el.innerHTML = `
      <b>${song.name}</b><br/>
      <small>${song.artist}</small>
    `;

    el.onclick = () => onPlay(song);
    container.appendChild(el);
  });
}
