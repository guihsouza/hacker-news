import Link from 'next/link'
import Head from 'next/head'
import Header from '../../components/Header'
import stylesheet from 'styles/index.scss'

export default ({ children, title = 'Hacker News' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    </Head>

    <Header title={ title } />

    { children }
  </div>
)
