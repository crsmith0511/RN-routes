/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import { Calendar, CalendarList} from 'react-native-calendars';

export default class Home extends Component {
  render() {
    return (
      <View>
        <CalendarList
          // // Enable horizontal scrolling, default = false
          horizontal={true}
          // // Enable paging on horizontal, default = false
          pagingEnabled={true}
          // Callback which gets executed when visible months change in scroll view. Default = undefined
          onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
          //Show days of other months on month page. Default = true
          hideExtraDays={false}
          // Max amount of months allowed to scroll to the past. Default = 50
          pastScrollRange={50}
          // Max amount of months allowed to scroll to the future. Default = 50
          futureScrollRange={50}
          // Enable or disable scrolling of calendar list
          scrollEnabled={true}
          // Enable or disable vertical scroll indicator. Default = false
          showScrollIndicator={true}

        />
      </View>
    );
  }
}
