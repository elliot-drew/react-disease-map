import React from "react";

import { interpolatePlasma } from "d3-scale-chromatic"

const ColorBar = ( { diseaseMax }) =>  {
    return(
        <>
        <div style={{width:"95%", paddingLeft:"2.5%", paddingRight:"2.5%", paddingBottom:"0.8%"}}>
            {Array.from(Array(101).keys()).map((n, i) => 
                <div key={i} style={{
                    backgroundColor:interpolatePlasma(n/100), 
                    color:interpolatePlasma(n/100), 
                    width:(100/101)+"%",
                    fontSize:"1em",
                    display:"inline-block"
                }}>.</div>
            )}
            
        </div>
        <table  className="rangeTableLabel" 
                style={{
                    paddingLeft:"2.5%", 
                    paddingRight:"2.5%",
                    paddingBottom:"0.9%",
                    width:"100%",
                }}
        >
            <tbody>
            <tr>
                <td key={0} style={{width:(100/3)+"%",fontSize:"1em",textAlign:"left",}}>0</td>
                <td key={1} style={{width:(100/3)+"%",fontSize:"1em",textAlign:"center",}}>DALY (years)</td>
                <td key={2} style={{width:(100/3)+"%",fontSize:"1em",textAlign:"right",}}>{Math.round(diseaseMax)}</td>
            </tr>
            </tbody>
        </table>
        </>
    );
}

export default ColorBar;