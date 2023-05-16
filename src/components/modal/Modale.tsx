import React, { useEffect, useContext, useState, useRef } from 'react';
import { Modal } from 'react-bootstrap';
import { ThemeContext } from '../../App';
import './Modale.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';


const moon = <FontAwesomeIcon icon={faMoon} />;
const sun = <FontAwesomeIcon icon={faSun} />;

export const Modale = () =>
{
    const theme = useContext(ThemeContext);
    const [modal, setModal] = useState(false);
    const prevTheme = useRef(theme);

    useEffect(() =>
    {
        if (prevTheme.current !== theme)
        {
            setModal(true);
            prevTheme.current = theme;
        }

    }, [theme]);

    return (
        <>
            <Modal show={modal} onHide={() => setModal(false)}>
                <Modal.Header closeButton className={`theme-modal-${theme}`}>
                    <Modal.Title>
                        <h1 className='text-uppercase'>Il tema è {theme}
                            <span className={`ms-3 theme-icon-${theme}`}>{theme === 'light' ? sun : moon}</span>
                        </h1>
                    </Modal.Title>
                </Modal.Header>
            </Modal>
        </>
    );
};
