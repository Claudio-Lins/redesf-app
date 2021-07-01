import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { GlobalStyles } from '../styles/global-styles'

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
