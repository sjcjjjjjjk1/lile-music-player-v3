
export function toast(msg) {
  const el = document.createElement('div');
  el.textContent = msg;
  el.style.position = 'fixed';
  el.style.bottom = '20px';
  el.style.left = '50%';
  el.style.transform = 'translateX(-50%)';
  el.style.background = '#222';
  el.style.padding = '10px 20px';
  el.style.borderRadius = '8px';

  document.body.appendChild(el);

  setTimeout(() => el.remove(), 2000);
}
