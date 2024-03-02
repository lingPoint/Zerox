import { Sairin } from '@lingpoint/core'

import sairinConfig from '../sairin.config'

// import theme style
import "@lingpoint/zerox-theme/style.css";

export const sairin = new Sairin(sairinConfig)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
