/**
 * Function to Load State from Local Storage
 * @param {string} key - The key under which the state is stored in local storage
 * @returns {Object|undefined} - The loaded state object or undefined if not found
 */
export const loadState = (key) => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    // Handle errors, if any
    return undefined;
  }
};

/**
 * Function to Save State to Local Storage
 * @param {string} key - The key under which the state will be saved in local storage
 * @param {Object} value - The state object to be saved
 */
export const saveState = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    // Handle errors, if any
  }
};
