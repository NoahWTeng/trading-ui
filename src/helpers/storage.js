export const storage = {
  set: (name, content) => {
    if (!name) return;
    if (typeof content !== 'string') {
      content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
  },
  get: name => {
    if (!name) return;
    return window.localStorage.getItem(name);
  },
  remove: name => {
    if (!name) return;
    return window.localStorage.removeItem(name);
  },
  clear: () => {
    return window.localStorage.clear();
  },
};

export const getStorage = {
  isLogin: () => JSON.parse(storage.get('isAuth')),
  user: () => JSON.parse(storage.get('user')),
};
