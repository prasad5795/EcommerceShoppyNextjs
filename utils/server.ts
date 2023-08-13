/**
 * Server URL Configuration
 * Determines the base URL for making API requests based on the environment.
 * @constant {string} server - The base URL for API requests.
 * @example
 * // During development
 * const apiUrl = `${server}/api/products`;
 *
 * // In production
 * const apiUrl = `${server}/api/products`;
 */
const dev = process.env.NODE_ENV !== 'production';

export const server = dev
  ? 'http://localhost:3000'
  : 'https://ecommerce-shoppy-nextjs.vercel.app/';
