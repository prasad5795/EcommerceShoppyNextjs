const path = require('path');

/**
 * Configuration options for SASS preprocessing in Next.js.
 * @module next-config
 * @see {@link https://nextjs.org/docs/api-reference/next.config.js/introduction}
 */

module.exports = {
  /**
   * Options for SASS preprocessing.
   * @type {Object}
   * @property {Object} sassOptions - Options for SASS preprocessing.
   * @property {string[]} sassOptions.includePaths - An array of include paths for SASS preprocessing.
   * @example
   * // Using a custom include path for SASS files
   * sassOptions: {
   *   includePaths: [path.join(__dirname, 'styles')],
   * }
   */
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
