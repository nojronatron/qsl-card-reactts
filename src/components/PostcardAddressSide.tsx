

interface SenderFields {
  [key: string]: string;
}

interface PostcardAddressSideProps {
  senderFields: SenderFields;
}

function PostcardAddressSide({ senderFields }: PostcardAddressSideProps) {
  function keysToDisplayElements(key:string, value:string): JSX.Element {
    const lowerKey = key
      .toLowerCase()
      .replaceAll(/\s/g, '-')
      .replaceAll(/\(|\)|\//g, '');
    const divId = `postcard-parentdiv-${lowerKey}`;
    const labelId = `postcard-label-${lowerKey}`;
    const dashedKey = key.replaceAll(/\s/g, '-');
    const displayKey = key.replaceAll(/\-/g, '');
    const displayValue = value.replaceAll(/\-/g, '');

    return (
      <div key={divId} className='postcard-card-infocell' id={divId}>
        <label htmlFor={dashedKey} className='postcard-card-label' id={labelId}>
          {displayKey}
        </label>
        <div id={dashedKey} className='postcard-card-content'>
          {displayValue}
        </div>
      </div>
    );
  }

  const senderFieldsProps = Object.entries(senderFields);
  const DisplayItems = senderFieldsProps.map(([key, value]) => {
    if (value !== '') {
      return keysToDisplayElements(key, value);
    }
  });

  return (
    <article className='postcard-card-container'>
      <div className='postcard-card-block'>{DisplayItems}</div>
    </article>
  )
}

export default PostcardAddressSide;
