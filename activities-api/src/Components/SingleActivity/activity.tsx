import { observer } from "mobx-react-lite";
import UserIcon from "../../Assets/Images/user.svg";
import { useStore } from "../../Store/store";
import './style.css'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export type Activity = {
  id: string,
  description: string,
  title: string,
  venue: string,
  date: string

}
type Props = {
  activity: Activity
}


const SingleActivity = observer(({ activity }: Props) => {
  let { id, title, date, description } = activity;
  const { activityStore } = useStore();
  const Navigate = useNavigate();

  return (

    <div key={id} className="activity-container">

      <div className="actvityHeader">
        <div className="activityImageContainer">
          <img src={UserIcon} />
        </div>
        <div>
          <h2 className="title">{title}</h2>
          <p>Posted by me</p>

        </div>
      </div>

      <div className="activityDetails">
        <p className="date-added">{date}</p>

        <p className="description">{description}</p>
      </div>

      <div className="actvityDescription">
        <button onClick={() => Navigate(`/selectedActivity/${id}`)} className="read-more-button">Read More</button>
        <button className="deleteButton" onClick={() => activityStore.deleteActivity(id)}>
          Remove </button>
      </div>
    </div>



  )
})

export default SingleActivity;
