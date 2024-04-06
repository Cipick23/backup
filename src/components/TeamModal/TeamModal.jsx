import { BtnOpenModal } from 'components/BtnTeamModal/BtnTeamModal';
import React, { useState } from 'react';
import { FcAbout } from 'react-icons/fc';

const svgOpenModal = <FcAbout />;

export const TeamModal = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  //   const dispatch = useDispatch();
  //   const transactionCategories = useSelector(selectFilteredCategories);

  function openTeamModal() {
    setIsAddModalOpen(true);
  }

  return (
    <>
      <BtnOpenModal type="button" onClick={openTeamModal}>
        {svgOpenModal}
      </BtnOpenModal>
      {isAddModalOpen && (
        <>
          <h2 class="footer-font-title">Made by:</h2>
          <div class="footer-content">
            <div class="footer-cards">
              <div class="footer-team-card">
                <picture class="footer-image-container">
                  <source
                    srcset="./images/bogdan-nemes@2x.webp"
                    type="image/webp"
                  />
                  <img
                    class="footer-img-size"
                    src="./images/bogdan-nemes.webp"
                    alt="Bogdan Nemes"
                  />
                </picture>

                <div class="footer-member-info">
                  <span class="footer-team-name">Bogdan Nemes</span>
                  <em class="footer-team-function">Team leader</em>
                </div>
                <div class="footer-icon-cards">
                  {/* <p
                    href="https://github.com/Tumoji"
                    class="footer-github-icon"
                    aria-label="github"
                    target="_blank"
                    rel="noreferrer noopener"
                  ></p> */}
                  {/* <p
                    href="https://linkedin.com/in/bogdan-nemes-b35841a7"
                    class="footer-linkedin-icon"
                    aria-label="linkedin"
                    target="_blank"
                    rel="noreferrer noopener"
                  ></p> */}
                </div>
              </div>
              <div class="footer-team-card">
                <picture class="footer-image-container">
                  <source
                    srcset="./images/dan_retegan@2x.webp"
                    type="image/webp"
                  />
                  <img
                    class="footer-img-size"
                    src="./images/dan_retegan.webp"
                    alt="Dan Retegan"
                  />
                </picture>

                <div class="footer-member-info">
                  <span class="footer-team-name">Dan Retegan</span>
                  <em class="footer-team-function">Scrum master</em>
                </div>
                <div class="footer-icon-cards">
                  {/* <p
                    href="https://github.com/danretegan"
                    class="footer-github-icon"
                    aria-label="github"
                    target="_blank"
                    rel="noreferrer noopener"
                  ></p> */}
                  {/* <p
                    href="https://www.linkedin.com/in/dan-retegan-25a7a92a4"
                    class="footer-linkedin-icon"
                    aria-label="linkedin"
                    target="_blank"
                    rel="noreferrer noopener"
                  ></p> */}
                </div>
              </div>
              <div class="footer-team-card">
                <picture class="footer-image-container">
                  <source
                    srcset="./images/ciprian-ropcean@2x.webp"
                    type="image/webp"
                  />
                  <img
                    class="footer-img-size"
                    src="./images/ciprian-ropcean.webp"
                    alt="Ciprian Ropcean"
                  />
                </picture>
                <div class="footer-member-info">
                  <span class="footer-team-name">Ciprian Ropcean</span>
                  <em class="footer-team-function">Frontend developer</em>
                </div>
                <div class="footer-icon-cards">
                  <p
                    href="https://github.com/Cipick23"
                    class="footer-github-icon"
                    aria-label="github"
                    target="_blank"
                    rel="noreferrer noopener"
                  ></p>
                  <p
                    href="https://www.linkedin.com/in/ciprianropcean/"
                    class="footer-linkedin-icon"
                    aria-label="linkedin"
                    target="_blank"
                    rel="noreferrer noopener"
                  ></p>
                </div>
              </div>
              <div class="footer-team-card">
                <picture class="footer-image-container">
                  <source
                    srcset="./images/andrei-rusu@2x.webp"
                    type="image/webp"
                  />
                  <img
                    class="footer-img-size"
                    src="./images/andrei-rusu.webp"
                    alt="Andrei Rusu"
                  />
                </picture>
                <div class="footer-member-info">
                  <span class="footer-team-name">Andrei Rusu</span>
                  <em class="footer-team-function">Frontend developer</em>
                </div>
                <div class="footer-icon-cards">
                  <p
                    href="https://github.com/adad22ro"
                    class="footer-github-icon"
                    aria-label="github"
                    target="_blank"
                    rel="noreferrer noopener"
                  ></p>
                  <p
                    href="https://ro.linkedin.com/in/andrei-rusu-270719288"
                    class="footer-linkedin-icon"
                    aria-label="linkedin"
                    target="_blank"
                    rel="noreferrer noopener"
                  ></p>
                </div>
              </div>
              <div class="footer-team-card">
                <picture class="footer-image-container">
                  <source
                    srcset="./images/simon-khawam@2x.webp"
                    type="image/webp"
                  />
                  <img
                    class="footer-img-size"
                    src="./images/simon-khawam.webp"
                    alt="Simon Khawam"
                  />
                </picture>
                <div class="footer-member-info">
                  <span class="footer-team-name">Simon Khawam</span>
                  <em class="footer-team-function">Frontend developer</em>
                </div>
                <div class="footer-icon-cards">
                  <p
                    href="https://github.com/Simonkhawam"
                    class="footer-github-icon"
                    aria-label="github"
                    target="_blank"
                    rel="noreferrer noopener"
                  ></p>
                  <p
                    href="http://linkedin.com/in/simon-khawam-7b138371"
                    class="footer-linkedin-icon"
                    aria-label="linkedin"
                    target="_blank"
                    rel="noreferrer noopener"
                  ></p>
                </div>
              </div>
            </div>
            <div class="footer-modal-cover footer-is-hidden"></div>
          </div>
        </>
      )}
    </>
  );
};
