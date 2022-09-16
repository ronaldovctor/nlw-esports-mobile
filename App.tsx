import { StatusBar } from 'react-native'
import { Background } from './src/components/Background'
import {
	useFonts,
	Montserrat_400Regular,
	Montserrat_600SemiBold,
	Montserrat_700Bold,
	Montserrat_900Black,
} from '@expo-google-fonts/montserrat'
import { Routes } from './src/routes'
import { Loading } from './src/components/Loading'
import { Subscription } from 'expo-modules-core'

import './src/service/notifications'
import * as Notifications from 'expo-notifications'
import { getPushNotificationToken } from './src/service/getPushNotificationToken'
import { useEffect, useRef } from 'react'

export default function App() {
	const getNotificationListener = useRef<Subscription>()
	const responseNotificationListener = useRef<Subscription>()

	useEffect(() => {
		getPushNotificationToken()
	}, [])

	useEffect(() => {
		getNotificationListener.current =
			Notifications.addNotificationResponseReceivedListener((notification) => {
				console.log(notification)
			})

		responseNotificationListener.current =
			Notifications.addNotificationResponseReceivedListener((response) => {
				console.log(response)
			})

		return () => {
			if (getNotificationListener.current && responseNotificationListener.current) {
				Notifications.removeNotificationSubscription(getNotificationListener.current)
				Notifications.removeNotificationSubscription(
					responseNotificationListener.current
				)
			}
		}
	}, [])

	const [fontsLoaded] = useFonts({
		Montserrat_400Regular,
		Montserrat_600SemiBold,
		Montserrat_700Bold,
		Montserrat_900Black,
	})

	return (
		<Background>
			<StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
			{fontsLoaded ? <Routes /> : <Loading />}
		</Background>
	)
}
