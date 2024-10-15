import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {MEAL_FILTERS} from '../Data';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';


const AnimatedBtn=Animatable.createAnimatableComponent(TouchableOpacity)
interface Recipe {
  recipe: {
    label: string;
    image: string;
  };
}

const Home = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const navigation: any = useNavigation();

  useEffect(() => {
    getTrendyRecipes();
  }, []);

  const getTrendyRecipes = () => {
    const myHeaders = new Headers();
    myHeaders.append('accept', 'application/json');
    myHeaders.append('Accept-Language', 'en');

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=food&app_id=55517a84&app_key=06ccbd6df34b3d255b5cb2c5cf427d7d`,
    )
      .then(response => response.json())
      .then(result => {
        console.log(result.hits);
        setRecipes(result.hits);
      })
      .catch(error => console.log('error', error));
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.topView}>
        <Animatable.Image animation={'slideInUp'}
          source={require('../images/cooking.jpg')}
          style={styles.banner}
        />
        <View style={styles.transparentView}>
          <Animatable.Text animation={'slideInUp'} style={styles.logo}>RecipePro</Animatable.Text>
          <AnimatedBtn animation={'slideInUp'}activeOpacity={0.8} style={styles.searchBox}>
            <Image
              source={require('../images/search.jpg')}
              style={styles.search}
            />
            <Text style={styles.placeholder}>Please search here......</Text>
          </AnimatedBtn>
          <Animatable.Text animation={'slideInUp'} style={styles.note}>
            Search 1000+ recipes easily with one click
          </Animatable.Text>
        </View>
      </View>

      <Animatable.Text animation={'slideInUp'} style={styles.heading}>Categories</Animatable.Text>
      <View>
        <FlatList
          horizontal
          data={MEAL_FILTERS}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <AnimatedBtn animation={'slideInUp'} style={styles.categoryItem}>
              <View style={styles.card}>
                <Image source={item.icon} style={styles.categoryIcon} />
              </View>
              <Text style={styles.category}>{item.title}</Text>
            </AnimatedBtn>
          )}
        />
      </View>

      <Animatable.Text animation={'slideInUp'} style={styles.heading}>Trendy Recipes</Animatable.Text>
      <View>
        <FlatList
          contentContainerStyle={{marginTop: 10}}
          horizontal
          data={recipes}
          renderItem={({item}) => (
            <AnimatedBtn animation={'slideInUp'}
              style={styles.recipeItem}
              onPress={() => {
                navigation.navigate('Details', {
                  data: item,
                });
              }}>
              <Animatable.Image animation={'slideInUp'}
                source={{uri: item.recipe.image}}
                style={styles.recipeImage}
              />
              <View style={styles.transparentView}>
                <Text style={styles.recipeLabel}>{item.recipe.label}</Text>
              </View>
            </AnimatedBtn>
          )}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeff5',
  },
  topView: {
    width: '100%',
    height: '40%',
  },
  banner: {
    width: '100%',
    height: '100%',
  },
  transparentView: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logo: {
    fontSize: 40,
    color: '#ffffff',
    fontWeight: 'bold',
    paddingLeft: 20,
    alignSelf: 'flex-start',
    marginTop: 40,
  },
  searchBox: {
    width: '90%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    marginTop: 30,
  },
  search: {
    width: 40,
    height: 40,
  },
  placeholder: {
    marginLeft: 15,
    fontSize: 16,
    color: '#9b9090',
  },
  note: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: '600',
    marginTop: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
    color: 'black',
    marginLeft: 20,
  },
  categoryItem: {
    width: 120,
    height: 120,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '80%',
    height: '70%',
    borderRadius: 9,
    shadowColor: 'rgba(0,0,0,.3)',
    shadowOpacity: 6,
    backgroundColor: '#fcfcfc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryIcon: {
    width: 50,
    height: 50,
    tintColor: '#7edd9d',
    color: 'black',
  },
  category: {
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
    alignSelf: 'center',
    marginTop: 10,
  },
  recipeItem: {
    width: 180,
    height: 220,
    marginLeft: 20,
    borderRadius: 9,
    overflow: 'hidden',
  },
  recipeImage: {
    width: '100%',
    height: '100%',
    borderRadius: 9,
    marginBottom: 10,
  },
  recipeLabel: {
    marginTop: 90,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#f8f6f6',
    textAlign: 'center',
  },
});
