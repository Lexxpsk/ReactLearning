import React from 'react';
import Minmax from '~/components/inputs/minmax';
import Button from 'react-bootstrap/Button';
import cartStore from '~/store/cart';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';

@observer class Cart extends React.Component{
   render(){
      let products = cartStore.products;

      let productsRows = products.map((pr, i) => {
         return <tr key={pr.id}>
            <td>{pr.title}</td>
            <td>{pr.price}</td>
            <td>
               <Minmax min={1} 
                       max={pr.rest} 
                       value={pr.current} 
                       onChange={(val) => cartStore.changeCnt(i, val)}
                       key={i + ':' + pr.rest}
               />
            </td>
            <td>{pr.price * pr.current}</td>
            <td>
               <Button variant="danger"
                       onClick={() => cartStore.remove(i)}
               >X</Button>
            </td>
         </tr>
      });

      return <div>
         <h2>Cart</h2>
         <table>
            <tbody>
               <tr>
                  <td>Title</td>
                  <td>Price</td>
                  <td>Count</td>
                  <td>Total</td>
                  <td>Actions</td>
               </tr>
               { productsRows }
            </tbody> 
         </table>
         <hr/>
         <strong>Total: {cartStore.total}</strong>
         <hr/>
         <Link className="btn btn-success" to="/order">Send</Link>
      </div>
   }   
}

export default Cart;