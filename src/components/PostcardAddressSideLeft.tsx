const PostcardReturnAddressElement: React.FC<{
  cardKey: string;
  cardId: string;
  cardClassName: string;
  personName: string;
  personCallsign: string;
  personAddress: string;
  personCity: string;
  personState: string;
  personZip: string;
  personCountry: string;
}> = ({
  cardKey,
  cardId,
  cardClassName,
  personName,
  personCallsign,
  personAddress,
  personCity,
  personState,
  personZip,
  personCountry,
}) => {
  const itemKey = GetKeyAndId({ cardKey, iam: cardId });

  return (
    <div key={itemKey} className={cardClassName}>
      <div className='return-label-from'>From:</div>
      <div className='return-label-name'>
        {personName} {personCallsign}
      </div>
      <div className='return-label-address'>{personAddress}</div>
      <div className='return-label-city-state-zip'>
        {personCity}, {personState} {personZip}
      </div>
      <div className='return-label-country'>{personCountry}</div>
    </div>
  );
};

const PostcardAddresseeElement: React.FC<{
  cardKey: string;
  cardId: string;
  cardClassName: string;
  personName: string;
  personCallsign: string;
  personAddress: string;
  personCity: string;
  personState: string;
  personZip: string;
  personCountry: string;
}> = ({
  cardKey,
  cardId,
  cardClassName,
  personName,
  personCallsign,
  personAddress,
  personCity,
  personState,
  personZip,
  personCountry,
}) => {
  const itemKey = GetKeyAndId({ cardKey, iam: cardId });

  return (
    <div key={itemKey} className={cardClassName}>
      <div className='return-label-from'>To:</div>
      <div className='return-label-name'>
        {personName} {personCallsign}
      </div>
      <div className='return-label-address'>{personAddress}</div>
      <div className='return-label-city-state-zip'>
        {personCity}, {personState} {personZip}
      </div>
      <div className='return-label-country'>{personCountry}</div>
    </div>
  );
};

const GetKeyAndId = ({
  iam,
  cardKey,
}: {
  iam: string;
  cardKey: string;
}): string => {
  const lowerKey = cardKey
    .toLowerCase()
    .replace(/\s/g, '-')
    .replace(/\(|\)|\//g, '');

  return `${iam}-${lowerKey}`;
};

export { PostcardReturnAddressElement, PostcardAddresseeElement };
