export const setPadawanLocalStorage = (user) => {
	return window.localStorage.setItem("user", JSON.stringify(user));
};

export const getPadawanLocalStorage = () => {
	return JSON.parse(window.localStorage.getItem("user"));
};

export const clearPadawanLocalStorage = () => {
	window.localStorage.removeItem("user");
};
