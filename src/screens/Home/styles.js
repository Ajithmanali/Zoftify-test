import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    padding: 15,
  },
  itemWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 16,
    lineHeight: 50,
    flexWrap: 'wrap',
  },
  leftWrapper: {
    flex: 1,
  },
  rightWrapper: {
    flex: 2,
    marginLeft: 15,
  },
});
