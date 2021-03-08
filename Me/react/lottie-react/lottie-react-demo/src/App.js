// import logo from './logo.svg';
import Lottie from 'lottie-react';
import renderData from './data.json';
import './index.css';

function App() {

  const style = {
    height: 300,
  };

  return (
    <Lottie animationData={renderData} style={style} />
  );
}

export default App;
