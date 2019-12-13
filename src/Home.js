import React, { useState, useEffect } from 'react'
import { StyleSheet, AsyncStorage, StatusBar, FlatList, View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import Card from './components/Card'

export default function Home() {
	async function getSeries() {
		if (await AsyncStorage.getItem('series')) {
			setDB(JSON.parse(await AsyncStorage.getItem('series')))
		}
	}
	
	useEffect(() => {
		getSeries()
	}, [])

	const [DB, setDB] = useState({ series: [] })
	const [serie, setSerie] = useState('')

	async function handleAdd() {
		if (serie) {
			const database = DB
			
			if (database.series.indexOf(serie) === -1) {
				database.series.push(serie)
				await AsyncStorage.setItem('series', JSON.stringify(database))
				getSeries()
			}
		}
	}

	return (
		<KeyboardAvoidingView enabled behavior='padding' style={styles.container}>
			<Text style={styles.title}>Minhas Séries</Text>
			{DB.series.length === 0 && (
				<Text>Adicione uma série abaixo</Text>
			)}
			{DB.series.length > 0 && (
				<FlatList
					data={DB.series}
					renderItem={({ item }) => (
						<Card title={item}/>
					)}
					keyExtractor={item => item}
					showsVerticalScrollIndicator={false}
				/>
			)}
			<View style={styles.addBtnContainer}>
				<TextInput
					placeholder="Adcionar uma série"
					style={styles.input}
					value={serie}
					onChangeText={setSerie}
				/>
				<TouchableOpacity style={styles.addBtn} onPress={handleAdd}>
					<Ionicons name="md-add" size={15} color="#FFF" />
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: StatusBar.currentHeight + 5,
	},
	title: {
		fontSize: 23,
		fontWeight: 'bold',
		padding: 15,
	},
	addBtnContainer: {
		flexDirection: 'row',
		marginVertical: 25,
		marginHorizontal: 50,
	},
	addBtn: {
		height: 50,
		width: 50,
		backgroundColor: 'rgba(50, 205, 50, 1)',
		borderRadius: 5,
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0,
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: StyleSheet.hairlineWidth,
		borderLeftWidth: 0,
	},
	input: {
		flex: 1,
		paddingHorizontal: 20,
		marginRight: 0,
		borderWidth: StyleSheet.hairlineWidth,
		borderRightWidth: 0,
		borderTopLeftRadius: 5,
		borderBottomLeftRadius: 5,
		fontSize: 15
	}
})
