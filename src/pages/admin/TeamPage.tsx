import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

interface User {
  id: string;
  name: string;
  role: string;
}

const TeamPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersCollection = collection(db, 'users');
        const usersSnapshot = await getDocs(usersCollection);
        const usersList = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as User));
        setUsers(usersList);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-brand-text">Team Management</h1>
      <p className="text-gray-500 mb-8">This page is for managing the team.</p>
      <div className="space-y-4">
        {users.map(user => (
          <div key={user.id} className="p-4 bg-white rounded-lg shadow-md flex justify-between items-center">
            <div>
              <h2 className="text-lg font-bold text-brand-text">{user.name}</h2>
              <p className="text-gray-500">Role: {user.role}</p>
            </div>
            <button className="px-4 py-2 text-sm rounded-md bg-brand-primary text-white">Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
