import snap7 from "node-snap7"

const connect = async () => {
  const client = new snap7.S7Client();
  const online = await client.ConnectTo('192.168.20.55', 0, 1)
  console.log(online)
  let data
  data = await client.MBRead(0, 30)
  console.log(data)
  data = await client.DBRead(505, 0, 10)
  console.log(data)
  await client.Disconnect()
}

export default connect


// var s7client = new snap7.S7Client();

// function connect() {
// s7client.ConnectTo('192.168.20.55', 0, 1, function(err) {
//     if(err)
//         return console.log(' >> Connection failed. Code #' + err + ' - ' + s7client.ErrorText(err));

//     // Read the first byte from PLC process outputs...
//     s7client.ABRead(0, 1, function(err, res) {
//         if(err)
//             return console.log(' >> ABRead failed. Code #' + err + ' - ' + s7client.ErrorText(err));

//         // ... and write it to stdout
//         console.log(res)
//         return s7client

//     });
// });
// }
