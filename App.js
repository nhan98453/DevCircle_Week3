import React from 'react';
import { StyleSheet, Text, View,SafeAreaView  } from 'react-native';
import Result from './components/Result';
import Choise from './components/Choise';
import {CHOICES,getRoundOutcome,getResultColor} from './until';
import Game from './components/Game'
export default class App extends React.Component {
	constructor(props){
		super(props);
		this.state={
			computerChoice:{},
			playerChoice:{},
			result:'Let press button',
			total:0,
			win:0,
			lose:0,
		}
	}
	
	onPress = playerChoice => {
		const [result, computerChoice] = getRoundOutcome(playerChoice);
		this.setState({
			computerChoice,
			playerChoice,
			result,
			total:this.state.total+1.,
			win:(result==='Victory!')?this.state.win+1:this.state.win,
			lose:(result==='Defeat!')?this.state.lose+1:this.state.lose,
		});
	};
	render(){
		return (
			<SafeAreaView  style={styles.container}>
				<Result result={this.state} style={styles.header}/>
				<Choise style={styles.playArea} playerChoice={this.state.playerChoice} computerChoice={this.state.computerChoice}></Choise>
				<Game onPress={this.onPress} CHOICES={CHOICES} style={styles.choiseArea}/>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop:25
	},
	header:{
		flex:0.15,
		backgroundColor:'red',
	},
	playArea:{
		flex:0.55,
	},
	choiseArea:{
		flex:0.3,
		backgroundColor:'blue'
	},
});