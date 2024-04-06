import { Fragment, useState } from "react";
import "./App.css";

import {
  Card,
  CardContent,
  CardContentInfo,
  CardContentTitle,
  CardHeaderRed,
  CardHeading,
  CardContentValueRed,
  CardContentValueGreen,
  CardHeaderGreen,
  CardContentNormal,
} from "./App.styles";
import { calculateRemainingTime } from "./utils";

const App = () => {
  const [assemblyLinesState, setAssemblyLineState] = useState([
    {
      name: "A1",
      status: "PENDING",
      currentCandy: null,
      expiryTimeStamp: null,
    },
    {
      name: "A2",
      status: "PENDING",
      currentCandy: null,
      expiryTimeStamp: null,
    },
    {
      name: "A3",
      status: "PENDING",
      currentCandy: null,
      expiryTimeStamp: null,
    },
  ]);

  const beautifyTime = (expiryTimeStamp) => {
    const { hours, minutes, timeDifference } =
      calculateRemainingTime(expiryTimeStamp);

    if (timeDifference < 0) return "0m";

    return `${hours}h ${minutes}m `;
  };

  return (
    <Fragment>
      <Socket />
      {assemblyLinesState.map((assLine, i) => (
        <Card key={i} style={{ marginTop: "10px" }}>
          <CardHeaderRed>
            <CardHeading>Assembly Line: {assLine.name}</CardHeading>
          </CardHeaderRed>
          <CardContent>
            <CardContentInfo>
              <CardContentTitle>Status: {assLine.status}</CardContentTitle>
            </CardContentInfo>
            <CardContentInfo>
              <CardContentTitle>
                Current Candy: {assLine.currentCandy}
              </CardContentTitle>
            </CardContentInfo>
            <CardContentInfo>
              <CardContentTitle>
                Time Left: {beautifyTime(assLine.expiryTimeStamp)}
              </CardContentTitle>
            </CardContentInfo>
          </CardContent>
        </Card>
      ))}
    </Fragment>
  );
};

export default App;
