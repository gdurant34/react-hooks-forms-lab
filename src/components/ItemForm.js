// import React from "react";
// import { v4 as uuid } from "uuid";

// function ItemForm(props) {
//   return (
//     <form className="NewItem">
//       <label>
//         Name:
//         <input type="text" name="name" />
//       </label>

//       <label>
//         Category:
//         <select name="category">
//           <option value="Produce">Produce</option>
//           <option value="Dairy">Dairy</option>
//           <option value="Dessert">Dessert</option>
//         </select>
//       </label>

//       <button type="submit">Add to List</button>
//     </form>
//   );
// }

// export default ItemForm;


import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState('');
  const [itemCategory, setItemCategory] = useState('Produce');


  function handleItemNameChange(e) {
    setItemName(e.target.value)
  }

  function handleItemCategoryChange(e) {
    setItemCategory(e.target.value)
  }

  function handleItemSubmit(e) {
    e.preventDefault();

    const newItem = {
      id: uuid(),
      name: itemName,
      category:itemCategory
    };
    onItemFormSubmit(newItem);
  }


  return (
    <form onSubmit={handleItemSubmit} className="NewItem">
      <label>
        Name:
        <input onChange={handleItemNameChange} type="text" name="name" />
      </label>

      <label>
        Category:
        <select onChange={handleItemCategoryChange} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
