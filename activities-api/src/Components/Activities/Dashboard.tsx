import { useState, useEffect } from "react";
import { Activity } from '../../App';
import SingleActivity from "../SingleActivity/activity";
import "./style.css";
import Details from "../DetailsView/Details";
import EditForm from "../Edit-Forms/Edit-Forms";
type prop = {
    activities: Activity[],
    createOrEditActivityHandlar: (activity:Activity)=>void,

    DeleteActivity: (activityId:string)=> void
}



const DashBoard = (
    { activities, createOrEditActivityHandlar,DeleteActivity }
    : prop) => {
    const [filteredData, setFilteredData] = useState(activities);
    const [userInput, setUserInput] = useState("");
    const [selectedEvent, setSelectedEvent] = useState<Activity | undefined>(undefined);

    const searchHandlar = (event: any) => {
        const value = event.target.value;
        setUserInput(value);
    }

    const CancelSelectedEvent = () => {
        setSelectedEvent(undefined);
    }
  
    const handleSelectedActivity = (id: string) => {
      const getEvent = filteredData.find((event) => event.id == id);
      setSelectedEvent(getEvent);
    }

    return (
        <div>
          
            {
            activities.map((item) => (
                <div className="All-activites" key={item.id}>
                    <SingleActivity 
                    activity={item} 
                    selectEvent={handleSelectedActivity}
                    DeleteActivity={DeleteActivity}
                    />     
                    </div>

            ))
            }

            {
                selectedEvent && 
                <Details 
                activities={selectedEvent} 
                CancelSelectedEvent={CancelSelectedEvent}
                createOrEditActivityHandlar={createOrEditActivityHandlar}
                />
            }

        </div>
    )
}


export default DashBoard;
