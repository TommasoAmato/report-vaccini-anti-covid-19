import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faYoutube, faInstagram, faTelegram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import logo from '../stellone.png';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'


export const FooterBar = () => {
    return (
        <>
            {/* <Footer small={false} theme="" type="slim">

            </Footer> */}
            <footer tabIndex="0" className="hidden-print" id="footer" style={{ background: '#30373d', color: '#a5abb0', minHeight: '20rem', padding: '5rem 1rem 1rem 1rem' }} >
                <div className="container">
                    <div className="row">
                        <div className="col-md-1">
                            <a onClick={() => window.open("https://www.salute.gov.it/")} title="Collegamento al sito www.salute.gov.it. Apre una nuova pagina." style={{ textDecoration: 'none' }}>
                                <img title="Logo" alt="Logo" src={logo} className="footer__logo" />
                            </a>
                        </div>
                        <div className="col-md-6">
                            <p style={{ fontWeight: 'normal', fontSize: '27px', marginTop: '0', color: '#fff' }} className=" h3">
                                © 2022 - Testata di proprietà del Ministero della Salute<br />
                            </p>
                        </div>
                        <div className="col-md-4">
                            <div style={{ marginTop: '0.5em', textAlign: 'left' }}>
                                <span id="social-footer">
                                    <a style={{ paddingLeft: '5px', textDecoration: 'none' }} onClick={() => window.open("https://www.facebook.com/MinisteroSalute")} title="Collegamento alla pagina Facebook del Ministero della Salute. Apre una nuova pagina.">
                                        <FontAwesomeIcon icon={faFacebook} style={{ color: '#65dcdf'  }}  />
                                    </a>
                                    <a style={{ paddingLeft: '5px', textDecoration: 'none' }} onClick={() => window.open("https://twitter.com/ministerosalute")} title="Collegamento alla pagina Twitter del Ministero della Salute. Apre una nuova pagina.">
                                        <FontAwesomeIcon icon={faTwitter} style={{ color: '#65dcdf' }} />
                                    </a>
                                    <a style={{ paddingLeft: '5px', textDecoration: 'none' }} onClick={() => window.open("https://www.youtube.com/user/MinisteroSalute")} title="Collegamento al canale Youtube del Ministero della Salute. Apre una nuova pagina.">
                                        <FontAwesomeIcon icon={faYoutube} style={{ color: '#65dcdf' }} />
                                    </a>
                                    <a style={{ paddingLeft: '5px', textDecoration: 'none' }} onClick={() => window.open("https://www.instagram.com/ministerosalute")} title="Collegamento alla pagina Instagram del Ministero della Salute. Apre una nuova pagina.">
                                        <FontAwesomeIcon icon={faInstagram} style={{ color: '#65dcdf' }} />
                                    </a>

                                    <a style={{ paddingLeft: '5px', textDecoration: 'none' }} onClick={() => window.open("https://t.me/MinisteroSalute")} title="Collegamento al canale Telegram del Ministero della Salute. Apre una nuova pagina.">
                                        <FontAwesomeIcon icon={faTelegram} style={{ color: '#65dcdf' }} />
                                    </a>

                                    <a style={{ paddingLeft: '5px', textDecoration: 'none' }} onClick={() => window.open("https://www.linkedin.com/company/MinisteroSalute")} title="Collegamento alla pagina Linkedin del Ministero della Salute. Apre una nuova pagina.">
                                        <FontAwesomeIcon icon={faLinkedin} style={{ color: '#65dcdf' }} />
                                    </a>

                                    <a href="https://github.com/italia/covid19-opendata-vaccini" target="_blank" style={{backgroundColor: '#65dcdf', color: 'black', padding: '1px 1px 1px 5px', textDecoration: 'none', display: 'inline-block', marginLeft: '20px', borderRadius: '3px'}}>
                                        <strong>Open Data </strong>
                                        <FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '30px'}} />
                                    </a>
                                    <br />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <ul className="col-xs-12 clearfix" style={{ marginTop: '5rem', padding: '0', borderTop: '1px solid #65dcdf' }} >
                            <li style={{ listStyleType: 'none', display: 'inline-block', marginRight: '2rem' }}>
                                <a style={{color: '#65dcdf'}} title="Mappa" href="/portale/nuovocoronavirus/dettaglioContenutiNuovoCoronavirus.jsp?lingua=italiano&amp;id=5343&amp;area=nuovoCoronavirus&amp;menu=vuoto">Mappa</a>
                            </li>
                            <li style={{ listStyleType: 'none', display: 'inline-block', marginRight: '2rem' }}>
                                <a style={{color: '#65dcdf'}} title="Link" href="/portale/nuovocoronavirus/dettaglioContenutiNuovoCoronavirus.jsp?lingua=italiano&amp;id=5344&amp;area=nuovoCoronavirus&amp;menu=vuoto">Link</a>
                            </li>
                            <li style={{ listStyleType: 'none', display: 'inline-block', marginRight: '2rem' }}>
                                <a style={{color: '#65dcdf'}} title="Credits" href="/portale/nuovocoronavirus/dettaglioContenutiNuovoCoronavirus.jsp?lingua=italiano&amp;id=5345&amp;area=nuovoCoronavirus&amp;menu=vuoto">Credits</a>
                            </li>
                            <li style={{ listStyleType: 'none', display: 'inline-block', marginRight: '2rem' }}>
                                <a style={{color: '#65dcdf'}} title="Note legali" href="/portale/nuovocoronavirus/dettaglioContenutiNuovoCoronavirus.jsp?lingua=italiano&amp;id=5185&amp;area=nuovoCoronavirus&amp;menu=vuoto">Note legali</a>
                            </li>
                            <li style={{ listStyleType: 'none', display: 'inline-block', marginRight: '2rem' }}>
                                <a style={{color: '#65dcdf'}} title="Privacy" href="/portale/nuovocoronavirus/dettaglioContenutiNuovoCoronavirus.jsp?lingua=italiano&amp;id=5186&amp;area=nuovoCoronavirus&amp;menu=vuoto">Privacy</a>
                            </li>
                            <li style={{ listStyleType: 'none', display: 'inline-block', marginRight: '2rem' }}>
                                <a style={{color: '#65dcdf'}} title="Social Media Policy" href="/portale/nuovocoronavirus/dettaglioContenutiNuovoCoronavirus.jsp?lingua=italiano&amp;id=5500&amp;area=nuovoCoronavirus&amp;menu=vuoto">Social Media Policy</a>
                            </li>
                            <li style={{ listStyleType: 'none', display: 'inline-block', marginRight: '2rem' }}>
                                <a style={{color: '#65dcdf'}} title="Accessibilità" href="/portale/nuovocoronavirus/dettaglioContenutiNuovoCoronavirus.jsp?lingua=italiano&amp;id=5229&amp;area=nuovoCoronavirus&amp;menu=vuoto">Accessibilità</a>
                            </li>
                            <li style={{ listStyleType: 'none', display: 'inline-block', marginRight: '2rem' }}>
                                <a style={{color: '#65dcdf'}} href="https://form.agid.gov.it/view/90fa205d-e0e3-4521-8b38-ab64ec5189ae" target="_blank" rel="noopener noreferrer">Dichiarazione di Accessibilità</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>

        </>
    );
};
