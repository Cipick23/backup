import { MainStyled } from './Main.styled';
import { DinamicSidebar } from '../SideBar/DinamicSidebar';
import { TransactionsTable } from '../TransactionsTable/TransactionsTable';
import { BtnAddTransaction } from 'components/BtnAddTransaction/BtnAddTransaction';

export const Main = () => {
  return (
    <MainStyled>
      <DinamicSidebar />
      <TransactionsTable />
      <BtnAddTransaction />
    </MainStyled>
  );
};
