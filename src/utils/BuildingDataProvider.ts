import { useState, useEffect } from 'react';
import axios from 'axios';
import data_json from "../data/building.json"
import { json } from 'body-parser';

interface Floor {
  name: string;
  soldiers: number;
  purpose: string;
  description: string;
  activity:string
}
export enum floors{
  "First Floor",
  "Second Floor",
 " Third Floor",
 "Fourth Floor",
  "Fifth Floor"
}

const useBuildingData = () => {
  const [buildingData, setBuildingData] = useState<Floor[]>([]);

  useEffect(()=>{
    async function loadData(){
    try {
      
      console.log(data_json);
      if(data_json.length > 0){
        const myJSON = JSON.stringify(data_json);
        const myObj: Floor[] = JSON.parse(myJSON);
        if(myObj.length > 0){
          setBuildingData(myObj)
        }
        
      }
      
    
  }
      catch(err){
        console.log(err)
      }}
      loadData()
  },[])


  const getFloorByIndex = (floorIndex:number): Floor |undefined =>
  {

    
    let result = buildingData?.find(floor=> floor.name === floors[floorIndex])
    return result
  }
  const getListOfActivities = ():string[]=>{
    let result: string[] = buildingData.map(({ activity }) => activity)
    return result
  }
  return {
    buildingData,
    getFloorByIndex,
    getListOfActivities
  };
};

export default useBuildingData;
