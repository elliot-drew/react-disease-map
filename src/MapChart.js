import React, { useState, useEffect, memo } from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup, Sphere } from "react-simple-maps";
import { scaleQuantize, scaleLinear } from "d3-scale";
import { csv } from "d3-fetch";
import { interpolatePlasma } from "d3-scale-chromatic"

/* const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json"; */

//const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"

const geoUrl = "/world_data_plus_disease2.json"

const rounded = num => {
    if (num > 1000000000) {
        return Math.round(num / 100000000) / 10 + "Bn";
    } else if (num > 1000000) {
        return Math.round(num / 100000) / 10 + "M";
    } else {
        return Math.round(num / 100) / 10 + "K";
    }
};

const MapChart = ( { setTooltipContent, diseaseChoice, sexChoice,yearChoice,measureChoice,metricChoice, setCountry, rateMax, setCountryData } ) => {
  
  return (
    <>
      <ComposableMap data-tip="">
        {/* <Sphere stroke="black" strokeWidth={0.5} /> */}
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => {
              //const cur = data.find(s => s.id === geo.id);
              let fillColor;
              if(Number.isInteger(geo.properties.DISEASE[diseaseChoice][yearChoice][sexChoice][measureChoice][metricChoice])){
                    fillColor="rgb(69, 66, 94)"
              }else if(geo.properties.DISEASE[diseaseChoice][yearChoice][sexChoice][measureChoice][metricChoice]!=-1){
                if(String(rateMax[diseaseChoice][measureChoice][metricChoice])!=="0"){
                    fillColor=interpolatePlasma(geo.properties.DISEASE[diseaseChoice][yearChoice][sexChoice][measureChoice][metricChoice]/rateMax[diseaseChoice][measureChoice][metricChoice])
                }else{
                    fillColor="rgb(69, 66, 94)"
                }
              }else{
                    fillColor="rgb(69, 66, 94)"
              }
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={fillColor}

                  onMouseEnter={() => {
                    const { NAME, POP_EST, DISEASE, GDP_MD_EST } = geo.properties;
                    let rateVal;
                    if(Number.isInteger(DISEASE[diseaseChoice][yearChoice][sexChoice][measureChoice][metricChoice])){
                        rateVal="No Data"
                    }else if(DISEASE[diseaseChoice][yearChoice][sexChoice][measureChoice][metricChoice]!=-1){
                        if(String(rateMax[diseaseChoice][measureChoice][metricChoice])!=="0"){
                            rateVal=""+Math.round(DISEASE[diseaseChoice][yearChoice][sexChoice][measureChoice][metricChoice]*100)/100 +" years"
                        }else{
                            rateVal="No Data"
                        }
                    }else{
                        rateVal="No Data"
                    }
                    setTooltipContent(`<b>${NAME}</b><br />
                    Pop. ${ rounded(POP_EST) }<br />
                    GDP per Cap. ${ rounded(GDP_MD_EST/POP_EST*1000000) }<br />
                    <hr>
                    <i>${ diseaseChoice }</i><br />
                    DALYs: ${ rateVal }<br />
                    <hr>
                    <small>Click country to show a plot of the 10 worst<br>causes for ${NAME}</small>`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  onClick={() => {
                    const { NAME, POP_EST, DISEASE } = geo.properties;
                    setCountry(NAME)
                    setCountryData(DISEASE)
                  }}
                  style={{
                    default: {
                      //fill: "#D6D6DA",
                      outline: "none"
                    },
                    hover: {
                      //fill: "#F53",
                      outline: "none",
                      stroke: "black",
                      
                    },
                    pressed: {
                      //fill: "#E42",
                      outline: "none"
                    }
                  }}
                />
              );
            })
          }
        </Geographies>
        
      </ComposableMap>
    </>
  );
};

export default memo(MapChart);
