import convertKeyToName from './ConvertElementName.ts';

interface SenderFields {
  [key: string]: string;
}

interface QslCardProps {
  senderFields: SenderFields;
}

function QslCard({ senderFields }: QslCardProps) {
  function keysToDisplayElements(key: string, value: string): JSX.Element {
    const lowerKey = key
      .toLowerCase()
      .replaceAll(/\s/g, '-')
      .replaceAll(/\(|\)|\//g, '');
    const divId = `qsl-parentdiv-${lowerKey}`;
    const labelId = `qsl-label-${lowerKey}`;
    const dashedKey = key.replaceAll(/\s/g, '-');
    const displayKey = key.replaceAll(/\-/g, '');
    const displayValue = value.replaceAll(/\-/g, '');

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
