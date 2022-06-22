
import EmailPasswordReact from 'supertokens-auth-react/recipe/emailpassword'
import SessionReact from 'supertokens-auth-react/recipe/session'
import { appInfo } from './appInfo'

export const frontendConfig = () => {
  return {
    appInfo,
    recipeList: [
      EmailPasswordReact.init({
        //useShadowDom: false,
        palette: {
          primary: '#1f002c',
          background: '#111111',
          error: '#ad2e2e',
          textTitle: "#ffffff",
          textLabel: "#ffffff",
          textInput: '#000000',
          textPrimary: "#ffffff",
          textLink: '#ffffff',
          inputBackground: '#999999',
          superTokensBrandingBackground: '#1f002c',
          superTokensBrandingText: '#ffffff'
        },
        style: {
          button: {
            border: '0px'
          }
        }
      }),
      SessionReact.init({
        cookieDomain: process.env.COOKIE_DOMAIN
      }),
    ],
  }
}
