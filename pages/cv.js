import Head from 'next/head'

import Prismic from 'prismic-javascript'
import { Client } from 'utils/prismicHelpers'

import { RichText } from 'prismic-reactjs'

import DefaultLayout from 'layouts'
import Container from 'components/Container'

const Cv = ({ cv, settings }) => {
  return (
    <DefaultLayout settings={settings}>
      <Head>
        <title>Jacob Ott | CV</title>
      </Head>
      {cv && cv.data &&
        <Container>
          <div className='dis-row'>
            <div className='dis-item post-body'>
              <RichText render={cv.data.body} />
            </div>
          </div>
        </Container>
      }
    </DefaultLayout>
  )
}

export async function getStaticProps({ preview = null, previewData = {} }) {

  const { ref } = previewData

  const cv = await Client().getSingle('cv') || {}
  const settings = await Client().getSingle('settings') || {}

  return {
    props: {
      cv,
      settings,
      preview
    }
  }
}

export default Cv
