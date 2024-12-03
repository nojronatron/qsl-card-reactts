function HeaderComponent() {
  return (
    <header className='header-nav'>
      <a
        href='https://github.com/nojronatron'
        target='_blank'
        rel='noreferrer noopener'
      >
        <img
          src='src/assets/jrsoftware-logo-128x128.png'
          alt='JR Software Logo links to GitHub'
          className='header-logo'
        />
      </a>
      <p className='header-title'>QSL Card Generator</p>
    </header>
  );
}

export default HeaderComponent;
