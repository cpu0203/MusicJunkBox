import React from 'react';
import { StyleSheet } from 'react-native';
import { Divider, List, ListItem } from '@ui-kitten/components';

interface IListItem {
  title: string;
  description: string;
}

const data = new Array(8).fill({
  title: 'Item',
  description: 'Description for Item',
})

const mData = [
  {title: 'JHgfegyfe fgdfg', description: 'Прикольный песенк'},
  {title: 'гнепо пн по нпшгнп', description: 'Еще лучше песенк'},
  {title: 'купв ыкпквап fgdfg', description: 'Нормально так песенк'},
  {title: 'вкапвапвыап  fgdfg', description: 'Вот оно песенк'},
  {title: 'JHgfegyвкпвапfe fgdfg', description: 'Послушаем песенк'},
  {title: 'впвапвап fgdfg', description: 'Попробуй-ка песенк'},
  {title: 'апвапавп fgdfg', description: 'Новейшая совсем песенк'}
]

const Tracklist = () => {

  const renderItem = ({ item, index }) => (
    <ListItem
      style={{backgroundColor: '#b7d05f'}}
      title={`${item.title} ${index + 1}`}
      description={`${item.description} ${index + 1}`}
      onPress={()=> console.log('IM PRESSED!')}
    />
  );

  return (
    <List
      style={styles.container}
      data={mData}
      ItemSeparatorComponent={Divider}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    maxHeight: '60%',
    width: '100%',
  },
});


export default Tracklist