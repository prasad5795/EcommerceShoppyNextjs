import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * Generates a random token of specified length.
 *
 * @param {number} length - The length of the token to generate.
 * @returns {string} A random token.
 */
function makeToken(length = 10): string {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

/**
 * Handles user login and token generation for white-listed email addresses.
 *
 * @param {NextApiRequest} req - The Next.js API request object.
 * @param {NextApiResponse} res - The Next.js API response object.
 */
export default (req: NextApiRequest, res: NextApiResponse) => {
  const request = req.body;
  const email = request.email;
  const password = request.password;

  // Check if the provided email and password match white-listed values
  if (whiteListedEmails.includes(email) && password === 'ecommerce') {
    // Generate a token of random string
    const token = makeToken();
    // Respond with success status and generated token
    res.status(200).json({ token, email, expireIn: new Date().valueOf() + 24 * 60 * 60 * 1000, errMsg: '' });
  } else {
    // Respond with unauthorized status and error message
    res.status(401).json({ errMsg: 'Incorrect Email or Password' });
  }
};

/** 
 * An array of white-listed email addresses for login.
 */
const whiteListedEmails = [
  'johndoe@mail.com',
  'johndoe2@mail.com'
];
