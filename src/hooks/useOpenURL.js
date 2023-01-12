import { useCallback } from 'react'
import { Alert, Linking } from 'react-native'

export const useOpenURL = (url) =>
  useCallback(async () => {
    const isSupportedURL = await Linking.canOpenURL(url)

    if (isSupportedURL) {
      await Linking.openURL(url)
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`)
    }
  }, [url])
