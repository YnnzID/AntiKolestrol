import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Komentar } from '../types';

export function useKomentar() {
  const [komentar, setKomentar] = useState<Komentar[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchKomentar();
  }, []);

  async function fetchKomentar() {
    try {
      setLoading(true);
      const { data, error } = await supabase.from('komentar').select('*').order('dibuat_pada', { ascending: false });
      if (error) throw error;
      if (data) setKomentar(data as Komentar[]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function tambahKomentar(baru: Omit<Komentar, 'id' | 'suka' | 'dibuat_pada'>) {
    try {
      const { data, error } = await supabase.from('komentar').insert([baru]).select();
      if (error) throw error;
      if (data) setKomentar([data[0] as Komentar, ...komentar]);
      return { success: true };
    } catch (err) {
      console.error(err);
      return { success: false };
    }
  }

  return { komentar, loading, tambahKomentar };
}
