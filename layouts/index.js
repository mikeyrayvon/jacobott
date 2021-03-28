import { useState, useEffect } from 'react'

import Header from 'components/Header'
import Footer from 'components/Footer'

const DefaultLayout = ({ children, settings }) => {
  const [mouseMoving, setMouseMoving] = useState(true)
  let timeout

  const mouseMoved = (e) => {
    setMouseMoving(true)

    clearTimeout(timeout)
    timeout = setTimeout(() => {
      console.log('mouseStill');
      setMouseMoving(false)
    }, 3000)
  }

  useEffect(() => mouseMoved(), []);

  return (
    <div className={'layout-wrapper ' + (mouseMoving ? '' : 'napping')} onMouseMove={e => mouseMoved(e)}>
      <Header settings={settings} />
      <main>{children}</main>
      <Footer />
    </div>
  )
};

export default DefaultLayout;
