import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Entypo';
import React, {useEffect, useState, useRef} from 'react';
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';
import {useDispatch, useSelector} from 'react-redux';
import {
  addToFavourite,
  removeFromFavourite,
} from '../../Redux/favourite/favouriteAction';

const Favourites = ({item}) => {
  const user = useSelector(state => state.userReducer?.user);
  const dispatch = useDispatch();
  const [isFavourite, setFavourite] = useState(false);
  const menuRef = useRef();

  const favourites = useSelector(
    state => state.favouriteReducer?.favouriteList,
  );

  const openMenu = () => {
    menuRef.current.show();
  };

  const closeMenu = () => {
    menuRef.current.hide();
  };

  const handleEdit = () => {
    console.log('Edit clicked');
    closeMenu();
  };

  const handleDelete = () => {
    console.log('Delete clicked');
    closeMenu();
  };

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
      }}>
      {user?.U_role === 'Farmer' ? (
        <Menu
          ref={menuRef}
          anchor={
            <TouchableOpacity onPress={openMenu}>
              <Icon name="more-vertical" size={20} color="black" />
            </TouchableOpacity>
          }
          onRequestClose={closeMenu}>
          <MenuItem onPress={handleEdit}>Edit</MenuItem>
          <MenuDivider />
          <MenuItem onPress={handleDelete}>Delete</MenuItem>
        </Menu>
      ) : isFavourite ? (
        <Icon2 name="heart" size={20} color="red" onPress={handleFavourite} />
      ) : (
        <Icon name="heart" size={20} color="black" onPress={handleFavourite} />
      )}
    </TouchableOpacity>
  );
};

export default Favourites;
