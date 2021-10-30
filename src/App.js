import ReactModal from "./React Modal/ReactModal";
import "./App.css";
import AddmitionForm from "./Components/AddmitionForm";
import Login from "./Components/Login";
import RegistrationForm from "./Components/RegistrationForm";
import FlexContainer from "./FlexContainer";
import ReactIcon from "./React Icon/ReactIcon";
import ReactNotify from "./React Nostify/ReactNotify";
import PaginationTable from "./React Table/Pagination Table/PaginationTable";
import Tooltip from "./React Tooltip/Tooltip";
// import SessionTimeOut from "./IdleTimerSessionOut/SessionTimeOut";
import CreditCard from "./Credit Card/CreditCard";
import ReactVplayrt from "./React video player/ReactVplayrt";
import ReactLoader from "./Spinners Loaders/ReactLoader";
// import ReactChart from "./React Chart/ReactChart";
import BarChart from "./React Chart/BarChart";

function App() {
  return (
    <>
    <div className="App">
      <div>
        <ReactIcon/>
        <ReactNotify/>
        <ReactModal/>
        <Tooltip/>
        {/* <SessionTimeOut/> */}
        <CreditCard/>
        <ReactVplayrt/>
        <ReactLoader/>
      </div>
      <div>
        {/* <ReactChart/> */}
        <BarChart/>
      </div>
      <div className="form-Container">
         <h1>Login Form</h1>
        <Login/>
      </div>

      <div className="form-Container">
        <h1>Registration Form</h1>
        <RegistrationForm/>
      </div>

      <div className="form-Container">
        <h1>Addmition Form</h1>
        <AddmitionForm/>
      </div>
      <div className= "flexbox">
        <FlexContainer/>
      </div>
      <div>
        <PaginationTable/>
      </div>
    </div>
    </>
  );
}

export default App;
