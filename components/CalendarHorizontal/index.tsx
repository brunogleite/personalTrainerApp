import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import DayComponent from './DayComponent'
import TopSectionCalendar from './TopSectionCalendar'
import { ScrollView, YStack } from 'tamagui'
import { addDays, eachDayOfInterval, format, subDays } from "date-fns"



const CalendarHorizontal = () => {
    const [dateRange, setDateRange] = useState<any>([]);
    const currentDate = new Date();
    const sevenDaysBefore = subDays(currentDate, 7);
    const fourDaysAfter = addDays(currentDate, 4);

  useEffect(() => {

    const generatedDates = eachDayOfInterval({ start: sevenDaysBefore, end: fourDaysAfter });
    setDateRange(generatedDates);
  }, []);

  const formattedDates = dateRange.map((date : any) => format(date, 'ccc, d'));

  const formattedCurrentDate = format(currentDate, 'EEEE, MMMM d');

  return (
    <View>
        <YStack>
            <TopSectionCalendar currentDate={formattedCurrentDate}></TopSectionCalendar>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                py={40}
                contentContainerStyle={{ gap: 14, paddingLeft: 14 }}>
                {formattedDates.map((formattedDate : any, index: any) => (
                  <DayComponent 
                  key={index} 
                  formattedDate={formattedDate} />
                ))}
            </ScrollView>
        </YStack>
    </View>
  )
}

export default CalendarHorizontal

const styles = StyleSheet.create({})