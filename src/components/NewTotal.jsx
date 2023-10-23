import { React } from "react";
import moment from "moment";

export const NewTotal = (props) => {
    return (
        <div className="h-100 w-100 my-3">
            <div className="mx-auto" >
                <h2 className="text-center">
                    Nuova campagna vaccinale 2023-2024
                </h2>
            </div>
            <p className="text-center text-justify  pb-4"  >
                I dati sono aggiornati su base settimanale e sono disponibili in formato aperto con il dettaglio giornaliero.
            </p>
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
                    <h3>Totale Richiami vaccino adattato XBB 1.5</h3>
                </div>
                <div class="d-flex justify-content-center">
                    Il dato può subire variazioni negative a seguito di rettifiche da parte delle regioni
                    </div>
            </div>
        </div>
    );
};
