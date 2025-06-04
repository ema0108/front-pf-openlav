// src/services/auth.service.ts
import { supabase } from '../lib/supabase';
import { AuthError } from '@supabase/supabase-js';
import type { User } from '@supabase/supabase-js';

export const loginWithEmail = async (
  email: string, 
  password: string
): Promise<{ user: User | null; error: AuthError | null }> => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });
  return { user: data.user, error };
};

export const signUpWithEmail = async (
  email: string, 
  password: string,
  displayName: string
) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        display_name: displayName
      }
    }
  });
  return { user: data.user, error };
};

export const logout = async (): Promise<{ error: AuthError | null }> => {
  const { error } = await supabase.auth.signOut();
  return { error };
};

export const getCurrentUser = async (): Promise<User | null> => {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
};

export type { User };
