import { useQuery } from '@tanstack/react-query';
import { supabase } from '../libs/supabase';

export const useProduct = (id) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: async () => {
      if (!id) throw new Error('Product ID is required');

      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw new Error(error.message);

  
      if (!data) throw new Error('Product not found');
      
      return data;
    },


  });
};
