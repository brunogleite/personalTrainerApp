import { ImageBackground } from 'react-native';
import { Input, ScrollView, Spinner, YStack } from 'tamagui';
import { Container, Title, Main, Subtitle } from '@/tamagui.config';
import { getSearchResults, getTrending, getWorkoutByDate } from '@/services/api';
import { useEffect, useState } from 'react';
import CalendarHorizontal from '@/components/CalendarHorizontal';
import useWorkoutByWorkoutDate from '@/hooks/useWorkoutByWorkoutDate';
import { supabase } from '@/utils/supabase';
import { useDays } from '@/provider/daysProvider';
import { format } from 'date-fns';
import WorkoutCard from '@/components/WorkoutList';

const HomePage = () => {
  const { currentDate } = useDays();

  const formattedCurrentDate = format(currentDate, 'yyyy, MM dd');

  const { 
    data, 
    isLoading, 
    isError 
  } = useWorkoutByWorkoutDate(formattedCurrentDate);

  useEffect((() => {
    console.log(data);
  }), [])

  /*const searchQuery = useQuery({
    queryKey: ['search', debouncedString],
    queryFn: () => getSearchResults(debouncedString),
    enabled: debouncedString.length > 0,
  });*/



  return (
    <Main backgroundColor='$gray2Dark'>
      <ImageBackground
        source={{
          uri: 'https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/ghQrKrcEpAlkzBuNoOCSxHQXWqw.jpg',
        }}
        style={{ width: '100%', height: 200 }}>
        <Container>
          <YStack>
            <Title
              color={'#fff'}
              enterStyle={{
                opacity: 0,
                scale: 1.5,
                y: -10,
              }}
              animation="quick">
              Trending
            </Title>
          </YStack>
        </Container>
      </ImageBackground>

      {isLoading && (
        <Spinner py={14} size="large" color={'$blue10'} />
      )}

      <CalendarHorizontal />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        py={40}
        contentContainerStyle={{ gap: 14, paddingLeft: 14 }}>
          <WorkoutCard />
          <WorkoutCard />
          <WorkoutCard />
          <WorkoutCard />
      </ScrollView>
    </Main>
  );
};
export default HomePage;