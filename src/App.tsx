import { useState } from 'react'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import MyInfoForm from './components/MyInfoForm'
import PostcardAddressSide from './components/PostcardAddressSide'
import QslCard from './components/QslCard'
import UrInfoForm from './components/UrInfoForm'
import './App.css'
import './print.css'

function App() {
  const [printVisibility, setPrintVisibility] = useState(false);
  const [infoData, setInfoData] = useState({
    myname: '',
    mycallsign: '',
    myreturnaddress: '',
    mycity: '',
    mycounty: '',
    mystate: '',
    myreturnzip: '',
    mycountry: '',
    mycqzone: '',
    myarrlsection: '',
    mygrid: '',
    urname: '',
    uraddress: '',
    urcity: '',
    urstate: '',
    urzip: '',
    urcountry: '',
    urcallsign: '',
    qsodate: '',
    qsotime: '',
    qsobandmhz: '',
    qsomode: '',
    qsosignal: '59',
    qsoexchange: '',
    psetnx: 'pse',
  });

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
          <HeaderComponent />
        </header>
        <main>
          <div>        
            <MyInfoForm myInfoHandlerCallback={handleSetInfoData} />
          </div>
          <div>
            <UrInfoForm urInfoHandlerCallback={handleSetInfoData} />
          </div>
          <hr />
          <QslCard senderFields={infoData} />
          <button className='print-button' onClick={handlePrintChange}>Print Card</button>
          <PostcardAddressSide senderFields={infoData} />
        </main>
        <footer>
          <FooterComponent />
        </footer>
      </div>      
      )}
    </div>
  )
}

export default App
