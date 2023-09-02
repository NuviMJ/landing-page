import React from "react";
// @ts-ignore
import Img from "../assets/img/ExecutiveCoaches.png";
import { WebPage } from "@icon-park/react";

const ExecutiveCoaches = () => {
  return (
    <div className="section bg-warm">
      <div className="flex md:flex-nowrap flex-wrap gap-10">
        <img className="w-full md:w-2/5" src={Img} />
        <div className="md:p-16">
          <h3 className="mb-8">Les Coachs Exécutifs chez<br /> Coachello</h3>
          <p>
            Nos coachs pour C-Levels ont un historique rempli de succès en ce
            qui concerne l'accompagnement de dirigeants. Ce qui leur permet de
            les aider à développer leurs compétences en leadership, surmonter
            les défis et atteindre leurs objectifs. Ils comprennent les défis
            uniques auxquels font face les dirigeants et possèdent l'expertise
            nécessaire pour vous guider dans la gestion de ces défis et
            atteindre le succès.
          </p>
          <p className="mt-8">
            Nous sélectionnons soigneusement nos coachs pour nous assurer qu'ils
            ont l'expérience, les connaissances et les compétences nécessaires
            pour répondre aux standards des cadres dirigeants. Nos coachs sont
            également formés et supervisés selon notre méthodologie éprouvée en
            coaching pour garantir la cohérence et la qualité de notre programme
            de coaching.
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-x-10 gap-y-8 mt-12">
        <div className="bg-white rounded p-5 icon-text font-normal">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2 12V8C2 5.172 2 3.757 2.879 2.879C3.757 2 5.172 2 8 2H16C18.828 2 20.243 2 21.121 2.879C22 3.757 22 5.172 22 8V12C22 14.828 22 16.243 21.121 17.121C20.645 17.598 20.011 17.816 19.081 17.916C19.0201 17.8347 18.955 17.7566 18.886 17.682C18.7543 17.5405 18.6189 17.4024 18.48 17.268L16.987 15.796L16.436 15.238C16.2562 14.1917 15.7125 13.2427 14.9007 12.5585C14.089 11.8744 13.0616 11.4992 12 11.4992C10.9384 11.4992 9.91099 11.8744 9.09927 12.5585C8.28755 13.2427 7.74376 14.1917 7.564 15.238L7.014 15.796L5.52 17.268C5.377 17.409 5.23 17.554 5.114 17.682C5.064 17.737 4.994 17.816 4.92 17.916C3.989 17.816 3.355 17.598 2.879 17.121C2 16.243 2 14.828 2 12ZM9 5.25C8.80109 5.25 8.61032 5.32902 8.46967 5.46967C8.32902 5.61032 8.25 5.80109 8.25 6C8.25 6.19891 8.32902 6.38968 8.46967 6.53033C8.61032 6.67098 8.80109 6.75 9 6.75H15C15.1989 6.75 15.3897 6.67098 15.5303 6.53033C15.671 6.38968 15.75 6.19891 15.75 6C15.75 5.80109 15.671 5.61032 15.5303 5.46967C15.3897 5.32902 15.1989 5.25 15 5.25H9ZM6.25 9.5C6.25 9.30109 6.32902 9.11032 6.46967 8.96967C6.61032 8.82902 6.80109 8.75 7 8.75H17C17.1989 8.75 17.3897 8.82902 17.5303 8.96967C17.671 9.11032 17.75 9.30109 17.75 9.5C17.75 9.69891 17.671 9.88968 17.5303 10.0303C17.3897 10.171 17.1989 10.25 17 10.25H7C6.80109 10.25 6.61032 10.171 6.46967 10.0303C6.32902 9.88968 6.25 9.69891 6.25 9.5Z"
              fill="black"
            />
            <path
              d="M15 16C15 16.7956 14.6839 17.5587 14.1213 18.1213C13.5587 18.6839 12.7956 19 12 19C11.2044 19 10.4413 18.6839 9.87868 18.1213C9.31607 17.5587 9 16.7956 9 16C9 15.2044 9.31607 14.4413 9.87868 13.8787C10.4413 13.3161 11.2044 13 12 13C12.7956 13 13.5587 13.3161 14.1213 13.8787C14.6839 14.4413 15 15.2044 15 16Z"
              fill="black"
            />
            <path
              d="M9.00096 15.9175L8.99996 16.0005C9.00137 16.7925 9.31596 17.5519 9.87509 18.1129C10.4342 18.6739 11.1925 18.991 11.9846 18.9951C12.7766 18.9991 13.5381 18.6898 14.103 18.1346C14.6678 17.5793 14.9902 16.8233 14.9997 16.0313C15.0093 15.2393 14.7052 14.4756 14.1539 13.9069C13.6026 13.3383 12.8488 13.0107 12.0568 12.9957C11.2649 12.9806 10.4992 13.2794 9.92673 13.8268C9.35425 14.3741 9.02146 15.1257 9.00096 15.9175ZM7.67596 17.2505L6.59596 18.3155C6.27096 18.6355 6.10896 18.7955 6.05296 18.9295C5.98936 19.0733 5.98069 19.2355 6.0286 19.3853C6.07652 19.5352 6.17768 19.6622 6.31296 19.7425C6.43496 19.8135 6.65496 19.8355 7.09596 19.8805C7.34396 19.9055 7.46896 19.9175 7.57296 19.9555C7.6871 19.9967 7.79093 20.0622 7.87725 20.1475C7.96358 20.2328 8.03036 20.3358 8.07296 20.4495C8.11196 20.5525 8.12496 20.6745 8.14996 20.9195C8.19496 21.3545 8.21796 21.5715 8.28996 21.6925C8.37401 21.8266 8.50335 21.9262 8.65452 21.9732C8.80569 22.0201 8.96869 22.0114 9.11396 21.9485C9.25096 21.8925 9.41396 21.7335 9.73696 21.4135L10.817 20.3435C10.0723 20.1398 9.39248 19.7483 8.84251 19.2066C8.29253 18.6648 7.89086 17.9919 7.67596 17.2505ZM13.182 20.3435L14.262 21.4135C14.587 21.7335 14.749 21.8935 14.886 21.9485C15.199 22.0745 15.546 21.9665 15.71 21.6925C15.782 21.5725 15.805 21.3545 15.85 20.9205C15.875 20.6745 15.888 20.5525 15.927 20.4505C15.9695 20.3367 16.0362 20.2335 16.1226 20.148C16.2089 20.0626 16.3128 19.9969 16.427 19.9555C16.532 19.9175 16.656 19.9055 16.904 19.8805C17.344 19.8355 17.565 19.8135 17.687 19.7425C17.8222 19.6622 17.9234 19.5352 17.9713 19.3853C18.0192 19.2355 18.0106 19.0733 17.947 18.9295C17.891 18.7945 17.729 18.6345 17.405 18.3155L16.325 17.2495C16.1099 17.9912 15.7079 18.6652 15.1576 19.207C14.6072 19.7487 13.927 20.1401 13.182 20.3435Z"
              fill="black"
            />
          </svg>
          Au minimum 10 ans d'expérience en tant que Directeur Senior ou
          Dirigeant dans un environnement corporate
        </div>
        <div className="bg-white rounded p-5 icon-text font-normal">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_10213_87198)">
              <path
                d="M12.5 2C18.023 2 22.5 6.477 22.5 12C22.5 17.523 18.023 22 12.5 22C6.977 22 2.5 17.523 2.5 12C2.5 6.477 6.977 2 12.5 2ZM14.5 13.4L12.936 14.651C12.8811 14.6949 12.8361 14.75 12.8039 14.8125C12.7717 14.875 12.7531 14.9436 12.7492 15.0138C12.7453 15.084 12.7563 15.1543 12.7814 15.22C12.8066 15.2856 12.8453 15.3453 12.895 15.395L14.134 16.634C14.3739 16.8742 14.5487 17.1715 14.642 17.498L14.817 18.111C14.8896 18.3682 15.0185 18.606 15.1944 18.8072C15.3703 19.0083 15.5888 19.1678 15.834 19.274C16.7906 18.8345 17.6513 18.211 18.367 17.439L18.133 15.562C18.0921 15.2354 17.9711 14.924 17.781 14.6554C17.5909 14.3868 17.3374 14.1692 17.043 14.022L15.573 13.286C15.402 13.2004 15.21 13.1657 15.0198 13.1859C14.8296 13.2061 14.6492 13.2804 14.5 13.4ZM12.5 4C11.276 3.99896 10.0682 4.27922 8.96981 4.81916C7.87139 5.35909 6.91175 6.14425 6.165 7.114L6 7.335V9.02C5.99987 9.6305 6.18601 10.2265 6.53355 10.7284C6.88109 11.2304 7.37349 11.6143 7.945 11.829L8.123 11.889L9.413 12.284C10.786 12.704 12.123 11.587 11.99 10.188L11.971 10.043L11.796 8.994C11.7573 8.76163 11.8019 8.52307 11.9219 8.32037C12.042 8.11767 12.2297 7.96384 12.452 7.886L12.56 7.856L13.172 7.716C13.5192 7.63663 13.8471 7.48851 14.1361 7.28038C14.4252 7.07225 14.6696 6.80833 14.855 6.50419C15.0404 6.20005 15.163 5.86185 15.2155 5.50955C15.2681 5.15726 15.2496 4.79801 15.161 4.453C14.3061 4.15212 13.4063 3.99894 12.5 4Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_10213_87198">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          Communauté mondiale dans 20 pays
        </div>
        <div className="bg-white rounded p-5 icon-text font-normal">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2.25C6.61547 2.25 2.25 6.61547 2.25 12C2.25 17.3845 6.61547 21.75 12 21.75C17.3845 21.75 21.75 17.3845 21.75 12C21.75 6.61547 17.3845 2.25 12 2.25ZM16.5 13.5H12C11.8011 13.5 11.6103 13.421 11.4697 13.2803C11.329 13.1397 11.25 12.9489 11.25 12.75V6C11.25 5.80109 11.329 5.61032 11.4697 5.46967C11.6103 5.32902 11.8011 5.25 12 5.25C12.1989 5.25 12.3897 5.32902 12.5303 5.46967C12.671 5.61032 12.75 5.80109 12.75 6V12H16.5C16.6989 12 16.8897 12.079 17.0303 12.2197C17.171 12.3603 17.25 12.5511 17.25 12.75C17.25 12.9489 17.171 13.1397 17.0303 13.2803C16.8897 13.421 16.6989 13.5 16.5 13.5Z"
              fill="black"
            />
          </svg>
          1000 heures de coaching minimum
        </div>
        <div className="bg-white rounded p-5 icon-text font-normal">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 7.09L14.45 8.58L13.8 5.77L16 3.89L13.11 3.64L12 1L10.87 3.64L8 3.89L10.18 5.77L9.5 8.58L12 7.09ZM4 13.09L6.45 14.58L5.8 11.77L8 9.89L5.11 9.64L4 7L2.87 9.64L0 9.89L2.18 11.77L1.5 14.58L4 13.09ZM20 10.09L22.45 11.58L21.8 8.77L24 6.89L21.11 6.64L20 4L18.87 6.64L16 6.89L18.18 8.77L17.5 11.58L20 10.09ZM15 23H9V10H15V23ZM7 23H1V17H7V23ZM23 23H17V13H23V23Z"
              fill="black"
            />
          </svg>
          Sélection pointue d’un panel de Top coachs (2% sur les 400)
        </div>
        <div className="bg-white rounded p-5 icon-text font-normal">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.5 5C10.5609 5 11.5783 5.42143 12.3284 6.17157C13.0786 6.92172 13.5 7.93913 13.5 9C13.5 10.0609 13.0786 11.0783 12.3284 11.8284C11.5783 12.5786 10.5609 13 9.5 13C8.43913 13 7.42172 12.5786 6.67157 11.8284C5.92143 11.0783 5.5 10.0609 5.5 9C5.5 7.93913 5.92143 6.92172 6.67157 6.17157C7.42172 5.42143 8.43913 5 9.5 5ZM9.5 15C12.17 15 17.5 16.34 17.5 19V21H1.5V19C1.5 16.34 6.83 15 9.5 15ZM17.26 5.36C19.28 7.56 19.28 10.61 17.26 12.63L15.58 10.94C16.42 9.76 16.42 8.23 15.58 7.05L17.26 5.36ZM20.57 2C24.5 6.05 24.47 12.11 20.57 16L18.94 14.37C21.71 11.19 21.71 6.65 18.94 3.63L20.57 2Z"
              fill="black"
            />
          </svg>
          90 % parlent au moins 2 langues
        </div>
      </div>
    </div>
  );
};

export default ExecutiveCoaches;
