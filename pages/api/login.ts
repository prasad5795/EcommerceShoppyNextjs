import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * For generating login tokens for further use
 * @param length 
 * @returns random token
 */
function makeToken(length = 10) {
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
  * here are some white listed email for logging in and password is kept common just for demo, 
  * can be integrated with DB as well
*/ 
const whiteListedEmails = [
  'johndoe@mail.com',
  'johndoe2@mail.com'
]

export default (req: NextApiRequest, res: NextApiResponse) => {
  const request = req.body;
  const email = request.email;
  const password = request.password;

  if(whiteListedEmails.includes(email) && password === 'ecommerce') {
    // generate token of random string
    const token = makeToken();
    res.status(200).json({ token, email, expireIn: new Date().valueOf() + 24*60*60*1000, errMsg:'' });
  } else {
    res.status(401).json({ errMsg: 'Incorrect Email or Password' });
  }
}
