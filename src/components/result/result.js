import React from 'react';
import { observer } from 'mobx-react';
import cartStore from '~/store/cart';
import orderStore from '~/store/order';
import { routesMap } from '~/router/index';
import { Link } from 'react-router-dom';

@observer class Result extends React.Component{
   render(){
      let total = cartStore.products.reduce((t, pr) => {
         return t + pr.price * pr.current;
      }, 0);

      let posts = [1, 2, 5];
      let postsItems = posts.map((num) => {
         return <li className="list-group-item" key = {num}>
            <Link to={`/posts/${num}`}>Post #{num}</Link>
         </li>
      });


      return <div>
   <h2>Hi, {orderStore.userInfo.name}</h2>
         <hr/>
            {orderStore.userInfo.email}
         <hr/>
         We get your money all! - {cartStore.total}
         <hr/>

         <ul className="list-group">
           {postsItems}
         </ul>
      </div>
   }
   
}

export default Result;