import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * Handles fetching a single product's data from an external API based on the provided product ID.
 *
 * @param {NextApiRequest} req - The Next.js API request object.
 * @param {NextApiResponse} res - The Next.js API response object.
 */
export default (req: NextApiRequest, res: NextApiResponse) => {
  // Extract the product ID (pid) from the query parameters
  const {
    query: { pid },
  } = req;

  // Fetch product data for the specified product ID from the "Fake Store API"
  fetch(`https://fakestoreapi.com/products/${pid}`)
    .then((response) => response.json())
    .then((product) => {
      // Respond with the fetched product data
      res.status(200).json(product);
    })
    .catch((error) => {
      // Respond with an error if the fetch operation fails
      res.status(500).json({ error: 'Failed to fetch product data' });
    });
};
