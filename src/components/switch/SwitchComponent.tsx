import React, { MouseEventHandler, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../../App';
import './SwitchComponent.css';

export type TypeSwitch = {
  onClick: Function;
};

//Icon 
const moon = <FontAwesomeIcon icon={faMoon} />;
const sun = <FontAwesomeIcon icon={faSun} />;

export const SwitchComponent = ({ onClick }: TypeSwitch) =>
{
  const theme = useContext(ThemeContext);

  return (
    <div>
      <button type="button" className={`btn btn-primary rounded-pill text-uppercase p-2 ms-4 fw-bold position-relative theme-button-${theme}`} onClick={onClick as MouseEventHandler}>{theme}
        <span className={`position-absolute top-0 start-100 translate-middle badge rounded-pill ms-2 theme-span-${theme}`} >{theme === 'light' ? sun : moon}</span>
      </button>
    </div>);
};
