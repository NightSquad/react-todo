import { useSelector } from 'react-redux';
import './App.css';
import CreateNewItem from './components/CreateNewItem/CreateNewItem';
import Status from './components/status/status';
import TodoItem from './components/TodoItem/TodoItem';

function App() {
  const [items, category] = useSelector(state => [state.items, state.category])
  return (
    <div className="App">
      <h1 className='title'>todos</h1>
      <div className='itemsBody'>
        <div className='itemsList'>
          <CreateNewItem/>
          {items.map((item) => 
          category === 'All' ? 
            <TodoItem item={item} key={item.id}/>
          : category === "Active" && !item.checked ?
            <TodoItem item={item} key={item.id}/> :
            category === "Completed" && item.checked ? 
            <TodoItem item={item} key={item.id}/> : ""
            )}
          {items.length > 0 ? <Status/> : ""}
        </div>
      </div>
    </div>
  );
}

export default App;
