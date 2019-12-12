import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import Card from './components/Card'

export default function Home() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Minhas Séries</Text>
			<Card />
			<View style={styles.addBtnContainer}>
				<TouchableOpacity style={styles.addBtn}>
					<Text style={styles.addBtnText}>Adicionar série</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	addBtnContainer: {
		flexDirection: 'row',
	},
	addBtn: {
		height: 50,
		flex: 1,
		marginTop: 25,
		marginBottom: 50,
		marginHorizontal: 50,
		backgroundColor: 'rgba(50, 205, 50, 1)',
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center',
	},
	addBtnText: {
		fontSize: 15,
		color: '#FFF',
	}
})
