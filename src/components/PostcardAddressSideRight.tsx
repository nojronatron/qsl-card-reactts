const PostcardRecipientAddress: React.FC<{ senderAddress: string }> = ({
  senderAddress,
}) => {
  return (
    <div className='recipient-address-block'>
      <div className='recipient-address-label'>Sender Address:</div>
      <div className='recipient-address-content'>{senderAddress}</div>
    </div>
  );
};

const PostcardRecipientName: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div className='recipient-name-block'>
      <div className='recipient-name-label'>Recipient Name:</div>
      <div className='recipient-name-content'>{name}</div>
    </div>
  );
};

const PostcardRecipientCityStatePost: React.FC<{
  city: string;
  state: string;
  zip: string;
}> = ({ city, state, zip }) => {
  return (
    <div className='recipient-city-block'>
      <div className='recipient-city-label'>Recipient City:</div>
      <div className='recipient-city-content'>
        {city}, {state} {zip}
      </div>
    </div>
  );
};

const PostcardRecipientCountry: React.FC<{ country: string }> = ({
  country,
}) => {
  return (
    <div className='recipient-country-block'>
      <div className='recipient-country-label'>Recipient Country:</div>
      <div className='recipient-country-content'>{country}</div>
    </div>
  );
};

export {
  PostcardRecipientAddress,
  PostcardRecipientName,
  PostcardRecipientCityStatePost,
  PostcardRecipientCountry,
};
