// TeamModal.js
import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectModalState, toggleTeamModal } from '../../../redux/modal/slice';
import css from './TeamModal.module.css';
import { CloseBtn } from '../AddTransaction/AddTransaction.styled';
import TeamMember from '../../TeamMember/TeamMember';

const TeamModal = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(selectModalState);

  const onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const closeModal = useCallback(() => {
    // Dispatchăm acțiunea pentru închiderea modalului
    dispatch(toggleTeamModal(false));
  }, [dispatch]);

  useEffect(() => {
    const handleEscape = e => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [closeModal]);

  return (
    <section
      className={`${css.backdrop} ${isModalOpen ? css.blurBackground : ''}`}
      onClick={onBackdropClick}
    >
      <button type="button" className={css.closeBtn} onClick={closeModal}>
        <CloseBtn />
      </button>
      {isModalOpen && (
        <div className={css.modalLayout}>
          <TeamMember
            name="Oxana Slivinschi"
            role="Team leader"
            imgSrc="./images/bogdan-nemes.webp"
            githubLink="https://github.com/OxS90"
            linkedinLink="https://www.linkedin.com/in/oxana-slivinschi-2854b8244"
          />
          <TeamMember
            name="Ciprian Ropcean"
            role="Scrum master"
            imgSrc="./src/assets/images/ciprianRopcean.webp"
            githubLink="https://github.com/Cipick23"
            linkedinLink="https://www.linkedin.com/in/ciprianropcean"
          />
          <TeamMember
            name="Alexandru Nitu"
            role="Frontend developer"
            imgSrc="./src/assets/images/ciprianRopcean.webp"
            githubLink="https://github.com/NituAlexandru"
            linkedinLink="https://www.linkedin.com/in/alexandru-nitu-631929107"
          />
          <TeamMember
            name="Andrei Rusu"
            role="Frontend developer"
            imgSrc="./src/assets/images/ciprianRopcean.webp"
            githubLink="https://github.com/adad22ro"
            linkedinLink="https://ro.linkedin.com/in/andrei-rusu-270719288"
          />
          <TeamMember
            name="Onisim Șuldac"
            role="Frontend developer"
            imgSrc="./src/assets/images/ciprianRopcean.webp"
            githubLink="https://github.com/onisimsuldac"
            linkedinLink="https://www.linkedin.com/in/onisim-%C8%99uldac-101444213"
          />
        </div>
      )}
    </section>
  );
};

export default TeamModal;
