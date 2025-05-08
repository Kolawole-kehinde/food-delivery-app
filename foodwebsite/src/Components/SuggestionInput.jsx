import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { supabase } from '../libs/supabase';
import toast from 'react-hot-toast';


function SuggestionInput() {
  const [suggestion, setSuggestion] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (suggestion.trim() === '') {
      toast.error('Please enter a suggestion.');
      return;
    }
  
    setLoading(true);
  
    const { error } = await supabase
      .from('suggestions')
      .insert([{ message: suggestion }]);
  
    if (error) {
      toast.error('Failed to submit. Please try again.');
    } else {
      toast.success('Thank you for your suggestion!');
      setSuggestion('');
    }
  
    setLoading(false);
  };
  return (
    <div className="flex flex-col items-start gap-3 w-full lg:w-auto">
      <p className="font-semibold">What feature would you love to have?</p>
      <div className="flex w-full sm:w-auto">
        <input
          type="text"
          placeholder="Kindly drop your suggestions"
          value={suggestion}
          onChange={(e) => setSuggestion(e.target.value)}
          className="px-4 py-2 rounded-l-full w-full sm:w-96 text-black"
        />
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-orange-500 text-white px-4 rounded-r-full hover:bg-orange-600 flex items-center justify-center"
        >
          {loading ? '...' : <FiArrowRight size={20} />}
        </button>
      </div>
    </div>
  );
}

export default SuggestionInput;
