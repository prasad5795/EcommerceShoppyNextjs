import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { pid },
  } = req;
  fetch(`https://fakestoreapi.com/products/${pid}`)
    .then((res) => res.json())
    .then((product) => {
      res.status(200).json(product);
    });
};
