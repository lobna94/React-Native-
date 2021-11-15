import axios from 'axios';
import React, {useState, useEffect, useCallback} from 'react';
import {ScrollView, View, FlatList, Text, ActivityIndicator} from 'react-native';
import {COLORS, dummy_data} from '../../common';
import {MovieCard, MovieList, SearchBar} from '../../components';
import {Header} from '../../components';
import {getAllMovies} from '../../services';
import {client} from '../../services/client';
import styles from './styles';
import _ from 'lodash'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useDispatch, useSelector } from 'react-redux';
import {storeMovie} from "../../store/actions"
import { useNavigation } from '@react-navigation/native';

export default function Search() {
  const [value, setValue] = useState('');
  const [data, setData] = useState([]);
  const[loading, setLoading] = useState(false);
 const dispatch = useDispatch();
 const movies = useSelector(state => state.movies);
 const navigation = useNavigation();

  const getData = useCallback( 
    _.debounce( async (_vaule) => {
      setLoading(true)
    const res = await getAllMovies(_vaule);
    console.log(res);
    setData(res)
    setLoading(false)
  }, 1000), [],)


const onPressMovie = (movie) => {
  dispatch(storeMovie(movie))
  navigation.navigate('Movie', {id: movie.imdbID})

}


  const onChangeText = async (_vaule) => {
    setValue(_vaule);
    await getData(_vaule);
  }

  const onPressSearch = async () => {
    setLoading(true)
    const data = await getAllMovies(value)
    setData(data)
    setLoading(false)

  }


  return (
    <View style={styles.container}>
      <View style={styles.topView}>
      <SearchBar
       value={value} 
        onChange={(val) => onChangeText(val)}
        onPress={() => onPressSearch()}
      />
      <Header text={!data ? 'Recent Searches' : 'Search Results' } />
      </View>
      {loading? <ActivityIndicator color={COLORS.sun} style={styles.activityIndicator}/> : <MovieList data={!data || value=="" ? movies: data} onPress={(item) => onPressMovie(item)} /> }
    </View>
  );
}
