import './App.css';
import Porps from './Content/Porps';
import Li from './Content/Li';
import Events from './Content/Events';
import Counter from './Content/Counter';
import Set from './Content/Set';
function App() {
  return (
   <>
   <Porps even={1}/>
   
   <Li styled={"number"} name="Aarya" age="25" classs="pg" rollnumber="2818303" number="65454"/>
   <Li styled={"lower-alpha"}  name="Prathana" age="12" classs="7" rollnumber="1" number="64546"/>
   <Li styled={"upper-alpha"}  name="Prakash" age="23" classs="k" rollnumber="2645" number="14
   "/>
   <Events message="welcome to world"  onPlay={()=>{console.log("play");}} onPause={()=>{console.log("pause");}} ></Events>
   <Counter sttyled={"black"} color={"white"}/>
   <Set/>
   </>
  );
}
export default App;