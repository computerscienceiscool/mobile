import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet'
import ProjectList from './ProjectList'
import GoogleAnalytics from 'react-native-google-analytics-bridge'
import theme from './theme'
import {GLOBALS} from './constants/globals'

GoogleAnalytics.setTrackerId(GLOBALS.GOOGLE_ANALYTICS_TRACKING)
GoogleAnalytics.trackEvent('view', 'Home')

class ZooniverseMobile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ProjectList />
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '$appBackgroundColor'
  },
});

EStyleSheet.build(theme);
AppRegistry.registerComponent('ZooniverseMobile', () => ZooniverseMobile);
