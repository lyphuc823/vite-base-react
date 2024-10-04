export const getLocalStorage = (key: string) => {
  const data = window.localStorage.getItem(key);
  if (data) {
    return data;
  }
  return null;
};

export const setLocalStorage = (key: string, data: unknown) => {
  if (!data) {
    console.log(`Removing from localStorage - key: ${key}`);
    window.localStorage.removeItem(key);
  } else {
    const value =
      typeof data === 'object' ? JSON.stringify(data) : String(data);
    console.log(`Saving to localStorage - key: ${key}, value: ${value}`);
    window.localStorage.setItem(key, value);
  }
};
