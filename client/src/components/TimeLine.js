import React from "react";
import EventsTimeline from "react-events-timeline";
import "react-events-timeline/dist/main.css";

const TimeLine = ({ elements }) => {
  const data = elements
    .filter((element)=> element.yearDiscovered !== 'Ancient' )
    .sort((a, b) => a.yearDiscovered - b.yearDiscovered)
    .map((element) => {
      return {
        date: element.yearDiscovered,
        title: `${element.atomicNumber}. ${element.name}`,
        label: "",
        key: element.symbol,
        content: (
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3214/3214053.png"
              style={{ width: "50px", height: "auto" }}
            />
            <br></br>
            Description
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
