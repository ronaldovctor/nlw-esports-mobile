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

export default function App() {
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
