import React, { useEffect, useState } from "react";
import { isEmpty, max } from "lodash";
import { NewAgeHStackedBarChart } from "./../components/NewAgeHStackedBarChart";

import { MapArea } from "./../components/MapArea";

export const NewAgeDoses = ({ data }) => {
    const [dosesAgesColor, setdosesAgesColor] = useState([]);
    const [dosesAges, setdosesAges] = useState([]);
    const [dosesAgesKeys, setDosesAgesKeys] = useState([]);
    const [keyValueDoses, setKeyValueDoses] = useState({});
    const [dosesAgesData, setDosesAgesData] = useState([]);

    const [categoryMapData, setCategoryMapData] = useState([]);
    const [categoryMapField, setCategoryMapField] = useState("somministrazioni");

    const [categorySelectedRegion, setCategorySelectedRegion] = useState(null);
    const [categorySelectedRegionDescr, setCategorySelectedRegionDescr] = useState(null);
    const [selectedCodeAge, setSelectedCodeAge] = useState(null);

    const [totalByCategory, setTotalByCategory] = useState(0);
    const customSort = (a, b) => {
        const order = ["Fascia over 80", "Fascia 70-79", "Fascia 60-69", "Fascia 12-59", "Fascia 05-11", "Fascia 0-4"];
        return order.indexOf(a.label) - order.indexOf(b.label);
    };


    const filterAndAggregateData = (data) => {
        // Prima, calcoliamo il totale per ogni fascia d'età
        const totalsByAge = data.map(item => {
            const totalDoses = ["prima", "seconda", "addizionale", "second_booster", "third_booster"]
                .reduce((sum, doseKey) => sum + (item[doseKey] || 0), 0);
            return {
                label: item.label,
                totale: totalDoses
            };
        });
    
        // Poi, creiamo la nuova fascia "12-59" sommando i totali delle fasce d'età corrispondenti
        const fascia1259 = totalsByAge
            .filter(item => 
                ["Fascia 12-19", "Fascia 20-29", "Fascia 30-39", "Fascia 40-49", "Fascia 50-59"].includes(item.label)
            )
            .reduce((acc, curr) => {
                acc.totale += curr.totale;
                return acc;
            }, { label: "Fascia 12-59", totale: 0 });
    
        // Filtra e aggrega le altre fasce, escludendo quelle che abbiamo già aggregato nella fascia 12-59
        const otherAges = totalsByAge
            .filter(item => !["Fascia 12-19", "Fascia 20-29", "Fascia 30-39", "Fascia 40-49", "Fascia 50-59"].includes(item.label));
    
        // Combina tutto insieme
        const combinedData = [...otherAges, fascia1259];
    
        combinedData.sort(customSort);
    
        return combinedData;
    };
    
    
    

    useEffect(() => {

        if (!isEmpty(data)) {
            setdosesAgesColor(data.agedosesContent.dosesAgesColor);
            setdosesAges(data.agedosesContent.dosesAges);
            setDosesAgesKeys(data.agedosesContent.keysDosesAges);
            setKeyValueDoses(data.agedosesContent.keyValueDoses);
            setDosesAgesData(filterAndAggregateData(data.agedosesContent.dosesAgesData));
    
            setTotalByCategory(data.tot);
            setCategoryMapData(data.agedosesContent.secondDosesMapData);
        }
    }, [data]);
    
    const resetFilter = () => {
        setSelectedCodeAge(null);
        setCategorySelectedRegion(null);
        setCategorySelectedRegionDescr(null);
        setTotalByCategory(data.tot);
        setDosesAgesData(filterAndAggregateData(data.agedosesContent.dosesAgesData));
        setCategoryMapField("somministrazioni");
        setCategoryMapData(data.agedosesContent.secondDosesMapData);
    };

    const fillMapCategoryArea = ({ region, maxValue, field }) => {
        let scaleOp = 0;
        if (region.code === categorySelectedRegion) {
            scaleOp = 1;
        } else if (!categorySelectedRegion) {
            scaleOp = max([region[field] / maxValue, 0.1]);
        } else {
            const valueToFill = region[field] / (2 * maxValue);
            scaleOp = max([valueToFill, 0.1]);
        }
        return `rgba(0,102,204,${scaleOp}) `;
    };

    const handleMapCategoryClick = (region) => {
        if (selectedCodeAge) {
            resetFilter();
        }
    
        if (categorySelectedRegion === region.code) {
            resetFilter();
        } else {
            setCategorySelectedRegion(region.code);
            setCategorySelectedRegionDescr(region.area);
            
            // Qui raggruppiamo le fasce d'età per la regione selezionata
            const regionalData = data.agedosesContent.dosesAgesRegionData[region.code];
            setDosesAgesData(filterAndAggregateData(regionalData));
    
            for(let row of data?.totalDeliverySummary) {
                if (row.code === region.code) {
                    setTotalByCategory(row.dosi_somministrate);
                }
            }
        }
    };

    const handleCategoryBarChartClick = (cat) => {
        if (categorySelectedRegion) {
            resetFilter();
        }
    
        const ageCode = cat.data.label.toLowerCase().replaceAll(' ', '_');
    
        if (selectedCodeAge === ageCode) {
            resetFilter();
        } else {
            setSelectedCodeAge(ageCode);
            setCategoryMapField(ageCode);
    
            const aggregatedData = filterAndAggregateData(data.agedosesContent.dosesAgesData);
            for(let row of aggregatedData) {
                if (row.label === cat.data.label) {
                    setTotalByCategory(row.totale);
                    break;
                }
            }
        }
    };

    const chartWidth = 350;
    const chartHeight = 300;
    return (
        <div className="row">
            {/* Box Title */}
            <div className="col-12 d-flex justify-content-center align-items-center section-title mx-2">
                <div>
                    <h3>Somministrazioni di XBB 1.5 per fascia d'età</h3>
                </div>
                
            </div>
            {/* // Box Title */}

            <div className="col-12 col-md-12 m-3">
                {/* Total Box - Mobile Layout */}
                <div className="d-lg-none bg-box box-mobile m-3">
                    <div className="text-white">
                        <div className="d-flex justify-content-center pt-5">
                            <h5>Totale somministrazioni</h5>
                        </div>
                        <div className="d-flex justify-content-center">
                            <p className="box-numbers">
                                {totalByCategory && totalByCategory.toLocaleString("it")}
                            </p>
                        </div>

                    </div>
                </div>
                {/* // Total Box - Mobile Layout */}

                {/* Total Box - Desktop Layout */}
                <div className="col-4 col-md-4 d-none d-lg-block">
                    <div className="bg-box box-card box-left">
                        <div className="text-white">
                            <div className="d-flex justify-content-start pt-3 pl-5">
                                <h5>Totale somministrazioni</h5>
                            </div>
                            <div className="d-flex justify-content-start pl-5">
                                <p className="box-numbers">
                                    {totalByCategory && totalByCategory.toLocaleString("it")}
                                </p>
                            </div>
                            <div className="col-12 d-flex justify-content-end pb-2">
                                <img alt="Reset" src="reset_white.png" onClick={resetFilter} height="36px"/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* // Total Box - Desktop Layout */}
            </div>
            <div className="col-12 col-md-6">

                {/* Graph */}
                <NewAgeHStackedBarChart
    width={chartWidth}
    height={chartHeight}
    handleRectClick={handleCategoryBarChartClick}
    regionSelected={categorySelectedRegionDescr}
    selectedCodeAge={selectedCodeAge}
    colors={dosesAgesColor}
    keys={["totale"]} // Poiché stai usando solo il totale
    labels={keyValueDoses}
    data={dosesAgesData}
/>
                {/* // Graph */}

                {/* Legend */}
                {/* <div className="row mb-4 ml-4">
                    {dosesAges.map((dose, index) => {
                        return (
                            <div className="row" key={dose}>
                                <div className="circle" style={{ backgroundColor: dosesAgesColor[index] }}></div>
                                <div className="legend-dark mr-4">{dose}</div>
                            </div>
                        )
                    })}
                </div> */}
                {/* // Legend */}

                <p className="d-block d-sm-none text-center">*Tieni premuto sulle barre del grafico per visualizzare i dati sulle dosi somministrate</p>
                <p className="d-none d-sm-block text-center">*Passa con il mouse sulle barre del grafico per visualizzare i dati sulle dosi somministrate</p>
            </div>
            <div className="col-12 col-md-6">

                {/* Map Title - Mobile View*/}
                <div className="p-4 d-lg-none">
                    <div className="text-center">
                        <h5>Percentuale vaccinati per regione</h5>
                    </div>
                </div>
                {/* // Map Title - Mobile View*/}

                {/* Map Graph */}
                <MapArea
                    fillMapDeliveryArea={fillMapCategoryArea}
                    summary={categoryMapData}
                    handleMapDeliveryClick={handleMapCategoryClick}
                    fillBy={categoryMapField}
                    percentage={true}
                    tooltip={(r) => {
                            var region = null;
                            for(let row of categoryMapData) {
                                if (row.code === r.code) {
                                    region = row;
                                }
                            }

                            return (
                                r.area +
                                " " +
                                (r[categoryMapField] && r[categoryMapField].toFixed(2).toLocaleString("it") + "%") +
                                " " +
                                (region && region[categoryMapField] && "(" + region[categoryMapField].toLocaleString("it") + ")")
                            )
                        }
                    }
                    className="ml-5"
                />
                {/* // Map Graph */}

                {/* Map Title - Desktop View*/}
                {/* <div className="p-4 position-relative d-none d-lg-block" style={{ left: "300px", top: "-390px" }}> */}
                <div className="p-4 d-none d-lg-block map-legend">
                    <div className="d-flex justify-content-start pr-5">
                        <h5 className="pl-3 pl-sm-1">
                            Percentuale vaccinati
                            <br /> per regione
                        </h5>
                    </div>
                </div>
                {/* // Map Title - Desktop View*/}
            </div>
        </div>
    )
};