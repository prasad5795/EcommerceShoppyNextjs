import { useEffect, useState } from 'react';
import Toast from 'light-toast';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import Logo from '../../assets/icons/logo';

/**
 * Props for the Header component.
 */
type HeaderProps = {
  /** Indicates whether the header is being displayed on an error page. */
  isErrorPage?: boolean;
};

/**
 * Displays the header section of the Ecommerce Shoppy website.
 *
 * @param {HeaderProps} props - The props for the component.
 * @returns {JSX.Element} The Header component.
 */
const Header = ({ isErrorPage }: HeaderProps) => {
  const router = useRouter();
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const arrayPaths = ['/'];
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
  const [onTop, setOnTop] = useState(
    !arrayPaths.includes(router.pathname) || isErrorPage ? false : true
  );

  /**
   * Sets the header state based on the scroll position.
   */
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
    setIsUserLoggedIn(
      typeof window !== 'undefined' && sessionStorage && Boolean(auth_token)
    );
    if (!auth_token) {
      router.push('/login');
    }
  }, [router.pathname]);

  /**
   * Logs the user out and redirects to the login page.
   */
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
              {/* Display the Logo component alongside the site name. */}
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

// Export the Header component as the default export.
export default Header;
