import Head from 'next/head'

import Prismic from 'prismic-javascript'
import { Client } from 'utils/prismicHelpers'

import { RichText } from 'prismic-reactjs'

import DefaultLayout from 'layouts'
import Container from 'components/Container'

const Landing = ({ landing, settings }) => {
  return (
    <DefaultLayout settings={settings}>
      <Head>
        <title>Jacob Ott</title>
      </Head>
      {landing && landing.data &&
        <Container>
          <div className='dis-row'>
            <div className='dis-item post-body'>
              <RichText render={landing.data.body} />
            </div>
          </div>
        </Container>
      }
    </DefaultLayout>
  )
}

export async function getStaticProps({ preview = null, previewData = {} }) {

  const { ref } = previewData

  const landing = await Client().getSingle('landing') || {}
  const settings = await Client().getSingle('settings') || {}

  return {
    props: {
      landing,
      settings,
      preview
    }
  }
}

export default Landing
