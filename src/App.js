import { useState } from 'react';
import './App.css';
import HomePage from './components/HomePage';


function App() {
  //Since we want to toggle a text - input, we will need a king of boolean variable on our state to store this
 const [ itemCurrentlyOnSale, setItemCurrentlyOnSale] = useState ('brush');

 const [ editable, setEditable] = useState(true);


const toggleEditSaleItem = event => setEditable(!editable);

//Everytime the input text changes, we want the corresponding value on our state to update as well

const handleItemCurrentlyOnSaleChange = (event) =>{
  const itemOnSale = event.target.value;
  setItemCurrentlyOnSale(itemOnSale);
}


 //we just set up a flag on the state of our component, deciding when to display our input field can be accomplished via if-statements
//  or ternay's.
//  we will hide our text input when the editable is true
  return (
    <div className="App">
      <HomePage 
      saleItem = {itemCurrentlyOnSale}
      editable = {editable}
      toggleEditSaleItem = {toggleEditSaleItem}
      handleItemCurrentlyOnSaleChange = {handleItemCurrentlyOnSaleChange}
      />
    </div>
  );
}

export default App;
