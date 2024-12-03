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
    const parentDivId = 'qsl-parentdiv-' + lowerKey;
    const valueId = lowerKey + '-value';
    const labelId = lowerKey + '-label';
    const displayValue = cardValue.toUpperCase();

    return (
      <div key={lowerKey} className='qsl-card-infocell' id={parentDivId}>
        <div className='qsl-card-label' id={labelId}>
          PSE or TNX?
        </div>
        <div id={valueId} className='qsl-card-content'>
          {displayValue}
        </div>
      </div>
    );
  }
};

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
    const valueId = cardKey + '-value';
    const labelId = cardKey + '-label';
    const parentDivId = 'qsl-parentdiv-' + cardKey;

    return (
      <div key={cardKey} className='qsl-card-infocell' id={parentDivId}>
        <div className='qsl-card-label' id={labelId}>
          {callsignKey}
        </div>
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
        <div className='qsl-card-label' id={labelId}>
          {cardKey}
        </div>
        <div id={valueId} className='qsl-card-content'>
          {cardValue}
        </div>
      </div>
    );
  }
};

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
        <div className='qsl-card-label' id={labelId}>
          {cardKey}
        </div>
        <div id={valueId} className='qsl-card-content'>
          {formattedDate}
        </div>
      </div>
    );
  }
};

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
        <div className='qsl-card-label' id={labelId}>
          {cardKey}
        </div>
        <div id={valueId} className='qsl-card-content'>
          {cardValue}
        </div>
      </div>
    );
  }
};
