import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {totalYear} from '../constant/data';
import {globalColors} from '../constant/style';
const MonthName = ({route}) => {
  const monthsDescription = route.params.month;
  const data = totalYear[monthsDescription];

  function rendermonthDetails({item, index}) {
    const color = globalColors[index % globalColors.length];
    return (
      <View style={[styles.container, {backgroundColor: color.color}]}>
        <Text style={styles.Date}>{item.Date}</Text>
        <Text style={styles.Occassion}>{item.Occassion}</Text>
        <Text style={styles.Day}>{item.Day}</Text>
      </View>
    );
  }

  return (
    <>
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={rendermonthDetails}
        numColumns={2}
      />
    </>
  );
};

export default MonthName;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    gap: 20,
    borderRadius: 8,
    padding: 20,
    margin: 8,
  },
  Occassion: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000',
    fontSize: 16,
  },
  Day: {textAlign: 'center', fontWeight: 'bold', color: '#000', fontSize: 16},
  Date: {textAlign: 'center', fontWeight: 'bold', color: '#000', fontSize: 16},
});
