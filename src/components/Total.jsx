import { React } from "react";
import moment from "moment";

export const Total = (props) => {
    return (
        
        <div className="h-100 w-100 my-3">
            <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '20px 0', marginBottom: '50px' }} />

            <div className="mx-auto">
            <div className="mx-auto" style={{ marginBottom: '10px' }}>
                <h2 className="text-center">
                    Dati complessivi vaccinazioni anti Covid-19
                </h2>
            </div>
                <p className="text-justify  pb-4 h5" style={{fontSize: 24}}>
                    Dati e statistiche sulla vaccinazione anti Covid-19 a partire dal 27 dicembre 2020 ad oggi.
                    I dati sono aggiornati su base settimanale e sono disponibili in formato aperto con il dettaglio giornaliero.                 
                </p>
            </div>
            <div className="mx-auto">
                <h4 className="text-center">
                    Ultimo aggiornamento dati
                </h4>
                <h6 className="text-center pb-4">                
                    {" "}
                    {props.summary.timestamp && moment(props.summary.timestamp).format("DD-MM-YYYY")}
                </h6>
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
                    <h3>Totale somministrazioni</h3>
                </div>
                <div class="d-flex justify-content-center">
                    Il dato può subire variazioni negative a seguito di rettifiche da parte delle regioni
                    </div>
            </div>
        </div>
    );
};
