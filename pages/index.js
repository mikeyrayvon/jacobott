import Head from 'next/head'

import Prismic from 'prismic-javascript'
import { Client } from 'utils/prismicHelpers'

import DefaultLayout from 'layouts'

const Landing = ({ landing }) => {
  return (
    <DefaultLayout>
      <Head>
        <title>My Website</title>
      </Head>
    </DefaultLayout>
  )
}

export async function getStaticProps({ preview = null, previewData = {} }) {

  const { ref } = previewData

  const landing = await Client().getSingle('landing') || {}

  return {
    props: {
      landing,
      preview
    }
  }
}

export default Landing
