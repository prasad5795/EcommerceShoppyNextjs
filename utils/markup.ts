/**
 * Function to Create a Markup Object for Inserting Raw HTML Content
 * @param {string} content - The raw HTML content to be inserted
 * @returns {Object} - An object with the '__html' property containing the raw HTML content
 */
const createMarkup = (content: string) => {
  return { __html: content };
};

export default createMarkup;
