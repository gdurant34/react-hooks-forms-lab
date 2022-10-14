// import React, { useState } from "react";
// import ItemForm from "./ItemForm";
// import Filter from "./Filter";
// import Item from "./Item";

// function ShoppingList({ items }) {
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   function handleCategoryChange(event) {
//     setSelectedCategory(event.target.value);
//   }

//   const itemsToDisplay = items.filter((item) => {
//     if (selectedCategory === "All") return true;

//     return item.category === selectedCategory;
//   });

//   return (
//     <div className="ShoppingList">
//       <ItemForm />
//       <Filter onCategoryChange={handleCategoryChange} />
//       <ul className="Items">
//         {itemsToDisplay.map((item) => (
//           <Item key={item.id} name={item.name} category={item.category} />
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ShoppingList;

import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchInput, setSearchInput] = useState('');
  const [itemsList, setItemsList] = useState(items);

  

  

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = itemsList.filter((itemList) => {
    if (selectedCategory === "All") return true;

    return itemList.category === selectedCategory;
  });

  function handleSearchChange(event) {
    setSearchInput(event.target.value);
  }

  const searchResults = itemsToDisplay.filter((displayItem) => {
    if(searchInput === "") {
      return displayItem;
    } else if (displayItem.name.toLowerCase().includes(searchInput.toLowerCase())) {    
      return displayItem.name;
    } else {
      return null;
    }
  })

  function onItemFormSubmit(newItem){
    setItemsList([...itemsList, newItem])
  }



  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter 
        onCategoryChange={handleCategoryChange} 
        search={searchInput}
        onSearchChange={handleSearchChange}
        />
      <ul className="Items">
        {searchResults.map((itemsList) => (
          <Item key={itemsList.id} name={itemsList.name} category={itemsList.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
