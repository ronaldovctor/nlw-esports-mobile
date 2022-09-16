import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'
import { TouchableOpacity, View, Image, FlatList, Text } from 'react-native'

import logoImg from '../../assets/logo-nlw-esports.png'
import { Entypo } from '@expo/vector-icons'
import { styles } from './styles'
import { THEME } from '../../theme'

import { GameParams } from '../../@types/navigation'
import { Background } from '../../components/Background'
import { Heading } from '../../components/Heading'
import { DuoCard, DuoCardProps } from '../../components/DuoCard'
import React, { useEffect, useState } from 'react'
import { DuoMatch } from '../../components/DuoMatch'

export function Game() {
	const [duos, setDuos] = useState<DuoCardProps[]>([])
	const [discordDuoSelected, setDiscordDuoSelected] = useState('')

	const navigate = useNavigation()
	const route = useRoute()
	const game = route.params as GameParams

	function handleGoBack() {
		navigate.goBack()
	}

	async function getDiscordUser(adsId: string) {
		fetch(`http://192.168.0.104:3333/ads/${adsId}/discord`)
			.then((response) => response.json())
			.then((json) => setDiscordDuoSelected(json.discord))
	}

	useEffect(() => {
		fetch(`http://192.168.0.104:3333/games/${game.id}/ads`)
			.then((response) => response.json())
			.then((json) => setDuos(json))
	}, [])

	return (
		<Background>
			<SafeAreaView style={styles.container}>
				<View style={styles.header}>
					<TouchableOpacity>
						<Entypo
							name='chevron-thin-left'
							color={THEME.COLORS.CAPTION_300}
							onPress={handleGoBack}
						/>
					</TouchableOpacity>
					<Image source={logoImg} style={styles.logo} />
					<View style={styles.right} />
				</View>

				<Image
					source={{ uri: game.bannerUrl }}
					resizeMode='cover'
					style={styles.cover}
				/>

				<Heading title={game.title} subtitle={'Conecte-se e comece a jogar!'} />

				<FlatList
					horizontal
					data={duos}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => (
						<DuoCard data={item} onConnect={() => getDiscordUser(item.id)} />
					)}
					style={styles.containerList}
					contentContainerStyle={[
						duos.length ? styles.contentList : styles.emptyListContent,
					]}
					showsHorizontalScrollIndicator={false}
					ListEmptyComponent={() => (
						<Text style={styles.emptyListText}>Não há anúncios no momento :(</Text>
					)}
				/>
				<DuoMatch
					onClose={() => setDiscordDuoSelected('')}
					visible={discordDuoSelected.length > 0}
					discord={discordDuoSelected}
				/>
			</SafeAreaView>
		</Background>
	)
}
