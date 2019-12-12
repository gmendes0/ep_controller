import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native'

export default function Card() {
	return (
		<View style={styles.container}>
			<Text style={styles.cradTitle}>Naruto</Text>
			<View style={styles.inputArea}>
				<TouchableOpacity style={[styles.controllBtn, styles.addBtn]}>
					<Text style={styles.btnText}>-</Text>
				</TouchableOpacity>
				<TextInput
					keyboardType='numeric'
					style={styles.input}
				>150</TextInput>
				<TouchableOpacity style={[styles.controllBtn, styles.removeBtn]}>
					<Text style={styles.btnText}>+</Text>
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
	btnText: {
		color: '#FFF',
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
