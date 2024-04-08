// BtnTeamModal.js
import React from 'react';
import { FcAbout } from 'react-icons/fc';
import css from './BtnTeamModal.module.css';
import { useDispatch } from 'react-redux';
import { toggleTeamModal } from '../../redux/modal/slice';

const svgOpenModal = <FcAbout />;

const BtnTeamModal = () => {
  const dispatch = useDispatch();

  const openTeamModal = () => {
    // Dispatchăm acțiunea pentru deschiderea modalului
    dispatch(toggleTeamModal(true));
  };

  return (
    <>
      {/* Butonul pentru deschiderea modalului */}
      <button
        className={css.btnOpenModal}
        type="button"
        onClick={openTeamModal}
      >
        {svgOpenModal}
      </button>
    </>
  );
};

export default BtnTeamModal;
