import Container from './Container'

const Header = () => {
  return (
    <header className='pt-4 md:pt-8 pb-8'>
      <Container>
        <div className='dis-row'>
          <div className='dis-item mb-4'>
            <h1>Jacob Ott</h1>
          </div>
        </div>
      </Container>
    </header>
  )
};

export default Header;
