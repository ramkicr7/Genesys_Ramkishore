import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import UserCard from "./components/UserCard";
import UserModal from "./components/UserModal";

function App() {

  const [users, setUsers] = useState([]);

  const [selectedUser, setSelectedUser] = useState(null);

  const [loading, setLoading] = useState(false);


  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));

  }, []);

  
  const fetchUserDetails = async (id) => {

    setLoading(true);

    try {

      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );

      const data = await response.json();

      setSelectedUser(data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="bg-gray-100 min-h-screen">

      <Navbar />

      <Sidebar />

      <main className="pt-24 md:ml-64 p-6">

        <h2 className="
          text-3xl
          font-bold
          mb-6
          text-gray-800
        ">
          User Profiles
        </h2>

        
        {loading && (
          <p className="text-blue-600 mb-4">
            Loading user details...
          </p>
        )}

        
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-6
        ">

          {users.map((user) => (

            <UserCard
              key={user.id}
              user={user}
              onClick={fetchUserDetails}
            />

          ))}

        </div>

      </main>

      
      {selectedUser && (

        <UserModal
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />

      )}

    </div>
  );
}

export default App;