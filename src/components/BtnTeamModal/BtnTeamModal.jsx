import React, { useState } from 'react';
import { getTransactionsCategoriesThunk } from '../../redux/transactions/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredCategories } from '../../redux/transactions/selectors';
import { FcAbout } from 'react-icons/fc';
import { TeamModal } from 'components/TeamModal/TeamModal';
import css from './BtnTeamModal.module.css';

const svgOpenModal = <FcAbout />;

export const BtnTeamModal = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const dispatch = useDispatch();
  const transactionCategories = useSelector(selectFilteredCategories);

  function openAddTransactionModal() {
    if (!transactionCategories.length) {
      dispatch(getTransactionsCategoriesThunk());
    }
    setIsAddModalOpen(true);
  }

  return (
    <>
      <button
        className={css.btnOpenModal}
        type="button"
        onClick={openAddTransactionModal}
      >
        {svgOpenModal}
      </button>
      {isAddModalOpen && <TeamModal closeModal={setIsAddModalOpen} />}
    </>
  );
};
