export const PseTnxPart: React.FC<{
  cardKey: string;
  cardValue: string;
}> = ({ cardKey, cardValue }) => {
  if (cardKey === '' || cardValue === '') {
    console.log('PseTnx: cardKey is empty');
    return <div></div>;
  } else {
    const lowerKey = cardKey
      .toLowerCase()
      .replaceAll(/\s/g, '-')
      .replaceAll(/\(|\)|\//g, '');
    console.log(`PseTnx: lowerKey: ${lowerKey}`);
    const parentDivId = 'qsl-parentdiv-' + lowerKey;
    console.log(`PseTnx: parentDivId: ${parentDivId}`);
    const valueId = lowerKey + '-value';
    console.log(`PseTnx: valueId: ${valueId}`);
    const labelId = lowerKey + '-label';
    console.log(`PseTnx: labelId: ${labelId}`);
    const displayValue = cardValue.toUpperCase();

    return (
      <div key={lowerKey} className='qsl-card-infocell' id={parentDivId}>
        <label htmlFor={valueId} className='qsl-card-label' id={labelId}>
          PSE or TNX?
        </label>
        <div id={valueId} className='qsl-card-content'>
          {displayValue}
        </div>
      </div>
    );
  }
};

// todo: what if callsign has a slash in it
export const CallsignPart: React.FC<{
  callsignKey: string;
  callsignValue: string;
}> = ({ callsignKey, callsignValue }) => {
  if (callsignKey === '' || callsignValue === '') {
    console.log('MyCallsign: callsignKey or callsignValue is empty');
    return <div></div>;
  } else {
    const cardKey = callsignKey
      .toLowerCase()
      .replaceAll(/\s/g, '-')
      .replaceAll(/\(|\)|\//g, '');
    console.log(`MyCallsign: cardKey: ${cardKey}`);
    const valueId = cardKey + '-value';
    console.log(`MyCallsign: valueId: ${valueId}`);
    const labelId = cardKey + '-label';
    console.log(`MyCallsign: labelId: ${labelId}`);
    const parentDivId = 'qsl-parentdiv-' + cardKey;
    console.log(`MyCallsign: parentDivId: ${parentDivId}`);

    return (
      <div key={cardKey} className='qsl-card-infocell' id={parentDivId}>
        <label htmlFor={valueId} className='qsl-card-label' id={labelId}>
          {callsignKey}
        </label>
        <div id={valueId} className='qsl-card-content'>
          {callsignValue}
        </div>
      </div>
    );
  }
};

export const TextFieldPart: React.FC<{
  cardKey: string;
  cardValue: string;
}> = ({ cardKey, cardValue }) => {
  if (cardKey === '' || cardValue === '') {
    console.log('TextField: cardKey or cardValue is empty');
    return <div></div>;
  } else {
    const lowerKey = cardKey
      .toLowerCase()
      .replaceAll(/\s/g, '-')
      .replaceAll(/\(|\)|\//g, '');
    const valueId = lowerKey + '-value';
    const labelId = lowerKey + '-label';
    const dashedCardKey = cardKey.replaceAll(/\s/g, '-');
    const parentDivId = 'qsl-parentdiv-' + dashedCardKey.toLowerCase();

    return (
      <div key={lowerKey} className='qsl-card-infocell' id={parentDivId}>
        <label htmlFor={valueId} className='qsl-card-label' id={labelId}>
          {cardKey}
        </label>
        <div id={valueId} className='qsl-card-content'>
          {cardValue}
        </div>
      </div>
    );
  }
};

// write an export function that can handle date field
export const QsoDatePart: React.FC<{
  cardKey: string;
  cardValue: Date;
}> = ({ cardKey, cardValue }) => {
  if (cardKey === '' || !cardValue) {
    console.log('MyDate: cardKey or cardValue is empty');
    return <div></div>;
  } else {
    const lowerKey = cardKey
      .toLowerCase()
      .replaceAll(/\s/g, '-')
      .replaceAll(/\(|\)|\//g, '');
    const valueId = lowerKey + '-value';
    const labelId = lowerKey + '-label';
    const parentDivId = 'qsl-parentdiv-' + cardKey;

    const formattedDate = cardValue.toLocaleDateString();

    return (
      <div key={lowerKey} className='qsl-card-infocell' id={parentDivId}>
        <label htmlFor={valueId} className='qsl-card-label' id={labelId}>
          {cardKey}
        </label>
        <div id={valueId} className='qsl-card-content'>
          {formattedDate}
        </div>
      </div>
    );
  }
};

// write an export function that can handle time field, output in 24-hour format
export const QsoTimePart: React.FC<{
  cardKey: string;
  cardValue: string;
}> = ({ cardKey, cardValue }) => {
  if (cardKey === '' || cardValue === '') {
    console.log('MyTime: cardKey or cardValue is empty');
    return <div></div>;
  } else {
    const lowerKey = cardKey
      .toLowerCase()
      .replaceAll(/\s/g, '-')
      .replaceAll(/\(|\)|\//g, '');
    const valueId = lowerKey + '-value';
    const labelId = lowerKey + '-label';
    const parentDivId = 'qsl-parentdiv-' + cardKey;

    return (
      <div key={lowerKey} className='qsl-card-infocell' id={parentDivId}>
        <label htmlFor={valueId} className='qsl-card-label' id={labelId}>
          {cardKey}
        </label>
        <div id={valueId} className='qsl-card-content'>
          {cardValue}
        </div>
      </div>
    );
  }
};
