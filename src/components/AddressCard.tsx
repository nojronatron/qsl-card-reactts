const AddressCard: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <article className='address-card-container'>
      <div className='address-card-block'>{children}</div>
    </article>
  );
};

export default AddressCard;
