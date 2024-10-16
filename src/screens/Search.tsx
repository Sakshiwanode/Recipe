import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, FlatList, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Recipe {
  recipe: {
    source: string;
    label: string;
    image: string;
  };
}

const Search = ({ navigation }: any) => {
  const [search, setSearch] = useState<string>('');
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(false); // State to track loading

  const SearchRecipe = () => {
    setLoading(true); // Start loading
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
      .then(result => {
        setRecipes(result.hits);
      })
      .catch(error => console.log('error', error))
      .finally(() => {
        setLoading(false); // Stop loading after fetch
      });
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

      {loading ? ( // Show loading indicator while fetching
        <ActivityIndicator size="large" color="#fff" style={styles.loadingIndicator} />
      ) : (
        <FlatList
          data={recipes}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.recipeItem} onPress={() => { navigation.navigate('Details', { data: item }); }}>
              <Image source={{ uri: item.recipe.image }} style={styles.itemImage} />
              <View style={styles.itemTextContainer}>
                <Text style={styles.itemText}>{item.recipe.label}</Text>
                <Text style={styles.sourceText}>{item.recipe.source}</Text>
              </View>
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.flatListContent}
        />
      )}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginTop: 20, // Adjusted margin for better spacing
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  searchButtonText: {
    fontSize: 16,
    color: '#509750',
  },
  loadingIndicator: {
    marginTop: 20,
  },
  flatListContent: {
    paddingTop: 20,
    width: '100%',
  },
  recipeItem: {
    width: 350,
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
  sourceText: {
    fontSize: 14,
    color: '#7a7a7a',
  },
});
