import Header from 'components/Header/Header';
import { Navigation } from 'components/Navigation/Navigation';
import css from './Dashboard.module.css';
import Home from 'pages/HomePage/HomePage';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Balance } from 'components/Balance/Balance';

const Dashboard = () => {
  // const isDesktop = useMediaQuery({ minWidth: 1280 });
  // const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  // const isMobile = useMediaQuery({ maxWidth: 767 });

  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1280 });
    return isDesktop ? children : null;
  };
  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
    return isTablet ? children : null;
  };
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
  };

  return (
    <>
      <Header />
      <section className={css.list}>
        <div className={css.sidebar}>
          <div className={css.list}>
            <Navigation />
          </div>

          <div className={css.list}>
            <Desktop>
              <Balance />
            </Desktop>
            <Tablet>
              <Balance />
            </Tablet>
            <Mobile>
              <Balance />
            </Mobile>
          </div>
        </div>

        <div className={css.currencyBox}>{/* <Currency /> */}</div>

        <div className={css.boxSizeHome}>
          <Home />
        </div>
      </section>
    </>
  );
};

export default Dashboard;
