import { useState, useEffect } from 'react';
import { HeaderBar } from "./components/HeaderBar";
import { FooterBar } from "./components/FooterBar";
import { Total } from "./components/Total";
import { loadData } from "./loadData";
import { Deliveries } from "./containers/deliveries";
import { AgeDoses } from "./containers/agedoses";
import { Healed } from "./containers/healed";
import { Weeks } from "./containers/weeks";
import { Databox } from "./containers/databox";
import { Supplier } from './components/Supplier';
import { hideLoader } from "./utils";
import "./App.css";
import { Locations } from "./containers/locations";


import { NewTotal } from "./components/NewTotal";
import { NewWeeks } from "./containers/newWeeks";
import { NewAgeDoses } from "./containers/newAgeDoses";



function App() {
    const [summary, setSummary] = useState({});

    useEffect(() => {
        loadData().then((d) => {
        hideLoader();
        setSummary(d);
        });
    }, []);

    return (
        <div>
            <HeaderBar />
            <div className="container">
                {/*nuova parte somministrazioni XBB 1.5 */}
                <NewTotal summary={{ ...summary}} />           {/* Totale Somministrazioni XBB1.5 */}
                <NewWeeks data={summary} />                    {/* Grafico Andamento Settimanale delle Somministrazioni XBB1.5 */}
                <NewAgeDoses data={summary} />                 {/* Grafico Somministrazioni per fascia d'età XBB1.5*/}

                <div style={{ marginBottom: '50px' }}></div>
                <Total summary={{ ...summary }} />          {/* Totale Somministrazioni */}
                {/* <Weeks data={summary} />                    Grafico Andamento Settimanale delle Somministrazioni */}
                <AgeDoses data={summary} />                 {/* Grafico Somministrazioni per fascia d'età */}
                <Databox data={summary} />                  {/* Box riepilogo dati  copertura vaccinale over-60 */}
                {/* <Deliveries data={summary} />               Tabella Distribuzione Dosi rispetto alle consegne */}
                {/* <Healed data={summary} />                   Grafico platea guariti */}
                
                {/* <Supplier data={summary} />                 Grafico Distribuzione Vaccini per Fornitore */}
                {/* <Locations data={summary} />                Tabella Principali Punti di Somministrazione */}
            </div>
            <FooterBar />
        </div>
    );
}

export default App;
