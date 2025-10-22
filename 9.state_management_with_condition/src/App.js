import Display from './Start';

const user = {
  emp_id : 8133398,
  emp_name : "Sai Preetham",
  emp_email : "saipreethamr@virtusa.com",
  organisation : "Virtusa Consulting Services PVT LTD."
}

function App() {
  return (
    <div className="App">
      <Display info = {user}/>
    </div>
  );
}

export default App;
