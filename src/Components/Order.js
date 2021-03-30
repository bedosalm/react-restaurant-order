import React from 'react';

function Order ({value}) {
    const {handelCategory,Category,Cmeal,allCategories,handelMealItem,mymeal
        ,handelSubmit,handelqun,handelCheck,
        quanity,total,compo,spicy,categoryError,quentityError} = value
        return (
            <div className="order-Form">
            <form onSubmit={handelSubmit}>
                <div className="row">
                    <div className="col-4">
                          <div>
                              <label className="form-label mr-3">category</label>
                              <select style={categoryError ? {borderColor:"red"} : {borderColor:"rgb(118, 118, 118)"}} value={Category} onChange={handelCategory}>
                              <option value>choose category</option>
                                {allCategories.map(item => {
                                   return(
                                   <option key={Math.random() * 3} value={item}>{item}</option>
                                   )
                                })}  
                              </select>
                          </div>
                           <div>
                              <label className="form-label mr-3">meal</label>
                              <select value={mymeal} onChange={handelMealItem}>
                                {Cmeal.map(item => {
                                   return(
                                <option key={item.id} value={item.meal}>{item.meal}</option>
                                   )
                                })}
                              </select>
                          </div>
                          <div>
                          <label className="form-label mr-3">Q</label>
                          <input style={quentityError ? {borderColor:"red"} : {borderColor:""}} type="text" className="input"
                           value={quanity} 
                           onChange={handelqun}
                           />
                          </div> 
                         </div>

                        <div className="col-2">
                         <div className="form-check">
                        <input value={compo} onChange={handelCheck} name="compo" className="form-check-input"
                           type="checkbox" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                         Compo - 2LE
                        </label>
                        </div>
                        <div className="form-check">
                        <input value={spicy} onChange={handelCheck} name="spicy" className="form-check-input" type="checkbox" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                        spicy - 1LE
                        </label>
                        </div>
                        <h4 className="py-5 text-center blue" style={{textIndent: "-28px"}}>
                            Price LE <span>{total}</span></h4>
                    </div>      

                    <div className="col-3">
                       <button type="submit" className="submit" className="btn btn-primary">ADD</button>
                    </div>    
                </div>
             </form>
            </div>
        );
}

export default Order;