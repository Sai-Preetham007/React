import './App.css';
import Developer from './Props Container/1.First_Comp';
import Friends from './Props Container/2.Second_Comp';
import Details from './Props Container/3.Third_Comp';

const user={
  name : "Sai Preetham",
  email : "saipreethamudumula@gmail.com",
  contact : 8106338469,
  address : "Willows-536, Rain Tree Park, Dwaraka Krishna, Namburu, Guntur, 522508."
}

function App() {
  return (
    <div className="App">
      <Developer name="$@! **7"/>
      <br /><br />
      <Friends s1="Bhargava" s2="Cintu"/>
      <br /><br /><br />
      <Details name={user.name} email={user.email} contact={user.contact} address={user.address}/>
    </div>
  );
}

export default App;
