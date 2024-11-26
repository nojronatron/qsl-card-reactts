const QslCard: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <article className='qsl-card-container'>
      <div className='qsl-card-block'>{children}</div>
    </article>
  );
};

export default QslCard;
