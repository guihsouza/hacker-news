import Link from 'next/link'
import Head from 'next/head'
import stylesheet from 'styles/index.scss'

export default class extends React.PureComponent {

  componentDidMount () {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then(registration => {
          console.log('service worker registration successful')
        })
        .catch(err => {
          console.warn('service worker registration failed', err.message)
        })
    }
  }

  render() {
    const { title, children } = this.props

    return (
      <div>
        <Head>
          <title>{ title ? title : 'Hacker News' }</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <meta name="theme-color" content="#3273dc" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" type="image/jpeg" href="/favicon.jpg" />
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
  }
}
