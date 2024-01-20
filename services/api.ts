import { MediaType, TrendingResult } from '@/interfaces/apiresults';
import { supabase } from '@/utils/supabase';

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

export const getTrending = async (): Promise<TrendingResult> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=${API_KEY}&page=1`
  );
  const json = await response.json();

  return json;
};

export const getWorkoutByDate = async (client: any) => {
  let { data: workouts, error } = await client
  .from('workouts')
  .select("*")

  return workouts
}

export const getSearchResults = async (query: string): Promise<TrendingResult> => {
  console.log('SEARCH: ', query);

  const response = await fetch(
    `https://api.themoviedb.org/3/search/multi?language=en-US&api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );

  const data = await response.json();
  return data;
};

export const getMovieDetails = async (id: number, type: MediaType): Promise<any> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/${type}/${id}?language=en-US&api_key=${API_KEY}`
  );
  const data = await response.json();
  return data;
};

export const getUserWorkoutForDay = async (id: number, type: MediaType): Promise<any> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/${type}/${id}/credits?language=en-US&api_key=${API_KEY}`
  );
  const data = await response.json();
  return data;
};
