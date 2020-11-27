import Header from 'components/Header'
import Footer from 'components/Footer'

const DefaultLayout = ({ children }) => {
  return (
    <div className=''>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
};

export default DefaultLayout;
