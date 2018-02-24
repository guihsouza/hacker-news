import Link from 'next/link'
import Head from 'next/head'
import stylesheet from 'styles/index.scss'

export default ({ children, title = 'Hacker News' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    </Head>

    { children }

    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <p>
            <strong>Hacker News</strong>
            <br/>
            Copyright &copy; - { new Date().getFullYear() }
          </p>
        </div>
      </div>
    </footer>
  </div>
)
