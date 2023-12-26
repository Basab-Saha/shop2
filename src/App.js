import { FilterBar } from "./Components/FilterBar";
import { Products } from "./Components/Products";
import { SearchBar } from "./Components/SearchBar";


function App() {
  return (
    <div className="flex-col">

      <SearchBar/>
      
      <div className="flex gap-5 app">
        <FilterBar/>
        <Products/>
      </div>


    </div>
  );
}

export default App;
