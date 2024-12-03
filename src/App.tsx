import { useState } from 'react';
import AddressCard from './components/AddressCard';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import MyInfoForm from './components/MyInfoForm';
import {
  PostcardReturnAddressElement,
  PostcardAddresseeElement,
} from './components/PostcardAddressSideLeft';
import QslCard from './components/QslCard';
import StampElement from './components/StampElement';
import UrInfoForm from './components/UrInfoForm';
import {
  CallsignPart,
  PseTnxPart,
  TextFieldPart,
} from './components/FormFieldComponents';
import './App.css';

function App() {
  const [buttonText, setButtonText] = useState('View print preview');
  const [printVisibility, setPrintVisibility] = useState(false);

  const [myCallsign, setMyCallsign] = useState('');
  const [myName, setMyName] = useState('');
  const [myReturnAddress, setMyReturnAddress] = useState('');
  const [myCity, setMyCity] = useState('');
  const [myCounty, setMyCounty] = useState('');
  const [myState, setMyState] = useState('');
  const [myReturnZip, setMyReturnZip] = useState('');
  const [myCountry, setMyCountry] = useState('');
  const [myCqZone, setMyCqZone] = useState(3);
  const [myArrlSection, setMyArrlSection] = useState('');
  const [myGrid, setMyGrid] = useState('');

  const [urname, setUrName] = useState('');
  const [urCallsign, setUrCallsign] = useState('');
  const [urAddress, setUrAddress] = useState('');
  const [urCity, setUrCity] = useState('');
  const [urState, setUrState] = useState('');
  const [urZip, setUrZip] = useState('');
  const [urCountry, setUrCountry] = useState('');
  const [qsoDate, setQsoDate] = useState('');
  const [qsoTime, setQsoTime] = useState('');
  const [qsoBandMhz, setQsoBandMhz] = useState('');
  const [qsoMode, setQsoMode] = useState('');
  const [qsoExchange, setQsoExchange] = useState('');
  const [qsoSignal, setQsoSignal] = useState(599);
  const [pseTnx, setPseTnx] = useState('pse');

  function handleSetInfoData(itemName: string, itemValue: string) {
    console.log(
      `App.handleSetInfoData received: itemName: ${itemName}, itemValue: ${itemValue}`
    );
    switch (itemName.toLowerCase()) {
      case 'myname':
        if (itemValue !== myName) setMyName(itemValue);
        break;
      case 'mycallsign':
        if (itemValue !== myCallsign) setMyCallsign(itemValue.toUpperCase());
        break;
      case 'myreturnaddress':
        if (itemValue !== myReturnAddress) setMyReturnAddress(itemValue);
        break;
      case 'mycity':
        if (itemValue !== myCity) setMyCity(itemValue);
        break;
      case 'mycounty':
        if (itemValue !== myCounty) setMyCounty(itemValue);
        break;
      case 'mystate':
        if (itemValue !== myState) setMyState(itemValue.toUpperCase());
        break;
      case 'myreturnzip':
        if (itemValue !== myReturnZip) setMyReturnZip(itemValue);
        break;
      case 'mycountry':
        if (itemValue !== myCountry) setMyCountry(itemValue.toUpperCase());
        break;
      case 'mycqzone':
        let parsedInput = parseInt(itemValue);
        if (Number.isNaN(parsedInput)) setMyCqZone(-1);
        if (parsedInput !== myCqZone) setMyCqZone(parsedInput);
        break;
      case 'myarrlsection':
        if (itemValue !== myArrlSection)
          setMyArrlSection(itemValue.toUpperCase());
        break;
      case 'mygrid':
        if (itemValue !== myGrid) {
          let tempGrid = itemValue.trim();
          let firstTwoChars = tempGrid.substring(0, 2).toUpperCase();
          let remainingChars = tempGrid.substring(2).toLowerCase();
          let newValue = `${firstTwoChars}${remainingChars}`;
          setMyGrid(newValue);
        }
        break;
      case 'urname':
        if (itemValue !== urname) setUrName(itemValue);
        break;
      case 'urcallsign':
        if (itemValue !== urCallsign) setUrCallsign(itemValue.toUpperCase());
        break;
      case 'uraddress':
        if (itemValue !== urAddress) setUrAddress(itemValue);
        break;
      case 'urcity':
        if (itemValue !== urCity) setUrCity(itemValue);
        break;
      case 'urstate':
        if (itemValue !== urState) setUrState(itemValue);
        break;
      case 'urzip':
        if (itemValue !== urZip) setUrZip(itemValue);
        break;
      case 'urcountry':
        if (itemValue !== urCountry) setUrCountry(itemValue.toUpperCase());
        break;
      case 'qsotime':
        console.log('qsotime:', itemValue);
        let tempTime = itemValue.trim();
        if (
          tempTime.indexOf(':') > -1 &&
          tempTime.length > 3 &&
          tempTime.length < 6
        ) {
          console.log(
            'Setting qsotime to state (it has a colon and is either 4 or 5 characters long):',
            tempTime
          );
          setQsoTime(tempTime);
        } else {
          console.log(
            'Setting blank qsotime to state (it does not have a colon or is not 4 or 5 characters long):',
            tempTime
          );
          setQsoTime('');
        }
        break;
      case 'qsobandmhz':
        console.log('qsobandmhz itemValue:', itemValue);
        if (itemValue !== qsoBandMhz) {
          setQsoBandMhz(itemValue);
        }
        break;
      case 'qsomode':
        if (itemValue !== qsoMode) setQsoMode(itemValue);
        break;
      case 'qsoexchange':
        if (itemValue !== qsoExchange) setQsoExchange(itemValue);
        break;
      case 'qsosignal':
        let parsedSignal = parseInt(itemValue);
        if (Number.isNaN(parsedSignal)) {
          setQsoSignal(-1);
        } else if (parsedSignal !== qsoSignal) {
          setQsoSignal(parseInt(itemValue));
        }
        break;
      case 'psetnx':
        console.log('psetnx current, from callback:', pseTnx, itemValue);
        setPseTnx(itemValue);
        break;
      case 'qsodate':
        if (itemValue !== qsoDate) {
          setQsoDate(itemValue);
        }
        break;
      default:
        break;
    }
  }

  function handlePrintChange() {
    setButtonText(printVisibility ? 'Return to form' : 'View print preview');
    setPrintVisibility(!printVisibility);
  }

  return (
    <div>
      {!printVisibility && <HeaderComponent />}
      <main>
        {!printVisibility && (
          <MyInfoForm myInfoHandlerCallback={handleSetInfoData} />
        )}
        {!printVisibility && (
          <UrInfoForm urInfoHandlerCallback={handleSetInfoData} />
        )}
        {!printVisibility && <hr />}
        <div className='qsl-card-and-address'>
          <QslCard>
            <TextFieldPart cardKey='My Name' cardValue={myName} />
            <CallsignPart
              callsignKey='My Callsign'
              callsignValue={myCallsign}
            />
            <TextFieldPart cardKey='Return City' cardValue={myCity} />
            <TextFieldPart cardKey='Return County' cardValue={myCounty} />
            <TextFieldPart cardKey='Return Country' cardValue={myCountry} />
            <TextFieldPart
              cardKey='My CQ Zone'
              cardValue={myCqZone.toString()}
            />
            <TextFieldPart
              cardKey='My ARRL Section'
              cardValue={myArrlSection}
            />
            <TextFieldPart cardKey='My Grid' cardValue={myGrid} />
            <TextFieldPart cardKey='UR Name' cardValue={urname} />
            <CallsignPart
              callsignKey='UR Callsign'
              callsignValue={urCallsign}
            />
            <TextFieldPart cardKey='Date' cardValue={qsoDate} />
            <TextFieldPart cardKey='Time' cardValue={qsoTime} />
            <TextFieldPart cardKey='Band MHz' cardValue={qsoBandMhz} />
            <TextFieldPart cardKey='Mode' cardValue={qsoMode} />
            <TextFieldPart cardKey='Exchange' cardValue={qsoExchange} />
            <TextFieldPart cardKey='Signal' cardValue={qsoSignal.toString()} />
            <PseTnxPart cardKey='PSE TNX' cardValue={pseTnx} />
          </QslCard>
          <AddressCard>
            <PostcardReturnAddressElement
              cardKey='return person'
              cardId='return person block'
              cardClassName='return-person-block-class'
              personName={myName}
              personCallsign={myCallsign}
              personAddress={myReturnAddress}
              personCity={myCity}
              personState={myState}
              personZip={myReturnZip}
              personCountry={myCountry}
            />
            <PostcardAddresseeElement
              cardKey='addressee'
              cardId='addressee block'
              cardClassName='addressee-block-class'
              personName={urname}
              personCallsign={urCallsign}
              personAddress={urAddress}
              personCity={urCity}
              personState={urState}
              personZip={urZip}
              personCountry={urCountry}
            />
            <StampElement />
          </AddressCard>
        </div>
        <button className='print-button' onClick={handlePrintChange}>
          {buttonText}
        </button>
      </main>
      {!printVisibility && <FooterComponent />}
    </div>
  );
}

export default App;
