import React, { createContext, useState, useEffect } from 'react';
import { supabase } from '@/utils/supabase';
import { Session } from '@supabase/supabase-js';
import { Redirect } from 'expo-router';
import { addDays, eachDayOfInterval, subDays } from 'date-fns';


const DaysContext = createContext<Partial<any>>({});

interface Props {
	children: React.ReactNode;
}

const DaysProvider = (props: Props) => {
    const [dateRange, setDateRange] = useState<any>([]);
    const currentDate = new Date();
    const sevenDaysBefore = subDays(currentDate, 7);
    const fourDaysAfter = addDays(currentDate, 4);

    useEffect(() => {

        const generatedDates = eachDayOfInterval({ start: sevenDaysBefore, end: fourDaysAfter });
        setDateRange(generatedDates);
    
      }, []);

 
	return (
		<DaysContext.Provider
			value={{
				dateRange,
				setDateRange,
                currentDate,
			}}
		>
			{props.children}
		</DaysContext.Provider>
	);
};

const useDays = () => React.useContext(DaysContext);

export { useDays, DaysProvider };