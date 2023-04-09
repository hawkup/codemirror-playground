import Head from "next/head"

import { Layout } from "@/components/layout"
import { Playground } from "@/components/playground"

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>CodeMirror Playground</title>
        <meta name="description" content="CodeMirror Playground" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container pb-8">
        <Playground />
      </section>
    </Layout>
  )
}
