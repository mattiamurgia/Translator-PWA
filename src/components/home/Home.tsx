import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { ThemeContext } from '../../App';
import { NavbarCustom as Navbar } from './../navbar/Navbar';




export const Home = () =>
{
    const theme = useContext(ThemeContext);
    return (
        <>
            <Navbar />
            {/* Hero Section */}
            <div className={`px-5 py-5 my-5 text-center home-style-${theme}`}>
                <img className="d-block mx-auto mb-4 text-center" src="/languages.png" alt="" width="80" height="80" />
                <h1 className="display-5 fw-bold">Traduttore Online Gratuito</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Traduci Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, error exercitationem molestiae nam, harum unde cupiditate fuga hic aliquid, dolorum nesciunt quidem quibusdam quas iure! Dolor minus dolores totam placeat.</p>

                    {/* Routing Button */}
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <Link to="/translator">
                            <button type="button" className="btn btn-primary btn-lg px-4 gap-3 fw-bold btn-outline btn-translate">Traduci</button>
                        </Link>

                        <Link to="/help">
                            <button type="button" className="btn btn-primary btn-lg px-4 gap-3 fw-bold btn-outline-dark btn-help">Help</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
