import type { NextApiRequest, NextApiResponse } from 'next';

export default (_req: NextApiRequest, res: NextApiResponse) => {
  fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((products) => {
      res.status(200).json(products)
    });
};
