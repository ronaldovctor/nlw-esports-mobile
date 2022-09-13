import { StatusBar } from 'react-native'
import { Background } from './src/components/Background'
import {
	useFonts,
	Montserrat_400Regular,
	Montserrat_600SemiBold,
	Montserrat_700Bold,
	Montserrat_900Black,
} from '@expo-google-fonts/montserrat'
import { Home } from './src/screens/Home'
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
			{fontsLoaded ? <Home /> : <Loading />}
		</Background>
	)
}
