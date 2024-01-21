import { getWorkoutByDate } from "@/services/api";
import { supabase } from "@/utils/supabase";
import { useQuery } from "@tanstack/react-query";

function useWorkoutByWorkoutDate(formattedCurrentDate: string) {
    const client = supabase;
    const queryKey = ['workoutDate'];
   
    const queryFn = async () => {
      return getWorkoutByDate(client, formattedCurrentDate).then(
        (result) => result
      );
    };
   
    return useQuery({ queryKey, queryFn });
  }
   
  export default useWorkoutByWorkoutDate;
