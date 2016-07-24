import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
  heading: {
    fontSize: 40,
    color: 'white'
  },
  dataHead: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    height: null,
    width: null
  },
  center: {
    alignItems: 'center'
  },
  search: {
    justifyContent: 'center',
    padding: 1
  },
  button: {
    height:30,
    padding:10,
    margin:10,
    overflow:'hidden',
    borderRadius: 4,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white'
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  textEdit: {
    height: 40,
    marginLeft: 15,
    marginRight: 15
  },
  location: {
    flex: 1,
    flexDirection: 'row'
  },
  city: {
    width:50,
    height: 40,
    borderColor: 'grey',
    borderWidth: 1
  },
  salaryLabel: {
    marginLeft: 29,
    marginRight: 29,
    color: 'white'
  },
  salaryLabel2: {
    marginLeft: 39,
    marginRight: 39,
    color: 'white'
  },
  chart: {
    height: 300,
    margin: 15,
    opacity: 1
  }
});