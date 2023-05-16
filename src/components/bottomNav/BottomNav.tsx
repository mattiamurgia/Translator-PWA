import React, { useContext } from 'react';
import './BottomNav.css';
import { ThemeContext } from '../../App';


export type ComponentType = {
    component: JSX.Element;
};

export const BottomNav = ({ component }: ComponentType) =>
{
    const theme = useContext(ThemeContext);

    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-light theme-mode-${theme}`}>
                <h5 className="mx-auto link-light fw-bold d-flex flex-row mt-2">TranslatorOnline.com {component}</h5>
            </nav>
        </div >);
};
