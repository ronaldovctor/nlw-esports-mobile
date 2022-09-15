import { View, Image, FlatList } from 'react-native'
import { styles } from './styles'
import logoImg from '../../assets/logo-nlw-esports.png'
import { Heading } from '../../components/Heading'
import { GameCard, GameCardProps } from '../../components/GameCard'
import { GAMES } from '../../utils/games'
import { useEffect, useState } from 'react'

export function Home() {
	const [games, setGames] = useState<GameCardProps[]>([])

	useEffect(() => {
		fetch('http://192.168.0.104:3333/games')
			.then((response) => response.json())
			.then((json) => setGames(json))
	}, [])

	return (
		<View style={styles.container}>
			<Image source={logoImg} style={styles.logo} />
			<Heading
				title={'Encontre seu duo!'}
				subtitle={'Selecione o game que deseja jogar.'}
			/>

			<FlatList
				contentContainerStyle={styles.contentList}
				data={games}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <GameCard data={item} />}
				showsHorizontalScrollIndicator={false}
				horizontal
			/>
		</View>
	)
}
