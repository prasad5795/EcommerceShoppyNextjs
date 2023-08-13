import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * Handles fetching product data from an external API and returning it as JSON.
 *
 * @param {NextApiRequest} _req - The Next.js API request object.
 * @param {NextApiResponse} res - The Next.js API response object.
 */
export default (_req: NextApiRequest, res: NextApiResponse) => {
  // Fetch product data from the "Fake Store API"
  fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((products) => {
      // Respond with the fetched product data
      res.status(200).json(products);
    })
    .catch((_error) => {
      // Respond with an error if the fetch operation fails
      res.status(500).json({ error: 'Failed to fetch product data' });
    });
};
