import Header from 'components/Header/Header';
import { Navigation } from 'components/Navigation/Navigation';
import Home from 'pages/HomePage/HomePage';
import css from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={css.background}>
      {/* 3 parti mari si late */}
      {/* Header Main cu tranzactii Side cu Balance */}
      <Header />
      <div className={css.list}>
        <Navigation />
        <div className={css.vector}>
          <svg
            width="4"
            height="641"
            viewBox="0 0 4 641"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_15_302)">
              <path
                d="M1 0V641"
                stroke="white"
                strokeOpacity="0.6"
                shapeRendering="crispEdges"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_15_302"
                x="0.5"
                y="0"
                width="3"
                height="646"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="1" dy="4" />
                <feGaussianBlur stdDeviation="0.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_15_302"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_15_302"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <Home />
      </div>
      {/* Currency */}
    </div>
  );
};
export default Dashboard;
