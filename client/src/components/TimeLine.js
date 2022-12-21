import React from "react";
import EventsTimeline from "react-events-timeline";
import "react-events-timeline/dist/main.css";
import { Link } from "react-router-dom";

const TimeLine = ({ elements }) => {
    console.log(elements)
  const data = elements
    .filter((element)=> element.yearDiscovered !== 'Ancient' )
    .sort((a, b) => a.yearDiscovered - b.yearDiscovered)
    .map((element) => {
      return {
        date: element.yearDiscovered,
        title: <Link to={`/element/${element.name}`} className="atomic-number">{element.atomicNumber}. {element.name}</Link>,
        label: '',
        content: (
          <div>
            {element.description}
          </div>
        ),
      };
    });

  const icon = <i className="fa fa-question-circle" />;

  return (
    <div className="timeline-wrapper">
      <EventsTimeline
        title="TIMELINE OF DICOVERY OF THE ELEMENTS..."
        icon={icon}
        color="blue"
        data={data}
      />
    </div>
  );
};

export default TimeLine;
