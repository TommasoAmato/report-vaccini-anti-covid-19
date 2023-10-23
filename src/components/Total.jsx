import { React } from "react";
import moment from "moment";

export const Total = (props) => {
    return (
        
        <div className="h-100 w-100 my-3">
            <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '20px 0', marginBottom: '50px' }} />

            <div className="mx-auto">
            <div className="mx-auto" style={{ marginBottom: '10px' }}>
                <h2 className="text-center">
                    Dati storici vaccinazioni anti Covid-19 fino al 24/09/2023
                </h2>
            </div>
                <p className="text-justify text-center  pb-4 h5" style={{fontSize: 18}}>
                    Dati e statistiche sulla vaccinazione anti Covid-19 a partire dal 27 Dicembre 2020 al 24 Settembre 2023.
                </p>
            </div>
            <div className="d-flex flex-column justify-content-center">
                <div className="d-flex justify-content-center align-items-baseline">
                    <img src="meds.png" alt="meds" className="pl-2 pr-5" />
                    {" "}
                    <div className="pl-2 mt-4 numbers">{props.summary.tot?.toLocaleString('it')}</div>
                </div>
                <span className="border-divider mb-2"></span>
                <div className="d-flex justify-content-center">
                    {" "}
                    <h3>Totale somministrazioni fino al 24/09/2023</h3>
                </div>
            </div>
        </div>
    );
};
