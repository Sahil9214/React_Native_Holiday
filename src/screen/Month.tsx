import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import {totalYear} from '../constant/data';
import {globalColors} from '../constant/style';
function Month({navigation}) {
  const months = Object.keys(totalYear);

  function renderMonth({item, index}) {
    function handlePress() {
      navigation.navigate('MonthName', {month: item});
    }

    const color = globalColors[index % globalColors.length];
    return (
      <Pressable
        onPress={handlePress}
        android_ripple={{color: '#ccc'}}
        style={[styles.monthContainer, {backgroundColor: color.color}]}>
        <Text style={styles.month}>{item}</Text>
      </Pressable>
    );
  }
  return (
    <FlatList
      data={months}
      keyExtractor={(_, index) => index.toString()}
      renderItem={renderMonth}
      numColumns={2}
    />
  );
}

export default Month;

const styles = StyleSheet.create({
  monthContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
    padding: 20,
    height: 150,
  },
  month: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
