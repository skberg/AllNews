
import React from 'react';
import { useEffect,useState } from 'react';
import './App.css';


function App() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState();

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://storage.googleapis.com/aller-structure-task/test_data.json")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          console.log(result);
         
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {

 console.log(items)


  }
  return (
    <>
             
     
              <div>
        {items.map((item, i )=> (
          <ul key={i}>
           
            <li>{item[i].columns[i].title} 
            <br></br>
            {item[i].columns[i].type}</li>
          </ul>
        ))}
      </div>



    </>
  );
}

export default App;
