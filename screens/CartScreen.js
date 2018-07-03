import React, { PureComponent } from 'react';
import { Text, ScrollView, Image, StyleSheet, View, Button } from 'react-native';
import GridList from 'react-native-grid-list';

export default class CartScreen extends PureComponent {
  static navigationOptions = {
    title: 'Cart',
  };
  
  renderItemSeparator = ({ item }) => (
    <View>
		<Image style={styles.image} source={item.thumbnail} />
		<Text>{item.thumbnail.uri}</Text>
		<Button
		  onPress={this.onPressLearnMore}
		  title="Learn More"
		  color="#841584"
		  accessibilityLabel="Learn more about this purple button"
		/>
    </View>
  );
	
  onPressLearnMore(){
    alert('Button clicked!');
  }
  
  render() {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
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
    flex: 1,
    margin: '5%',
  },
  gridSeparator: {
    borderWidth: 0,
  },
  image: {
    width: '50%',
    height: '50%',
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

const itemsSeparator = Array.from(Array(Object.keys(newImage).length)).map((_, index) => image(index));