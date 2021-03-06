
import './App.css';
import Header from './components/Header/Header';
import FirstBanner from './components/First_Banner/FirstBanner';
import HomeItems from './components/HomeItems/HomeItems';
import VideoSection from './components/VideoSection/VideoSection';
import AOS from 'aos';
import "aos/dist/aos.css"
AOS.init()

function App() {
  return (
    <div className="">
      <Header/>
      <FirstBanner/>
      <HomeItems/>
      <VideoSection/>
    </div>
  );
}



export default App;
