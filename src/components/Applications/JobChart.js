import React from "react";
import * as d3 from "d3";

const Arc = ({ data, index, createArc, colors, format }) => (
    console.log(data),
  <g key={index} className="arc">
    <path className="arc" d={createArc(data)} fill={colors(index)} />
    <text
      transform={"translate(${createArc.centroid(data)})"}
      textAnchor="middle"
      alignmentBaseline="middle"
      fill="white"
      fontSize="10"
    >
      {format(data.value)}
    </text>
  </g>
);

const JobPieChart = (props) => {
    console.log(Math.PI)
  //props.data.map((data, index) => console.log(data));
  const CreatePie = d3
    .pie()
    .value(d => d.value)
    .sort(null);
  const createArc = d3.arc().innerRadius(props.inner).outerRadius(props.outer);
  const colors = d3.scaleOrdinal(d3.schemeCategory10);
  const format = d3.format(".2f");
  const data = CreatePie(props.data);

  return (
    <svg width={props.width} height={props.height}>
      <g transform={"translate(${props.outer} ${props.outer})"}>
        {data.map((d, i) => (
          <Arc
            key={i}
            data={d}
            index={i}
            createArc={createArc}
            colors={colors}
            format={format}
          />
        ))}
      </g>
    </svg>
  );
};
export default JobPieChart;
