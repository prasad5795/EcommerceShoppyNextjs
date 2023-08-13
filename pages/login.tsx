import Toast from 'light-toast';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Layout from '../layouts/Main';
import { server } from '../utils/server';
import { postData } from '../utils/services';

export const index = () => {
  return (
    <div>index</div>
  )
}

type LoginMail = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const { register, handleSubmit, errors } = useForm();
  const router = useRouter();
  const [loginErrMsg, setloginErrMsg] = useState('');
  const onSubmit = async (data: LoginMail) => {
    const { res, status } = await postData(`${server}/api/login`, {
      email: data.email,
      password: data.password,
    });

    const { token, email, expireIn, errMsg } = res;
    if (status === 200) {
      // save token with expiry timestamp
      // and redirect to products page or last visited page
      sessionStorage.setItem('auth_token', `${email}_${token}_${expireIn}`);
      setloginErrMsg('');
      Toast.success("Logged in successfully", 1000);
      router.push('/');
    } else {
      // stay on same page and indicate the errors
      sessionStorage.removeItem('auth_token');
      setloginErrMsg(errMsg);
    }
  };

  useEffect(() => {
    const auth_token = sessionStorage.getItem('auth_token');
    if (auth_token) {
      router.push('/');
    }
  }, []);

  return (
    <Layout>
      <section className="form-page">
        <div className="container">
          <div className="back-button-section" />
          <div className="form-block">
            <h2 className="form-block__title">Log in</h2>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
              <div className="form__input-row">
                <input
                  className="form__input"
                  placeholder="email"
                  type="text"
                  name="email"
                  ref={register({
                    required: true,
                    pattern:
                      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />

                {errors.email && errors.email.type === 'required' && (
                  <p className="message message--error">
                    This field is required
                  </p>
                )}

                {errors.email && errors.email.type === 'pattern' && (
                  <p className="message message--error">
                    Please write a valid email
                  </p>
                )}
              </div>

              <div className="form__input-row">
                <input
                  className="form__input"
                  type="password"
                  placeholder="Password"
                  name="password"
                  ref={register({ required: true })}
                />
                {errors.password && errors.password.type === 'required' && (
                  <p className="message message--error">
                    This field is required
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="btn btn--rounded btn--yellow btn-submit"
              >
                Sign in
              </button>
              {loginErrMsg && (
                <p className="message message--error">{loginErrMsg}</p>
              )}
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LoginPage;
