import React, {memo} from "react";
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer} from "recharts"
import './App.css';

const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        /* next line works with strings and numbers, 
         * and you may want to customize it to your needs
         */
        var result = (parseFloat(a[property]) < parseFloat(b[property])) ? -1 : (parseFloat(a[property]) > parseFloat(b[property])) ? 1 : 0;
        return result * sortOrder;
    }
}

const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
        
      return (
        <div className="custom-tooltip">
          
            <p className="label"><b>{`${payload[0].payload.nameLong}`}</b></p>
            <p>DALYs: {`${Math.round(payload[0].value*100)/100}`}</p>
            <small>Click to view <b>{`${payload[0].payload.nameLong}`}</b> data on world map</small>
        </div>
      );
    }
  
    return null;
  };


const DiseaseBarChart = ({ country, countryData,sexChoice,yearChoice,measureChoice,metricChoice, setDisease }) => {
    const countryChoice=country
    var top_10
    if(countryChoice!=""){
        var ranked=[]
        Object.keys(countryData).forEach(key => {
            if(key.length>23){
                ranked.push({nameLong: key, name: key.slice(0,20)+"...", value: parseFloat(countryData[key][yearChoice][sexChoice][measureChoice][metricChoice])})
            }else{
                ranked.push({nameLong: key, name: key, value: parseFloat(countryData[key][yearChoice][sexChoice][measureChoice][metricChoice])})
            }
            
        })

        ranked.sort(dynamicSort("value")).reverse()

        top_10=ranked.slice(1,11)
    }else{
        top_10=[]
    }
    
    if(top_10.length>0){
        return (
            <div style={{width:"100%",height:"100%"}}>
            <div style={{width:"95%",height:"5%", paddingLeft:"5%", textAlign:"center"}}>
                <h4>{countryChoice} - Top 10 Causes</h4>
            </div>
            <div style={{width:"100%",height:"90%"}}>
            <ResponsiveContainer>
            
                <BarChart width={600} height={300} data={top_10}
                        margin={{top: 5, right: 30, left: 20, bottom: 5}} layout={"vertical"}>
                
                <XAxis type="number" domain={[0,Math.ceil(top_10[0])]} hide/>
                <YAxis type="category" dataKey="name" tick={{fontSize:"0.7em"}}/>
                <Tooltip content={<CustomTooltip/>}/>
                
            <Bar dataKey="value" fill="#8884d8" 
            onClick={(data, index) => {setDisease(data.nameLong)}}
            />
            
            </BarChart>
          </ResponsiveContainer>
          </div>
          </div>
        );
    }else{
        return(
            <div style={{textAlign:"center", paddingTop:"60%", paddingLeft:"5%", paddingRight:"5%"}}>
                <h4>Click a country on the map to see a plot of its top 10 ranked causes</h4>
            </div>
        );
    }
  	
  
}

export default memo(DiseaseBarChart);