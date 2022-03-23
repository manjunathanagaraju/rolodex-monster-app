import { Component } from 'react';
import './card-list.styles.css';

import Card from '../../components/card/card.component';

class CardList extends Component{
    
  render(){
    const {monsters} = this.props;
      return <div className="card-list"> 
       {
         monsters.map((monster)=>{
           
            //  <h1 key={monster.id}>{monster.name}</h1>
            return (
            <Card monster={monster}/>
         )})
       }
     </div>

  }
}

export default CardList;