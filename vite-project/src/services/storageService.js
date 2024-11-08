const CHATS_KEY = 'ai_chat_history';
const USER_KEY = 'ai_chat_user';

/**
 * Saves the chat history to local storage.
 * @param {Array} chats - An array of chat objects.
 */
export const saveChats = (chats) => {
  localStorage.setItem(CHATS_KEY, JSON.stringify(chats));
};

/**
 * Loads the chat history from local storage.
 * @returns {Array} An array of chat objects.
 */
export const loadChats = () => {
  const chats = localStorage.getItem(CHATS_KEY);
  return chats ? JSON.parse(chats) : [];
};

/**
 * Saves the user information to local storage.
 * @param {Object} user - The user object.
 */
export const saveUser = (user) => {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

/**
 * Loads the user information from local storage.
 * @returns {Object|null} The user object or null if not found.
 */
export const loadUser = () => {
  const user = localStorage.getItem(USER_KEY);
  return user ? JSON.parse(user) : null;
};
