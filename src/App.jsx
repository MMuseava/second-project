import './App.css';

const App = () => {
  
  const boysName = ["Dastan", "Azim", "Tima"];
  const girlNames = ["Meka", "Aida", "Aigerim", "Erkinai", "Janara"]
  
  const showBoysNames = () => {
    return boysName.map((el,index) => <p className='boy' key={index}> {(el)}</p>)
  };

  const showGirl = () => {
    return girlNames.map((el, index) => <p className='girl' key={index}> { (el)}</p> )
  }

  return (
    <div className="App">
      <div className='boys'>
        {
        showBoysNames()}
      </div>
      <div className='girls'>
        {showGirl()}
      </div>
    </div>
  );
}

export default App;
