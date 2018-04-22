import React, { Component } from 'react'
import { CDNFlagIcon } from 'react-flag-kit'

const ThemeContext = React.createContext()

const localeMap = {
  'en-US': { locale: 'en-US', flag: 'US', content: 'Hello, World' },
  'fr-FR': { locale: 'fr-FR', flag: 'FR', content: 'Bonjour le monde!' },
  'es-ES': { locale: 'es-ES', flag: 'ES', content: '¡Hola Mundo!' }
}

class InLocalSwitcher extends Component {
  state = localeMap['en-US']

  render () {
    return (
      <div>
        <ThemeContext.Provider
          value={ {
            state: this.state,
            updateLocale: e => this.setState(localeMap[e.target.value])
          } }
        >
          { this.props.children }
        </ThemeContext.Provider>
      </div>
    )
  }
}

const LocaleSelect = () => {
  return (
    <ThemeContext.Consumer>
      { context => (
        <select value={ context.state.locale } onChange={ context.updateLocale }>
          <option value="en-US">English</option>
          <option value="fr-FR">France</option>
          <option value="es-ES">Spanish</option>
        </select>
      ) }
    </ThemeContext.Consumer>
  )
}

const LocaleFlag = (props) => {
  return (
    <ThemeContext.Consumer>
      { context => <CDNFlagIcon code={ context.state.flag } size={ 256 } /> }
    </ThemeContext.Consumer>
  )
}

const LocaleContent = (props) => {
  return (
    <ThemeContext.Consumer>
      { context => <h1>{ context.state.content }</h1> }
    </ThemeContext.Consumer>
  )
}

class LocalSwitcher extends Component {
  render () {
    return (
      <div>
        <InLocalSwitcher>
          <LocaleSelect />
          <LocaleFlag />
          <LocaleContent />
        </InLocalSwitcher>
      </div>
    )
  }
}

export default LocalSwitcher