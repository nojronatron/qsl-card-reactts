import {useState} from 'react';

interface urInfoHandlerCallback {
  urInfoHandlerCallback: (name: string, value: string) => void;
}

function UrInfoForm({ urInfoHandlerCallback }:urInfoHandlerCallback) {
  const [psetnx, setPsetnx] = useState('PSE');

  const handleBlur = (event:any) => {
    urInfoHandlerCallback(event.target.name, event.target.value);
  };

  function handlePseChanged() {
    setPsetnx('PSE');
    urInfoHandlerCallback('psetnx', 'PSE');
  }

  function handleTnxChanged() {
    setPsetnx('TNX');
    urInfoHandlerCallback('psetnx', 'TNX');
  }

  return (
    <div className='input-form-container'>
      <label htmlFor='urname'>UR Name</label>
      <input type='text' id='urname' name='urname' onBlur={handleBlur} />
      <label htmlFor='urcallsign'>UR Callsign</label>
      <input
        type='text'
        id='urcallsign'
        name='urcallsign'
        onBlur={handleBlur}
      />
      <label htmlFor='qsodate'>QSO Date</label>
      <input type='date' id='qsodate' name='qsodate' onBlur={handleBlur} />
      <label htmlFor='qsotime'>QSO Time (UTC)</label>
      <input type='time' id='qsotime' name='qsotime' onBlur={handleBlur} />
      <label htmlFor='qsobandmhz'>QSO Band/MHz</label>
      <input
        type='text'
        id='qsobandmhz'
        name='qsobandmhz'
        onBlur={handleBlur}
      />
      <label htmlFor='qsomode'>QSO Mode</label>
      <select id='qsomode' name='qsomode' onBlur={handleBlur}>
        <option value='cw'>CW</option>
        <option value="'d-star">D-Star</option>
        <option value='dmr'>DMR</option>
        <option value='ft-8'>FT-8</option>
        <option value='psk-31'>PSK-31</option>
        <option value='rtty'>RTTY</option>
        <option value='fusion'>Fusion</option>
        <option value='mfsk-16'>MFSK-16</option>
        <option value='mt-63'>MT-63</option>
        <option value='olivia'>Olivia</option>
        <option value='packet'>Packet</option>
        <option value='voice-am'>Voice-AM</option>
        <option value='voice-fm'>Voice-FM</option>
        <option value='voice-ssb'>Voice-SSB</option>
      </select>
      <label htmlFor='qsoexchange'>Exchange</label>
      <input
        type='text'
        id='qsoexchange'
        name='qsoexchange'
        onBlur={handleBlur}
      />
      <label htmlFor='qsosignal'>Signal Report</label>
      <input type='text' id='qsosignal' name='qsosignal' onBlur={handleBlur} />
      <div className='psetnx-container'>
        <label htmlFor='pse'>Please Reply</label>
        <input
          type='radio'
          id='pse'
          name='psetnx'
          value='PSE'
          checked={psetnx === 'PSE'}
          onChange={handlePseChanged}
        />
      </div>
      <div className='psetnx-container'>
        <label htmlFor='tnx'>Thanks for Card!</label>
        <input
          type='radio'
          id='tnx'
          name='psetnx'
          value='TNX'
          checked={psetnx === 'TNX'}
          onChange={handleTnxChanged}
        />
      </div>
    </div>
  );
}

export default UrInfoForm;
