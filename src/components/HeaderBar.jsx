import React from "react";
import "bootstrap-italia/dist/css/bootstrap-italia.min.css";
import "../App.css";
import "typeface-titillium-web";
import "typeface-roboto-mono";
import "typeface-lora";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


export const HeaderBar = () => {
  return (
    <>
      {/* <Header small={false} theme="" type="slim">

      </Header> */}
    <div className="row m-0 bg-tertiary" >
        {/* <div className="col-12 col-md-4 d-flex justify-content-md-center justify-content-sm-start logo-section pt-2 pb-2">
            <img src="logo.svg" height="4px" alt="Logo" className="logo pl-5 pr-2" />
            <p className="pt-2">
                <a href="http://www.governo.it" aria-label="Presidenza del Consiglio dei Ministri" className="text-decoration-none" rel="noreferrer" alt="Presidenza del Consiglio dei Ministri">
                Presidenza del Consiglio dei Ministri
                </a>
            </p>
        </div> */}
        {/* <div className="col-12 col-md-4 d-flex justify-content-md-center justify-content-sm-start logo-section pr-sm-0 pt-2 pb-2">
            <img src="logo.svg" height="4px" alt="Logo" className="logo pl-5 pr-2" />
            <p className="pt-2">
                <a className="text-decoration-none" href="https://www.governo.it/it/dipartimenti/unit-il-completamento-della-campagna-vaccinale-e-ladozione-di-altre-misure-di-contrasto" aria-label ="Unità Completamento Campagna Vaccinale" rel="noreferrer" alt="Unità Completamento Campagna Vaccinale">
                Unità Completamento Campagna Vaccinale
                </a>
            </p>
        </div> */}
        <div className="col-12  d-flex justify-content-md-center justify-content-sm-start logo-section pt-2 pb-2 pr-sm-3">
            <img src="logo.svg" height="4px" alt="Logo" className="logo pl-5 pr-2" />
            <p className="pt-2">
                <a href="http://www.salute.gov.it/portale/home.html" className="text-decoration-none" aria-label="Ministero della Salute" rel="noreferrer" alt="Ministero della Salute">
                Ministero della Salute
                </a>
            </p>
        </div>
        {/** TITLE + LOGO*/}
        <div className="col-12 d-flex flex-column justify-content-center mainBanner">
        <div className="d-flex justify-content-center align-items-center"> {/* Aggiunto align-items-center per allineare verticalmente gli elementi */}
        {/* <img src="Coccarda.svg" alt="Logo" height="150px" className="main-logo" /> */}
        <h1 className="large-title pl-2 pt-4 d-lg-none d-md-none d-xs-block">Report Vaccini Anti COVID-19</h1> {/* Title Mobile*/}
        <h1 className="page-title large-title pl-2 pt-5 d-none d-md-block">Report Vaccini Anti COVID-19</h1>  {/* Title Desktop*/}
        <a href="https://www.salute.gov.it/portale/nuovocoronavirus/homeNuovoCoronavirus.jsp" target="_blank" style={{backgroundColor: '#ffffff', color: '#0066CC', padding: '5px 20px', textDecoration: 'none', display: 'inline-block', marginLeft: '20px', borderRadius: '5px', textAlign: 'center', alignSelf: 'center', marginTop: '40px'}}>
            vai all'area <strong>Covid-19</strong>
            <FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}} />
        </a>
    </div>
          <div className="container-fluid">
            <div className="row" >
              <div className="col-12 col-md-4 d-flex justify-content-md-center justify-content-sm-start" style={{backgroundColor:'#009246', height: '8px'}}>&nbsp;</div>
              <div className="col-12 col-md-4 d-flex justify-content-md-center justify-content-sm-start" style={{backgroundColor:'#ffffff',height: '8px'}}>&nbsp;</div>
              <div className="col-12 col-md-4 d-flex justify-content-md-center justify-content-sm-start" style={{backgroundColor:'#ce2b37',height: '8px'}}>&nbsp;</div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};
