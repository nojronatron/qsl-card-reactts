export const PostcardAddressSide: React.FC<{
  cardItems: Array<string>;
}> = ({ cardItems }) => {
  return (
    <article className='address-side-container'>
      <div className='return-address-block'>Return Address...</div>
      <div className='recipient-address-block'>Recipient Address...</div>
      <div className='address-side-psetnx-message'>PSE/TNX Message</div>
    </article>
  );
};
