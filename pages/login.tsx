import Toast from 'light-toast';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Layout from '../layouts/Main';
import { server } from '../utils/server';
import { postData } from '../utils/services';

/**
 * LoginPage component represents a login page where users can log in.
 * It uses the Layout component to provide a consistent layout structure.
 * The user's login state is managed using session storage.
 */
const LoginPage = () => {
  const { register, handleSubmit, errors } = useForm();
  const router = useRouter();
  const [loginErrMsg, setloginErrMsg] = useState('');

  /**
   * Function to handle the form submission when the user tries to log in.
   * @param data - The login form data containing email and password.
   */
  const onSubmit = async (data) => {
    const { res, status } = await postData(`${server}/api/login`, {
      email: data.email,
      password: data.password,
    });

    const { token, email, expireIn, errMsg } = res;
    if (status === 200) {
      // Save token with expiry timestamp
      // and redirect to products page or last visited page
      sessionStorage.setItem('auth_token', `${email}_${token}_${expireIn}`);
      setloginErrMsg('');
      Toast.success('Logged in successfully', 1000);
      router.push('/');
    } else {
      // Stay on the same page and indicate the errors
      sessionStorage.removeItem('auth_token');
      setloginErrMsg(errMsg);
    }
  };

  // Check if the user is already logged in, redirect if so
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
          {/* Back button section */}
          <div className="back-button-section" />

          {/* Login form */}
          <div className="form-block">
            <h2 className="form-block__title">Log in</h2>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
              {/* Email input */}
              <div className="form__input-row">
                <input
                  className="form__input"
                  placeholder="Email"
                  type="text"
                  name="email"
                  ref={register({
                    required: true,
                    pattern:
                      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />

                {/* Error messages for email input */}
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

              {/* Password input */}
              <div className="form__input-row">
                <input
                  className="form__input"
                  type="password"
                  placeholder="Password"
                  name="password"
                  ref={register({ required: true })}
                />

                {/* Error message for password input */}
                {errors.password && errors.password.type === 'required' && (
                  <p className="message message--error">
                    This field is required
                  </p>
                )}
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="btn btn--rounded btn--yellow btn-submit"
              >
                Sign in
              </button>

              {/* Display login error message */}
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
