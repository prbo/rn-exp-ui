import React, { PureComponent, Component } from 'react';
import { AppRegistry, Text, ScrollView, Image, StyleSheet, View, Button } from 'react-native';
import GridList from 'react-native-grid-list';
import { 
		createStackNavigator, 
		createBottomTabNavigator, 
		createMaterialTopTabNavigator,
		createSwitchNavigator,
		createDrawerNavigator,
		} from 'react-navigation';
import CartScreen from '../screens/CartScreen';

export default class HomeScreen extends Component {
	
	static navigationOptions = {
		title: 'Women',
	};

	renderItemSeparator = ({ item }) => (
		<View style={styles.gridStyle}>
			<Image style={styles.image} source={item.thumbnail} />
			<Text>Rp.1000</Text>
		</View>
	);
		
	onPressLearnMore(){
		alert('Button clicked!');
	}
	  
	render() {
		return (
			<ScrollView style={styles.container} showsVerticalScrollIndicator={true}>
				<View style={styles.gridSeparator}>
				  <GridList
					cellHeight={'auto'}
					showSeparator
					data={itemsSeparator}
					numColumns={1}
					renderItem={this.renderItemSeparator}
					separatorBorderWidth={0}
				  />
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	
  container: {
	flex: 0,
	backgroundColor: 'white'
  },
  gridSeparator: {
	borderWidth: 0
  },
  gridStyle: {
	borderWidth: 2,	
	borderColor: 'white',
	height: 100,
	backgroundColor: 'white'
  },
  image: {
	width: '100%',
	height: '80%'
  }
});

const newImage = {
  0: 'fashion',
  1: 'cats',
  2: 'city',
  3: 'food',
  4: 'nightlife',
  5: 'fashion',
  6: 'people',
  7: 'nature',
  8: 'animals'
};

const image = index => ({
  thumbnail: {
	uri: `https://lorempixel.com/200/200/${
	  newImage[index % (Object.keys(newImage).length)]
	}`,
  },
});

const itemsSeparator = Array.from(Array(Object.keys(newImage).length)).map((_, index) => image(index));