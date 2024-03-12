import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Usersign from "./component/pages/signup/usersign";
import Signupsecond from "./component/pages/signup/sign2";
import Schedule from "./component/pages/dashboard/schedule";
import Twoschedule from "./component/pages/dashboard/twoshedule";
import Dummy from "./component/dummy";
import Calender_scheduling from "./component/pages/dashboard/calender";
import Subscription from "./component/pages/payments/subscription";
import ChartComponent from "./component/pages/dashboard/analytics";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Usersign />} />
        <Route path="/signupusersecond" element={<Signupsecond />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/Twoschedule" element={<Twoschedule />} />
        <Route path="/dash_schedule" element={<Calender_scheduling />} />
        <Route path="/subscription" element={<Subscription />} />

        <Route path="/Analytics" element={<ChartComponent />} />
      </Routes>
    </BrowserRouter>
    // <>
    // <Dummy/>
    // </>
  );
}

export default App;
