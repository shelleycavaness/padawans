export const setPadawanLocalStorage = (padawan) => {
  return window.localStorage.setItem("padawan", JSON.stringify(padawan));
};

export const getPadawanLocalStorage = () => {
  return JSON.parse(window.localStorage.getItem("padawan"));
};

export const clearPadawanLocalStorage = () => {
  window.localStorage.removeItem("padawan");
};
