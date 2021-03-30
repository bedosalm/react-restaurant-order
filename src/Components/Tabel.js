import React from 'react';

function Tabel({value}) {
    const {tabelData,total,newOreder} = value;
    const {category,meal,quanity,spicy,price,compo} = tabelData
        return (
            <div>
        <table className="table">
        <thead>
            <tr>
            <th scope="col">Item</th>
            <th scope="col">Meal</th>
            <th scope="col">Q</th>
            <th scope="col">Price</th>
            <th scope="col">Addons</th>
            <th scope="col">Total</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>{category}</td>
            <td>{meal}</td>
            <td>{quanity}</td>
            <td>{price}</td>
            <td>
                <p>
                 compo :<span>{compo}</span>
                 <br />
                spicy:<span>{spicy}</span></p>
            </td>
            <td>{total}</td>
            </tr>
        </tbody>
        </table>
        <div>
            <button onClick={newOreder} className="btn btn-primary right">New Order</button>
        </div>
        </div>
 
    );
}

export default Tabel;