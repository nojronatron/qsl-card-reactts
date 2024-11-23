import { useState } from 'react'
import MyInfoForm from './components/MyInfoForm'
import UrInfoForm from './components/UrInfoForm'
import QslCard from './components/QslCard'
import './App.css'
import './print.css'

function App() {
  const [printVisibility, setPrintVisibility] = useState(false);
  const [infoData, setInfoData] = useState({
    myname: '',
    mycallsign: '',
    mycity: '',
    mycounty: '',
    mystate: '',
    mycqzone: '',
    myarrlsection: '',
    mygrid: '',
    urname: '',
    urcallsign: '',
    qsodate: '',
    qsotime: '',
    qsobandmhz: '',
    qsomode: '',
    qsosignal: '59',
    qsoexchange: '',
    psetnx: 'pse',
  });

  console.log('app.ts printVisibility state is:', printVisibility);

  function handleSetInfoData(itemName: string, itemValue: string) {
    setInfoData((prevState) => {
      return { ...prevState, [itemName]: itemValue}
    })
  }

  function handlePrintChange() {
    console.log('Print button clicked, state is:', printVisibility);
    setPrintVisibility((prevState) => {
      return !prevState;
    })
  }

  return (
    <div>
      {printVisibility ? 
      (
        <main>
          <QslCard senderFields={infoData} />
          <button className='print-button' onClick={handlePrintChange}>Return to Form</button>
        </main>
      )
      :
      (
      <div>
        <header>
          <div className='header-nav'>
            <img src="jrsoftware-logo-128x128.png" alt="JR Software Logo" width="32px" />
            <p>K7RMZ QSL Card Generator</p>
          </div>
        </header>
        <main>
          <div>        
            <MyInfoForm myInfoHandlerCallback={handleSetInfoData} />
          </div>
          <div>
          <UrInfoForm urInfoHandlerCallback={handleSetInfoData} />
          </div>
          <div>{''}</div>
          <QslCard senderFields={infoData} />
          <button className='print-button' onClick={handlePrintChange}>Print Card</button>
          </main>
        <footer>
          <div className='footer-text'>Author: K7RMZ aka Nojronatron</div>
        </footer>
      </div>      
      )}
    </div>
  )
}

export default App
