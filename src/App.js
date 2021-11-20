import logo from './logo.svg';
import './App.css';
import "./key";
import Axios from 'axios';
import {useState} from "react";
import RecipeTile from './RecipeTile';

function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [healthLabels,sethealthLabels] = useState("vegan")

  const YOUR_APP_ID = "e72fd858";
  const YOUR_APP_KEY = "f9aa38c86f74bda64c7a156bb8d1789a";

  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabels}`;
 
 async function getRecipes(){
   var result = await Axios.get(url);
   setrecipes(result.data.hits)
   console.log(result.data);
 }

 const onSubmit = (e) =>{
  e.preventDefault();
  getRecipes();
 }
 
  return (
    <div className="app">
      <h1 onClick={getRecipes}>Food Recipe Plaza🍔</h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input 
        type="text" 
        className="app__input"
        placeholder="enter ingridient"
        value={query} 
        onChange={(e) => setquery(e.target.value)} 
        />
        <input className="app__submit" type="submit" value="Search" />

        {/* In order to include dropdown */}
        <select className="app_healthLabels">
          <option value="vegan" onClick={() => sethealthLabels("vegan")}>
            vegan
          </option>
          <option value="vegetarian"onClick={() => sethealthLabels("vegetarian")}>
            vegetarian
          </option>
          <option value="paleo"onClick={() => sethealthLabels("paleo")}>
            paleo
          </option>
          <option value="dairy-free"onClick={() => sethealthLabels("dairy-free")}>
           diary-free
          </option>
          <option value="gluten-free"onClick={() => sethealthLabels("gluten-free")}>
           gluten-free
          </option>
          <option value="wheat-free"onClick={() => sethealthLabels("wheat-free")}>
           wheat-free
          </option>
          <option value="low-sugar"onClick={() => sethealthLabels("low-sugar")}>
           low-sugar
          </option>
          <option value="egg-free"onClick={() => sethealthLabels("egg-free")}>
           egg-free
          </option>
          <option value="peanut-free"onClick={() => sethealthLabels("peanut-free")}>
           peanut-free
          </option>
          <option value="tree-nut-free"onClick={() => sethealthLabels("tree-nut-free")}>
           tree-nut-free
          </option>
          <option value="soy-free"onClick={() => sethealthLabels("soy-free")}>
           soy-free
          </option>
          <option value="fish-free"onClick={() => sethealthLabels("fish-free")}>
           fish-free
          </option>
          <option value="shellfish-free"onClick={() => sethealthLabels("shellfish-free")}>
           shellfish-free
          </option>
        </select>
      </form>
      <div className="app__recipes">
      {recipes.map((recipe) => {
         return <RecipeTile  recipe={recipe}/> ;

      })}
      </div>
    </div>
  );
}

export default App;