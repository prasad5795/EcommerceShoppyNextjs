import Toast from 'light-toast';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import Logo from '../../assets/icons/logo';

type HeaderType = {
  isErrorPage?: Boolean;
};

const Header = ({ isErrorPage }: HeaderType) => {
  const router = useRouter();
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const arrayPaths = ['/'];
  const isUserLoggedIn =
    typeof window !== 'undefined' &&
    sessionStorage &&
    sessionStorage.getItem('auth_token');
  const [onTop, setOnTop] = useState(
    !arrayPaths.includes(router.pathname) || isErrorPage ? false : true
  );

  const headerClass = () => {
    if (window.pageYOffset === 0) {
      setOnTop(true);
    } else {
      setOnTop(false);
    }
  };

  useEffect(() => {
    if (!arrayPaths.includes(router.pathname) || isErrorPage) {
      return;
    }

    headerClass();
    window.onscroll = function () {
      headerClass();
    };
  }, []);

  useEffect(() => {
    const auth_token = sessionStorage.getItem('auth_token');
    if (!auth_token) {
      router.push('/login');
    }
  }, [router.pathname]);

  const logout = () => {
    sessionStorage.removeItem('auth_token');
    Toast.success('Logged out', 1000);
    router.push('/login');
  };

  return (
    <header className={`site-header ${!onTop ? 'site-header--fixed' : ''}`}>
      <div className="container" style={{ justifyContent: 'space-between' }}>
        <Link href="/">
          <a>
            <h1 className="site-logo">
              <Logo />
              Ecommerce Shoppy
            </h1>
          </a>
        </Link>
        <div className="site-header__actions">
          {isUserLoggedIn && (
            <Link href="/cart">
              <button className="btn-cart">
                <i className="icon-cart"></i>
                {cartItems.length > 0 && (
                  <span className="btn-cart__count">{cartItems.length}</span>
                )}
              </button>
            </Link>
          )}
          {isUserLoggedIn && <button onClick={logout}>Logout</button>}
        </div>
      </div>
    </header>
  );
};

export default Header;
