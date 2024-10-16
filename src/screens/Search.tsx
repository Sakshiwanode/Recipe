import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Recipe {
  recipe: {
    label: string;
    image: string;
  };
}

const Search = ({ navigation }: any) => {
  const [search, setSearch] = useState<string>('');
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const SearchRecipe = () => {
    var myHeaders = new Headers();
    myHeaders.append('accept', 'application/json');
    myHeaders.append('Accept-Language', 'en');

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=55517a84&app_key=06ccbd6df34b3d255b5cb2c5cf427d7d`,
    )
      .then(response => response.json())
      .then(result => setRecipes(result.hits))
      .catch(error => console.log('error', error));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={30} color="#fffefe" />
      </TouchableOpacity>

      <View style={styles.searchBox}>
        <Image source={require('../images/search.jpg')} style={styles.search} />
        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Please search here..."
          style={styles.placeholder}
        />
        {search !== '' && (
          <TouchableOpacity
            style={styles.clearButton}
            onPress={() => {
              setSearch('');
              setRecipes([]);
            }}>
            <Image source={require('../images/close.jpg')} style={styles.search} />
          </TouchableOpacity>
        )}
      </View>

      <TouchableOpacity onPress={SearchRecipe} style={styles.searchButton}>
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>

      <FlatList
        data={recipes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.recipeItem}>
            <Image source={{ uri: item.recipe.image }} style={styles.itemImage} />
            <View style={styles.itemTextContainer}>
              <Text style={styles.itemText}>{item.recipe.label}</Text>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#509750',
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  search: {
    width: 30,
    height: 40,
  },
  placeholder: {
    marginLeft: 15,
    fontSize: 16,
    color: '#9b9090',
    flex: 1,
  },
  searchBox: {
    width: '90%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    marginTop: 50,
  },
  clearButton: {
    padding: 10,
  },
  searchButton: {
    marginTop: 50,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  searchButtonText: {
    fontSize: 16,
    color: '#509750',

  },
  flatListContent: {
    paddingTop: 20,
    width: '100%',
  },
  recipeItem: {
    width: '90%',
    height: 100,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 9,
    alignSelf: 'center',
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  itemTextContainer: {
    marginLeft: 15,
    flex: 1,
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});
