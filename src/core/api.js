
const API_BASE = 'https://music-api.gdstudio.xyz';

export const api = {
  async request(params, retry = 2) {
    const url = new URL(API_BASE + '/api.php');
    Object.keys(params).forEach(k => url.searchParams.set(k, params[k]));

    for (let i = 0; i < retry; i++) {
      try {
        const res = await fetch(url);
        const text = await res.text();
        return JSON.parse(text.replace(/^callback\(|\)$/g, ''));
      } catch (e) {
        if (i === retry - 1) return null;
      }
    }
  }
};
