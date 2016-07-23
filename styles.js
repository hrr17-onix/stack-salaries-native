import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
  heading: {
    fontSize: 35
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch'
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
    overflow:'hidden',
    borderRadius: 4,
    justifyContent: 'center',
    backgroundColor: '#2B68E6',
    alignItems: 'center'
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
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
    borderColor: 'grey',
    borderWidth: 1
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
  }
});