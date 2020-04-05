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

  headerText: {
    fontSize: 15,
    color: '#eee'
  },

  headerTextBold: {
    fontWeight: 'bold'
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: 24,
    color: '#eee'
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#eee'
  },

  incidentList: {
    marginTop: 24,
  },

  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#131418',
    marginBottom: 16
  },

  incidentProperty: {
    fontSize: 14,
    color: '#eee',
    fontWeight: 'bold'
  },

  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: '#eee'
  },

  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center'
  },

  detailsButtonText: {
    color: '#E02041',
    fontSize: 15,
    fontWeight: 'bold'
  }

});