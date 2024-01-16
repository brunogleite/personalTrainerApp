import React, { createContext, useState, useEffect } from 'react';
import { supabase } from '@/utils/supabase';
import { Session } from '@supabase/supabase-js';
import { Redirect } from 'expo-router';

type ContextProps = {
	user: null | boolean;
	session: Session | null;
};

const AuthContext = createContext<Partial<ContextProps>>({});

interface Props {
	children: React.ReactNode;
}

const AuthProvider = (props: Props) => {
	// user null = loading
	const [user, setUser] = useState<null | boolean>(null);
	const [session, setSession] = useState<Session | null>(null);

	useEffect(() => {
		const session = supabase.auth.getSession();
        session.then((res) => {
		setSession(res?.data?.session);
		setUser(res?.data?.session ? true : false);
		const { data: authListener } = supabase.auth.onAuthStateChange(
			async (event, session) => {
				console.log(`Supabase auth event: ${event}`);
                if(!user) {
                    setUser(false);
                }
				setSession(session);
				setUser(session ? true : false);
			}
		);
		return () => {
			authListener!.subscription.unsubscribe();
		};
    });
	}, [user]);
 
	return (
		<AuthContext.Provider
			value={{
				user,
				session,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

const useAuth = () => React.useContext(AuthContext);

export { useAuth, AuthProvider };