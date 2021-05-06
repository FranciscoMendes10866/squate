import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { ResponsiveLine } from "@nivo/line";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 400,
  },
}));

const data = [
  {
    id: "japan",
    color: "hsl(221, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 255,
      },
      {
        x: "helicopter",
        y: 70,
      },
      {
        x: "boat",
        y: 97,
      },
      {
        x: "train",
        y: 201,
      },
      {
        x: "subway",
        y: 213,
      },
      {
        x: "bus",
        y: 9,
      },
      {
        x: "car",
        y: 35,
      },
      {
        x: "moto",
        y: 296,
      },
      {
        x: "bicycle",
        y: 227,
      },
      {
        x: "horse",
        y: 266,
      },
      {
        x: "skateboard",
        y: 105,
      },
      {
        x: "others",
        y: 230,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(266, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 287,
      },
      {
        x: "helicopter",
        y: 216,
      },
      {
        x: "boat",
        y: 215,
      },
      {
        x: "train",
        y: 174,
      },
      {
        x: "subway",
        y: 54,
      },
      {
        x: "bus",
        y: 38,
      },
      {
        x: "car",
        y: 215,
      },
      {
        x: "moto",
        y: 299,
      },
      {
        x: "bicycle",
        y: 278,
      },
      {
        x: "horse",
        y: 23,
      },
      {
        x: "skateboard",
        y: 191,
      },
      {
        x: "others",
        y: 84,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(246, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 166,
      },
      {
        x: "helicopter",
        y: 271,
      },
      {
        x: "boat",
        y: 119,
      },
      {
        x: "train",
        y: 107,
      },
      {
        x: "subway",
        y: 123,
      },
      {
        x: "bus",
        y: 254,
      },
      {
        x: "car",
        y: 237,
      },
      {
        x: "moto",
        y: 157,
      },
      {
        x: "bicycle",
        y: 38,
      },
      {
        x: "horse",
        y: 82,
      },
      {
        x: "skateboard",
        y: 110,
      },
      {
        x: "others",
        y: 287,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(266, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 131,
      },
      {
        x: "helicopter",
        y: 158,
      },
      {
        x: "boat",
        y: 260,
      },
      {
        x: "train",
        y: 4,
      },
      {
        x: "subway",
        y: 131,
      },
      {
        x: "bus",
        y: 13,
      },
      {
        x: "car",
        y: 257,
      },
      {
        x: "moto",
        y: 39,
      },
      {
        x: "bicycle",
        y: 45,
      },
      {
        x: "horse",
        y: 11,
      },
      {
        x: "skateboard",
        y: 196,
      },
      {
        x: "others",
        y: 182,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(142, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 266,
      },
      {
        x: "helicopter",
        y: 67,
      },
      {
        x: "boat",
        y: 47,
      },
      {
        x: "train",
        y: 179,
      },
      {
        x: "subway",
        y: 151,
      },
      {
        x: "bus",
        y: 204,
      },
      {
        x: "car",
        y: 51,
      },
      {
        x: "moto",
        y: 295,
      },
      {
        x: "bicycle",
        y: 114,
      },
      {
        x: "horse",
        y: 135,
      },
      {
        x: "skateboard",
        y: 128,
      },
      {
        x: "others",
        y: 5,
      },
    ],
  },
];

const TanitaGraphKg = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
      <div className={fixedHeightPaper}>
        <ResponsiveLine
          data={data}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false,
          }}
          yFormat=" >-.2f"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: "bottom",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "transportation",
            legendOffset: 36,
            legendPosition: "middle",
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "count",
            legendOffset: -40,
            legendPosition: "middle",
          }}
          pointSize={10}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: "left-to-right",
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: "circle",
              symbolBorderColor: "rgba(0, 0, 0, .5)",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemBackground: "rgba(0, 0, 0, .03)",
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </div>
  );
};

export default TanitaGraphKg;
