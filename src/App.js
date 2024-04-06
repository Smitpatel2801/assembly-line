import moment from "moment";
import { Fragment } from 'react';
import './App.css';

import { Card, CardContent, CardContentInfo, CardContentTitle, CardHeaderRed,CardHeading, CardContentValueRed, CardContentValueGreen, CardHeaderGreen, CardContentNormal } from './App.styles';


const calculateRemainingTime = (timestamp) => {
  const currentTime = Date.now(); 
  const timeDifference = (timestamp - currentTime)*3;
  const duration = moment.duration(timeDifference);
  const hours = duration.hours();
  const minutes = duration.minutes();
  return { hours, minutes, timeDifference };
};
const App = () => {
  const assemblyData = {
    name : "A1",
    status : "IN-PROGRESS",
    occupied : true,
    currentCandy: "Strawberry candy",
    timeLeft : new Date().getTime() + 1200000,
  }
  const timeRemaining = calculateRemainingTime(assemblyData.timeLeft);
  return(
    <Fragment>
    <Card>
      {
        assemblyData.occupied == true ? <CardHeaderRed>
        <CardHeading>

        Assembly Line : A1
        </CardHeading>
      </CardHeaderRed> :
      <CardHeaderGreen>
      <CardHeading>

      Assembly Line : A1
      </CardHeading>
    </CardHeaderGreen>
      }
      <CardContent>
        <CardContentInfo>
          <CardContentTitle>
          Status :
          </CardContentTitle>
           <CardContentValueRed>
           {assemblyData.status}
           </CardContentValueRed>
        </CardContentInfo>
        <CardContentInfo>
          <CardContentTitle>
          Current Candy :
          </CardContentTitle>
           <CardContentNormal>
           {assemblyData.currentCandy}
           </CardContentNormal>
        </CardContentInfo>
        <CardContentInfo>
          <CardContentTitle>
          Time Left :
          </CardContentTitle>
           <CardContentValueGreen>
           {`${timeRemaining.hours}h${timeRemaining.minutes}mins`}
           </CardContentValueGreen>
        </CardContentInfo>
      </CardContent>
    </Card>

    <Card>
      {
        assemblyData.occupied == true ? <CardHeaderRed>
        <CardHeading>

        Assembly Line : A1
        </CardHeading>
      </CardHeaderRed> :
      <CardHeaderGreen>
      <CardHeading>

      Assembly Line : A2
      </CardHeading>
    </CardHeaderGreen>
      }
      <CardContent>
        <CardContentInfo>
          <CardContentTitle>
          Status :
          </CardContentTitle>
           <CardContentValueRed>
           {assemblyData.status}
           </CardContentValueRed>
        </CardContentInfo>
        <CardContentInfo>
          <CardContentTitle>
          Current Candy :
          </CardContentTitle>
           <CardContentNormal>
           {assemblyData.currentCandy}
           </CardContentNormal>
        </CardContentInfo>
        <CardContentInfo>
          <CardContentTitle>
          Time Left :
          </CardContentTitle>
           <CardContentValueGreen>
           {`${timeRemaining.hours}h${timeRemaining.minutes}mins`}
           </CardContentValueGreen>
        </CardContentInfo>
      </CardContent>
    </Card>
    <Card>
      {
        assemblyData.occupied == true ? <CardHeaderRed>
        <CardHeading>

        Assembly Line : A1
        </CardHeading>
      </CardHeaderRed> :
      <CardHeaderGreen>
      <CardHeading>

      Assembly Line : A3
      </CardHeading>
    </CardHeaderGreen>
      }
      <CardContent>
        <CardContentInfo>
          <CardContentTitle>
          Status :
          </CardContentTitle>
           <CardContentValueRed>
           {assemblyData.status}
           </CardContentValueRed>
        </CardContentInfo>
        <CardContentInfo>
          <CardContentTitle>
          Current Candy :
          </CardContentTitle>
           <CardContentNormal>
           {assemblyData.currentCandy}
           </CardContentNormal>
        </CardContentInfo>
        <CardContentInfo>
          <CardContentTitle>
          Time Left :
          </CardContentTitle>
           <CardContentValueGreen>
           {`${timeRemaining.hours}h${timeRemaining.minutes}mins`}
           </CardContentValueGreen>
        </CardContentInfo>
      </CardContent>
    </Card>
</Fragment>
  )
}

export default App;

// const options = {
//   username: 'Team16',
//   password: '{Team16@uwindsor}',
//   clientId: `mqttjs_${Math.random().toString(16).substr(2, 8)}`,
// };

// // connect to your cluster, insert your host name and port
// const client = mqtt.connect('wss://55d2206619b943e9bf678fb0a23fc9ff.s1.eu.hivemq.cloud:8883', options);

// // prints a received message
// client.on('message', function(topic, message) {
//   console.log(String.fromCharCode.apply(null, message)); // need to convert the byte array to string
// });

// // reassurance that the connection worked
// client.on('connect', () => {
//   console.log('Connected!');
// });

// // prints an error message
// client.on('error', (error) => {
//   console.log('Error:', error);
// });

// // subscribe and publish to the same topic
// client.subscribe('messages');
// client.publish('messages', 'Hello, this message was received from the app!');

// const test = () =>{
//     client.subscribe('messages');
//     client.publish('messages', 'Hello, this message was received from the app by clicking!');
// }
//   const options = {
//     host: '55d2206619b943e9bf678fb0a23fc9ff.s1.eu.hivemq.cloud',
//     port: 8883,
//     protocol: 'wss',
//     username: 'Team16',
//     password: '{Team16@uwindsor}'
// }
// try {
//   let client = mqtt.connect(options);
//   console.log(client);
// } catch (error) {
//   console.log(error)
// }

// useEffect(() => {
//   client = mqtt.connect(options);
//   // setup the callbacks
//   client.on('connect', function () {
//     console.log('Connected');
//   });

//   client.on('error', function (error) {
//     console.log(error.message);
//   });
// }, [])

// const [client, setClient] = useState(null);
// const mqttConnect = (host, mqttOption) => {
//   setConnectStatus('Connecting');
//   setClient(mqtt.connect(host, mqttOption));
// };
// useEffect(() => {
//   if (client) {
//     console.log(client)
//     client.on('connect', () => {
//       setConnectStatus('Connected');
//     });
//     client.on('error', (err) => {
//       console.error('Connection error: ', err);
//       client.end();
//     });
//     client.on('reconnect', () => {
//       setConnectStatus('Reconnecting');
//     });
//     client.on('message', (topic, message) => {
//       const payload = { topic, message: message.toString() };
//       setPayload(payload);
//     });
//   }
// }, [client]);


// const [msg, setMsg] = useState({ 
//   tpic : '',
//   msg : '',
// });

// useEffect(() => {
//   const options = {
//     protocol: "wss",
//     username: "Team16",
//     password: "{Team16@uwindsor}",
//   };

//   const client = mqtt.connect('wss://55d2206619b943e9bf678fb0a23fc9ff.s1.eu.hivemq.cloud:8884/mqtt', options);
//   // const client = mqtt.connect(options);
//   client.on('connect', function () {
//       console.log('Connected');
//   });
//   client.on('error', function (error) {
//       console.log("ERROR", error);
//   });
//   client.subscribe('temperature');
//   // client.publish('temperature', 'Current time is: ' + new Date());
//   client.on('message', function(topic, message) {
//     setMsg({tpic : topic, msg : message});
//   });
  
// }, []);
// console.log(msg)