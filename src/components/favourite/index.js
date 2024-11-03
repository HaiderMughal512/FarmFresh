import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Entypo';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  addToFavourite,
  removeFromFavourite,
} from '../../Redux/favourite/favouriteAction';

const Favourites = ({item}) => {
  const dispatch = useDispatch();
  const [isFavourite, setFavourite] = useState(false);

  const favourites = useSelector(
    state => state.favouriteReducer?.favouriteList,
  );
  const handleFavourite = () => {
    if (isFavourite) {
      console.log('Remove Favorite');

      dispatch(removeFromFavourite(item));
    } else {
      console.log('Add Favorite');

      dispatch(addToFavourite(item));
    }
  };

  const checkfavourite = () => {
    const isFav = favourites.some(prod => prod?.P_id == item?.P_id);
    setFavourite(isFav);
  };

  useEffect(() => {
    checkfavourite();
  }, [favourites, item]);

  return (
    <TouchableOpacity
      style={{
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: 'white',
        position: 'absolute',
        top: 10,
        right: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={handleFavourite}>
      {isFavourite ? (
        <Icon2 name="heart" size={20} color="red" />
      ) : (
        <Icon name="heart" size={20} color="black" />
      )}
    </TouchableOpacity>
  );
};

export default Favourites;
