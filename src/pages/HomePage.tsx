import HeroLayout1 from "../ui-components/HeroLayout1";
import {useStorageGetPublic} from "../services/imageService.tsx";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'


export default function Home() {
    const localizer = momentLocalizer(moment)

const MyCalendar = (props) => (
  <div width="400" height="600">
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
)
}
