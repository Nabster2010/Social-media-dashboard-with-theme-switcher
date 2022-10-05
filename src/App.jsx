import "./App.css";
import Header from "./components/Header";
import OverAllStatList from "./components/OverAllStatList";
import TodayStatList from "./components/TodayStatList";
import { data } from "./data";
function App() {
  return (
    <div className="min-h-screen font-Inter  bg-White  dark:bg-VeryDarkBlue text-VeryDarkBlue dark:text-White">
      <Header />
      <main className="p-6 md:px-24 md:py-6">
        <OverAllStatList data={data.overall} />
        <TodayStatList data={data.today} />
      </main>
    </div>
  );
}

export default App;
