import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import DayComponent from './DayComponent'
import TopSectionCalendar from './TopSectionCalendar'
import { ScrollView, YStack } from 'tamagui'
import { addDays, eachDayOfInterval, format, subDays } from "date-fns"
import { useDays } from '@/provider/daysProvider'



const CalendarHorizontal = () => {
  const { dateRange, setDateRange, currentDate } = useDays();  
    const [isVisible, setIsVisible] = useState(true);
    const [selectedDay, setSelectedDay] = useState<any>(new Date());
    const sevenDaysBefore = subDays(currentDate, 7);
    const fourDaysAfter = addDays(currentDate, 4);

  useEffect(() => {

    const generatedDates = eachDayOfInterval({ start: sevenDaysBefore, end: fourDaysAfter });
    setDateRange(generatedDates);

  }, []);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const formattedCurrentDate = format(currentDate, 'EEEE, MMMM d');

  return (
    <View>
        <YStack>
            <TopSectionCalendar 
            currentDate={formattedCurrentDate} 
            toggleVisibility={toggleVisibility} />
            {isVisible &&
              <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  py={40}
                  contentContainerStyle={{ gap: 14, paddingLeft: 14 }}>
                  {dateRange.map((date : any, index: any) => (
                    <DayComponent 
                    key={index} 
                    Date={date}
                    selectedDay={selectedDay}
                    setSelectedDay={setSelectedDay}
                    currentDate={currentDate} />
                  ))}
              </ScrollView>
            }
        </YStack>
    </View>
  )
}

export default CalendarHorizontal

const styles = StyleSheet.create({})