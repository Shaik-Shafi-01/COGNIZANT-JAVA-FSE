import './App.css';
import office from './office.jpg';

function App() {

  const element = "Office Space";

  const officeSpaces = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai"
    },
    {
      Name: "Regus",
      Rent: 70000,
      Address: "Bangalore"
    },
    {
      Name: "WeWork",
      Rent: 55000,
      Address: "Hyderabad"
    }
  ];

  return (
    <div className="App">

      <h1>{element}, at Affordable Range</h1>

      {
        officeSpaces.map((item, index) => {

          let colorClass = item.Rent <= 60000 ? "textRed" : "textGreen";

          return (

            <div key={index} className="card">

              <img
                src={office}
                width="25%"
                height="25%"
                alt="Office Space"
              />

              <h2>Name: {item.Name}</h2>

              <h3 className={colorClass}>
                Rent: Rs. {item.Rent}
              </h3>

              <h3>
                Address: {item.Address}
              </h3>

            </div>

          );

        })
      }

    </div>
  );
}

export default App;