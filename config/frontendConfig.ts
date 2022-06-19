
import EmailPasswordReact from 'supertokens-auth-react/recipe/emailpassword'
import SessionReact from 'supertokens-auth-react/recipe/session'
import { appInfo } from './appInfo'

export const frontendConfig = () => {
  return {
    appInfo,
    recipeList: [
      EmailPasswordReact.init({
        palette: {
          primary: '#1f002c',
          background: '#111111',
          error: '#ad2e2e',
          textTitle: "white",
          textLabel: "white",
          textInput: '#666666',
          textPrimary: "white",
          textLink: '#666666',
          inputBackground: '#000',
          superTokensBrandingBackground: '#1f002c',
          superTokensBrandingText: '#ffffff'
        },
        style: {
          button: {
            border: '0px'
          }
        }
      }),
      SessionReact.init(),
    ],
  }
}
