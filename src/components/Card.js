import React, { useState, useEffect } from 'react'
import { AsyncStorage, StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function Card(props) {
	const [title, setTitle] = useState(props.title)

	const [ep, setEp] = useState(0)

	useEffect(() => {
		async function getEps() {
			const response = await AsyncStorage.getItem(title)
			if (response) setEp(Number(response))
		}
		getEps()
	}, [])

	useEffect(() => {
		async function storeEP() {
			await AsyncStorage.setItem(title, String(ep))
		}
		storeEP()
	}, [ep])

	const incrementEP = (currentEP) => currentEP + 1
	const decrementEP = (currentEP) => {
		if (currentEP > 0) {
			return currentEP - 1
		} else {
			return 0
		}
	}
	const isNumeric = (value) => typeof value === 'number'

	function handleChange(value) {
		const inputNumber = value.replace(/\D/g, '')
		if (isNumeric(Number(inputNumber))) {
			setEp(Number(inputNumber))
		} else {
			setEp(inputNumber)
		}
	}

	return (
		<View style={styles.container}>
			<Text style={styles.cradTitle}>
				{title}
			</Text>
			<View style={styles.inputArea}>
				<TouchableOpacity
					style={[styles.controllBtn, styles.removeBtn]}
					onPress={() => setEp(decrementEP(ep))}
				>
					<Ionicons name="md-remove" size={16} color="#FFF" />
				</TouchableOpacity>
				<TextInput
					keyboardType='numeric'
					style={styles.input}
					onChangeText={handleChange}
				>{ep}</TextInput>
				<TouchableOpacity
					style={[styles.controllBtn, styles.addBtn]}
					onPress={() => setEp(incrementEP(ep))}
				>
					<Ionicons name="md-add" size={16}  color="#FFF" />
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingVertical: 30,
		width: 375,
		margin: 25,
		justifyContent: 'center',
		backgroundColor: 'rgba(255, 255, 255, 1)',
		borderRadius: 5,
		borderColor: '#000',
		borderStyle: 'solid',
		borderWidth: StyleSheet.hairlineWidth,
	},
	cradTitle: {
		fontSize: 18,
		alignSelf: 'center',
	},
	inputArea: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: 30,
	},
	controllBtn: {
		paddingHorizontal: 10,
		paddingVertical: 5,
		marginHorizontal: 15,
		borderRadius: 3,
	},
	addBtn: {
		backgroundColor: 'rgba(50, 205, 50, 1)',
	},
	removeBtn: {
		backgroundColor: 'rgba(205, 50, 58, 1)',
	},
	input: {
		borderWidth: StyleSheet.hairlineWidth,
		width: 80,
		paddingVertical: 5,
		paddingHorizontal: 10,
		alignItems: 'center',
		justifyContent: 'center',
		alignContent: 'center',
		textAlign: 'center',
		fontSize: 18,
	}
})
