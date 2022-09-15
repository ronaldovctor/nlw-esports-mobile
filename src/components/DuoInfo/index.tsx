import { View, Text, ColorValue } from 'react-native'
import { THEME } from '../../theme'
import { styles } from './styles'

interface DuoInfoProps {
	label: String
	value: String
	colorValue?: ColorValue
}

export function DuoInfo({ label, value, colorValue = THEME.COLORS.TEXT }: DuoInfoProps) {
	return (
		<View style={styles.container}>
			<Text style={styles.label} numberOfLines={1}>
				{label}
			</Text>
			<Text style={[styles.value, { color: colorValue }]}>{value}</Text>
		</View>
	)
}
