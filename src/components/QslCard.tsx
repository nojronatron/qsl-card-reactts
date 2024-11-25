import convertKeyToName from './ConvertElementName.ts';

interface SenderFields {
  [key: string]: string;
}

interface QslCardProps {
  senderFields: SenderFields;
}

function QslCard({ senderFields }: QslCardProps) {
  function keysToDisplayElements(key: string, value: string): JSX.Element {
    console.log('1. qslcard key, value:', key, value);
    const lowerKey = key
      .toLowerCase()
      .replaceAll(/\s/g, '-')
      .replaceAll(/\(|\)|\//g, '');
    
    console.log('2. qslcard lowerKey:', lowerKey);
    const divId = `qsl-parentdiv-${lowerKey}`;
    console.log('3. qslcard divId:', divId);
    const labelId = `qsl-label-${lowerKey}`;
    console.log('4. qslcard labelId:', labelId);
    const dashedKey = key.replaceAll(/\s/g, '-');
    console.log('5. qslcard dashedKey:', dashedKey);
    const displayKey = key.replaceAll(/-/g, '');
    console.log('6. qslcard displayKey:', displayKey);
    const displayValue = value.replaceAll(/-/g, '');
    console.log('7. qslcard displayValue:', displayValue);

    return (
      <div key={divId} className='qsl-card-infocell' id={divId}>
        <label htmlFor={dashedKey} className='qsl-card-label' id={labelId}>
          {displayKey}
        </label>
        <div id={dashedKey} className='qsl-card-content'>
          {displayValue}
        </div>
      </div>
    );
  }

  const senderFieldsProps = Object.entries(senderFields);
  const DisplayItems = senderFieldsProps.map(([key, value]) => {
    if (value !== '') {
      const keyName = convertKeyToName(key);
      return keysToDisplayElements(keyName, value);
    }
  });

  return (
    <article className='qsl-card-container'>
      <div className='qsl-card-block'>{DisplayItems}</div>
    </article>
  );
}

export default QslCard;
