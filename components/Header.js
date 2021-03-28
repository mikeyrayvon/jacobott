import { default as NextLink } from 'next/link'

import Container from './Container'

const Header = ({ settings }) => {
  return (
    <header className='pt-4 md:pt-8 pb-8'>
      <Container>
        <nav>
          <ul className='dis-row justify-start'>
            <li className='dis-item flex-shrink mb-4'>
              <NextLink href={'/'}>
                <h1><a className='hover:underline cursor-pointer'>Jacob Ott</a></h1>
              </NextLink>
            </li>
            <li className='dis-item flex-shrink mb-4'>
              <NextLink href={'/about'}>
                <a className='hover:underline'>About</a>
              </NextLink>
            </li>
            {settings.data.portfolio.url &&
              <li className='dis-item flex-shrink mb-4'>
                <NextLink href={settings.data.portfolio.url}>
                  <a className='hover:underline'>Documentation</a>
                </NextLink>
              </li>
            }
            {settings.data.email.url &&
              <li className='dis-item flex-shrink mb-4'>
                <NextLink href={settings.data.email.url}>
                  <a className='hover:underline'>Email</a>
                </NextLink>
              </li>
            }
          </ul>
        </nav>
      </Container>
    </header>
  )
};

export default Header;
