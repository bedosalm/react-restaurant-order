import React from 'react';

function Mealproducer({value}) {
    const {newItemName,chooseCategory,addPrice,handelnewMeal,handelSubmitMeal,errorName,
        errorCategory,errorprice,allCategories} = value
  return (
    <div className="container">
    <form onSubmit={handelSubmitMeal}>
        <div>
                <label className="form-label mr-3">category</label>
                <select onChange={handelnewMeal} value={chooseCategory} name ="chooseCategory"
                style={errorCategory ? {borderColor:"red"} : {borderColor:""} }
                >
                <option value>category List</option>
                    {allCategories.map(item => {
                    return(
                    <option key={Math.random() * 3} value={item}>{item}</option>
                    )
                    })}  
                </select>
        </div>
        
        <div>
                  <label className="form-label mr-3">Meal name</label>
                  <input  type="text" className="input"
                   value={newItemName} name ="newItemName"
                   onChange={handelnewMeal}
                   style={errorName ? {borderColor:"red"} : {borderColor:""} }
                   />
        </div>
        <div>
                  <label className="form-label mr-3">Price</label>
                  <input  type="text" className="input"
                   value={addPrice} name ="addPrice"
                   onChange={handelnewMeal}
                   style={errorprice ? {borderColor:"red"} : {borderColor:""} }
                />
        </div>
        
        <button type="submit"  className="btn btn-primary">save</button>
        
    </form>
    </div>
    );
}

export default Mealproducer;