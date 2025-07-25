import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Auth functions
export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};

// Database functions
export const getAccounts = async (type?: 'premium' | 'variety') => {
  let query = supabase.from('accounts').select('*');
  if (type) {
    query = query.eq('type', type);
  }
  const { data, error } = await query;
  return { data, error };
};

export const getAccount = async (id: string) => {
  const { data, error } = await supabase.from('accounts').select('*').eq('id', id).single();
  return { data, error };
};

export const addAccount = async (account: Omit<any, 'id' | 'created_at'>) => {
  const { data, error } = await supabase.from('accounts').insert([account]);
  return { data, error };
};

export const updateAccount = async (id: string, updates: any) => {
  const { data, error } = await supabase.from('accounts').update(updates).eq('id', id);
  return { data, error };
};

export const deleteAccount = async (id: string) => {
  const { error } = await supabase.from('accounts').delete().eq('id', id);
  return { error };
};

export const getNews = async () => {
  const { data, error } = await supabase.from('news').select('*').order('created_at', { ascending: false });
  return { data, error };
};

export const getBanners = async () => {
  const { data, error } = await supabase.from('banners').select('*').order('created_at', { ascending: false });
  return { data, error };
};