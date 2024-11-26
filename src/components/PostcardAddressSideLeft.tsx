const PostcardReturnAddress: React.FC<{ returnAddress: string }> = ({
  returnAddress,
}) => {
  return (
    <div className='return-address-block'>
      <div className='return-address-label'>Return Address:</div>
      <div className='return-address-content'>{returnAddress}</div>
    </div>
  );
};

const PostcardReturnName: React.FC<{ returnName: string }> = ({
  returnName,
}) => {
  return (
    <div className='return-name-block'>
      <div className='return-name-label'>Return Name:</div>
      <div className='return-name-content'>{returnName}</div>
    </div>
  );
};

const PostCardReturnCityStatePost: React.FC<{
  returnCity: string;
  returnState: string;
  returnZip: string;
}> = ({ returnCity, returnState, returnZip }) => {
  return (
    <div className='return-city-block'>
      <div className='return-city-label'>Return City:</div>
      <div className='return-city-content'>{returnCity}</div>
    </div>
  );
};

const PostcardReturnCountry: React.FC<{ returnCountry: string }> = ({
  returnCountry,
}) => {
  return (
    <div className='return-country-block'>
      <div className='return-country-label'>Return Country:</div>
      <div className='return-country-content'>{returnCountry}</div>
    </div>
  );
};

const PostcardSenderMessage: React.FC<{ senderMessage: string }> = ({
  senderMessage,
}) => {
  return (
    <div className='sender-message-block'>
      <div className='sender-message-label'>Sender Message:</div>
      <div className='sender-message-content'>{senderMessage}</div>
    </div>
  );
};

export {
  PostcardReturnAddress,
  PostcardReturnName,
  PostCardReturnCityStatePost,
  PostcardReturnCountry,
  PostcardSenderMessage,
};
