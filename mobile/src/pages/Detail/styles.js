import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 25,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#131418',
    marginBottom: 16,
    marginTop: 44,
  },

  incidentProperty: {
    fontSize: 14,
    color: '#eee',
    fontWeight: 'bold',
    marginTop: 24,
  },

  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    color: '#eee'
  },

  contactBox: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#131418',
    marginBottom: 16,
  },

  heroTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#eee',
    lineHeight: 30,
  },

  heroDescription: {
    fontSize: 15,
    color: '#eee',
    marginTop: 16
  },

  actions: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  action: {
    backgroundColor: '#E02041',
    borderRadius: 8,
    height: 50,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  actionText: {
    fontSize: 15,
    fontWeight: 'bold'
  }

});