import { React } from "react";
import moment from "moment";

export const Total = (props) => {
    return (
        
        <div className="h-100 w-100"> 
     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '20px 0', marginBottom: '50px' }}>
    <div style={{ flex: 1, height: '1px', backgroundColor: '#009246' }}></div> {/* Verde */}
    <div style={{ position: 'relative', flex: 1, height: '1px', backgroundColor: '#ffffff' }}>
        <img src="../../logoMinSalute.png" alt="Logo Ministero" style={{
            position: 'absolute',
            left: '50%',
            top: '-100.5px',  // Metà delle dimensioni del logo - 0.5 (metà della banda)
            transform: 'translateX(-50%)',
            width: '300px', 
            zIndex: 1,
        }}/>
    </div>
    <div style={{ flex: 1, height: '1px', backgroundColor: '#CE2B37' }}></div> {/* Rosso */}
</div>

<div style={{marginBottom: '200px'}}>
<p className="text-center col-12 h5"><strong>esempio di elemento grafico di separazione. In attesa di specifiche per il fornitore.</strong></p>

</div>


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
