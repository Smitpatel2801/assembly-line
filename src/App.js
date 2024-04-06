import {Fragment, useCallback, useEffect, useState} from "react";
import "./App.css";

import {Card, CardContent, CardContentInfo, CardContentTitle, CardHeaderRed, CardHeading,} from "./App.styles";
import {calculateRemainingTime} from "./utils";


const App = () => {

    const [assemblyLinesState, setAssemblyLineState] = useState([]);

    const fetchData = useCallback(async () => {
        try {
            const response = await fetch('http://localhost:8000/assembly_line');
            if (!response.ok) {
                console.log('Network response was not ok');
            }
            const json = await response.json();
            // console.log(json)
            const obj = json.map(item => {
                return {
                    "name": item?.name,
                    status: item?.occupied ? "In-Process" : "Open",
                    currentCandy: item?.candy,
                    expiryTimeStamp: item?.ending_timestamp,
                }
            })
            setAssemblyLineState(obj)
            // setAssemblyLineState(obj.map(o => {
            //     return {
            //         name: o.name,
            //         status: o.occupied ? "In-Process" : "Open",
            //         currentCandy: o.candy,
            //         expiryTimeStamp: o.ending_timestamp,
            //     }
            // }))
        } catch (error) {
            console.log(error);
        }
    }, [])

    useEffect(() => {
        setInterval(() => {
            fetchData()
        }, 1000)
    }, [])

    const beautifyTime = (expiryTimeStamp) => {
        const {hours, minutes, timeDifference} =
            calculateRemainingTime(expiryTimeStamp);

        if (timeDifference < 0) return "0m";

        return `${hours}h ${minutes}m `;
    };

    return (
        <Fragment>
            {assemblyLinesState.map((assLine, i) => (
                <Card key={i} style={{marginTop: "10px"}}>
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
