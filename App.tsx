import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function App() {
	return (
		<View style={styles.container}>
			<Text>Hello React Native!</Text>
			<Button title='Click Here' />
			<StatusBar style='auto' />
		</View>
	)
}

type ButtonProps = {
	title: string
}

function Button({ title }: ButtonProps) {
	return (
		<TouchableOpacity>
			<Text>{title}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
