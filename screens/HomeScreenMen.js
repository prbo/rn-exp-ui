import React, { PureComponent, Component } from 'react';
import { AppRegistry, Text, ScrollView, Image, StyleSheet, View, Button, FlatList } from 'react-native';
import GridList from 'react-native-grid-list';
import { 
		createStackNavigator, 
		createBottomTabNavigator, 
		createMaterialTopTabNavigator,
		createSwitchNavigator,
		createDrawerNavigator,
		} from 'react-navigation';

export default class HomeScreen extends PureComponent {
	
	static navigationOptions = {
		title: 'Men',
	};

	renderItemSeparatorV = ({ item }) => (
		<View style={styles.gridStyleV}>
			<Image style={styles.imageV} source={item.thumbnail} />
			<Text>Rp.1000</Text>
		</View>
	);
	
	renderItemSeparatorH = ({ item }) => (
		<View style={{
          flexDirection: 'column',
          height: 200,
          width: 200,
		  padding: 10,
        }}>
			<Image style={styles.imageH} source={item.thumbnail} />
			<Text>Rp.1000</Text>
		</View>
	);
		
	onPressLearnMore(){
		alert('Button clicked!');
	}
	  
	render() {
		return (
			<ScrollView showsVerticalScrollIndicator={true}>
				{/*<View>*/}
					<ScrollView style={styles.containerH} showsHorizontalScrollIndicator={true} horizontal={true}>
						<View style={styles.gridStyleH}>
							<Image style={styles.imageH} source={{uri: `https://lorempixel.com/200/200/business`}} />
						</View>
						<View style={styles.gridStyleH}>
							<Image style={styles.imageH} source={{uri: `https://lorempixel.com/200/200/business`}} />
						</View>
						<View style={styles.gridStyleH}>
							<Image style={styles.imageH} source={{uri: `https://lorempixel.com/200/200/business`}} />
						</View>
					</ScrollView>
					<View style={styles.gridStyleV}>
						<Image style={styles.imageV} source={{uri: `https://lorempixel.com/200/200/business`}} />
					</View>
					<ScrollView bounces={false} style={styles.containerV} showsVerticalScrollIndicator={true}>
						<View style={styles.gridSeparator}>
						  <GridList
							cellHeight={'auto'}
							showSeparator
							data={itemsSeparatorV}
							numColumns={2}
							renderItem={this.renderItemSeparatorV}
							separatorBorderWidth={0}
						  />
						</View>
					</ScrollView>
				{/*</View>*/}
			</ScrollView>		
		);
	}
}

const styles = StyleSheet.create({
	
  containerV: {
	flex: 0,
	backgroundColor: 'white'
  },
  containerH: {
	flex: 0,
	backgroundColor: 'skyblue'
  },
  gridSeparator: {
	borderWidth: 0
  },
  gridStyleV: {
	borderWidth: 2,	
	borderColor: 'white',
	height: 100,
	backgroundColor: 'white'
  },
  gridStyleH: {
	borderWidth: 2,	
	borderColor: 'white',
	height: 200,
	width: 200,
	backgroundColor: 'white'
  },
  imageV: {
	width: '100%',
	height: '80%'
  },
  imageH: {
	width: '100%',
	height: '100%'
  }
});

const newImage = {
  0: 'business',
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

const itemsSeparatorV = Array.from(Array(Object.keys(newImage).length)).map((_, index) => image(index));
const itemsSeparatorH = Array.from(Array(Object.keys(newImage).length)).map((_, index) => image(index));