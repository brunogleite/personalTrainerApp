import DetailsPage from '@/components/DetailsPage';
import { MediaType } from '@/interfaces/apiresults';
import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'tamagui';

const Page = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
  <View>
   <Text>user id : {id}</Text>
  </View>
  )
};
export default Page;