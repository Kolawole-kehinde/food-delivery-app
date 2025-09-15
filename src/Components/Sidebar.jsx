/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { useEffect, useState } from 'react';
import { supabase } from '../libs/supabase';

const Sidebar = React.memo(({ currentUser, onSelectUser }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    
    const loadUsers = async () => {
      try {
        const { data, error } = await supabase
          .from('profiles') 
          .select('id, username, avatar_url') 
          .neq('id', currentUser.id)
          .order('username', { ascending: true });

        if (error) throw error;
        if (mounted) setUsers(data || []);
      } catch (err) {
        console.error('Failed to load users:', err);
        if (mounted) setError(err.message);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    if (currentUser?.id) loadUsers();

    return () => { mounted = false; };
  }, [currentUser?.id]);

  if (error) return <div className="p-4 text-red-500">Error loading users</div>;
  if (loading) return <div className="p-4">Loading users...</div>;

  return (
    <div className="w-1/3 border-r overflow-y-auto p-4 bg-white">
      <h2 className="font-bold mb-4 text-lg">Chats</h2>
      {users.length > 0 ? (
        users.map(user => (
          <div
            key={user.id}
            onClick={() => onSelectUser(user)}
            className="cursor-pointer p-3 hover:bg-gray-100 rounded-lg flex items-center"
          >
            {user.avatar_url && (
              <img 
                src={user.avatar_url} 
                alt={user.username}
                className="w-8 h-8 rounded-full mr-3"
              />
            )}
            <span className="font-medium">{user.username}</span>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No other users found</p>
      )}
    </div>
  );
});

export default Sidebar;