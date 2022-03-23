import { Component } from 'react';
import CardList  from './components/card-list/card-list.component.jsx'
import './App.css';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor(){
    super();
    this.state={
            monsters:[],
            searchField:''
        };
        console.log('Constructor');
      }
  componentDidMount(){
      console.log("Component Did Mount");
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response =>response.json())
    .then((users) => this.setState(()=>{
       return {monsters:users}
    }, () => {console.log(this.state)}));

  }
  onSearchChange= (event)=>{
    console.log(event.target.value);
    console.log({startingArray : this.state.monsters});
    const searchField = event.target.value.toLowerCase();
    this.setState(()=>{
      return {searchField};
    });
  }

  render(){
    console.log("Render");
    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;
    const filteredMonsters = this.state.monsters.filter((monster)=>{
      return monster.name.toLowerCase().includes(this.state.searchField);
    })
  return (
    <div className="App">
      <h1 className='app-title'> Monster Rolodex</h1>
     <SearchBox onChangeHandler={onSearchChange} placeholder='Search Monsters..' className='search-box'/>
     {/* {
       filteredMonsters.map((monster)=>{
         return <div key={monster.id}><h1>{monster.name}</h1></div>;
       })
     } */}
    <CardList monsters={filteredMonsters}/>
    </div>
  );
  }
}

export default App;
