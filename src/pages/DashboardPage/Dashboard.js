import Header from 'components/Header/Header';
import { Navigation } from 'components/Navigation/Navigation';
import Home from 'pages/HomePage/Home';

const Dashboard = () => {
  return (
    <>
      {/* 3 parti mari si late */}
      {/* Header Main cu tranzactii Side cu Balance */}
      <Header />
      <Navigation />
      <Home />
      {/* Currency */}
    </>
  );
};
export default Dashboard;
