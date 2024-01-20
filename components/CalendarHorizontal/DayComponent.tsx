import { StyleSheet } from 'react-native'
import React from 'react'
import { Text, View } from 'tamagui'
import StateCircle from './StatesComponent'
import { format } from 'date-fns'

const DayComponent = (props: any) => {
    const { Date, selectedDay, setSelectedDay, currentDate } = props
    
    const formattedDates = format(Date, 'ccc, d');

    return (
        <View 
            borderColor={Date?.getDay() == currentDate?.getDay() ? '$color.yellow5Light' :  '$color.red5Light'} 
            borderWidth='$1' 
            borderRadius="$14" 
            paddingHorizontal='$2' 
            paddingVertical='$6'>
            <Text 
                color='$color.yellow1Light'>
                    {formattedDates}
            </Text>
            <StateCircle
            Date={Date} 
            currentDate={currentDate} />
        </View>
    )
}

export default DayComponent