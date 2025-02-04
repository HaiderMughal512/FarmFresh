import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import styles from '../card/styles';
import Card from '../card';

export default function Index({list, search}) {
  const filteredList = list?.filter(item =>
    item?.P_name.toLowerCase().includes(search.toLowerCase()),
  );

  const renderItem = ({item}) => <Card item={item} />;

  if (!list || list.length === 0) {
    return <Text style={style.noItemText}>No items found</Text>;
  }

  if (filteredList.length === 0) {
    return <Text style={style.noItemText}>No items found</Text>;
  }

  return (
    <FlatList
      data={filteredList}
      renderItem={renderItem}
      keyExtractor={item => item.P_id.toString()}
      contentContainerStyle={styles.listContainer}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
}

const style = StyleSheet.create({
  noItemText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#888',
    marginVertical: 20,
  },
});
// import {View, Text, FlatList} from 'react-native';
// import React from 'react';
// import {fakeTopSellingData} from '../../utils/Data';
// import styles from '../card/styles';
// import Card from '../card';

// export default function index({list, search}) {
//   const renderItem = ({item}) => <Card item={item} />;
//   return (
//     <FlatList
//       // data={
//       //   list && list.length > 0
//       //     ? list?.filter(item =>
//       //         item.toLowerCase().includes(search.toLowerCase()),
//       //       )
//       //     : []
//       // }
//       data={
//         list && list.length > 0
//           ? list?.filter(item =>
//               item?.P_name.toLowerCase().includes(search.toLowerCase()),
//             )
//           : []
//       }
//       renderItem={renderItem}
//       keyExtractor={item => item.P_id}
//       contentContainerStyle={styles.listContainer}
//       horizontal={true}
//       showsHorizontalScrollIndicator={false}
//     />
//   );
// }
