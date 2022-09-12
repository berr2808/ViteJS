export const setPersistLocalStorage = <T>(key: string, userInfo: T) => {
  localStorage.setItem(key, JSON.stringify({ ...userInfo }));
};

export const getPersistLocalStorage = (key: string) => {
  const _T = JSON.parse(localStorage.getItem(key) as string);
  return _T;
};

export const clearPersistLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};
