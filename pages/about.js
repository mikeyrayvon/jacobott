import Head from 'next/head'

import Prismic from 'prismic-javascript'
import { Client } from 'utils/prismicHelpers'

import { RichText } from 'prismic-reactjs'

import DefaultLayout from 'layouts'
import Container from 'components/Container'

const About = ({ doc, settings }) => {
  return (
    <DefaultLayout settings={settings}>
      <Head>
        <title>Jacob Ott | About</title>
      </Head>
      {doc && doc.data &&
        <Container>
          <div className='dis-row'>
            <div className='dis-item post-body'>
              <RichText render={doc.data.body} />
            </div>
          </div>
        </Container>
      }
    </DefaultLayout>
  )
}

export async function getStaticProps({ preview = null, previewData = {} }) {

  const { ref } = previewData

  const doc = await Client().getSingle('about') || {}
  const settings = await Client().getSingle('settings') || {}

  return {
    props: {
      doc,
      settings,
      preview
    }
  }
}

export default About
