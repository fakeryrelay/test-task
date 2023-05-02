const initViewOption = {
  language: 'ru'
}

export const setLanguageMiddleware = storeApi => next => action => {
  next(action)

  const selectedLanguage = storeApi.getState().view.language
  if (initViewOption.language !== selectedLanguage) {
    localStorage.setItem('language', selectedLanguage)
  }
}