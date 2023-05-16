import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../App';


export const Error = () =>
{
    const theme = useContext(ThemeContext);
    return (
        <>
            <div className={`px-5 py-5 my-5 text-center home-style-${theme}`}>
                <img className="d-block mx-auto text-center mb-2" src="/3828537.jpg" alt="" width="300" height="300" />
                <h1 className="display-5 fw-bold mb-5">Page not found</h1>
                <div className="col-lg-6 mx-auto">

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
