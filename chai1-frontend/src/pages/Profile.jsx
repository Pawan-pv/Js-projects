import  { useEffect, useState} from 'react'
import {fetchUserData } from "../ClientAplis/Api"

function Profile() {
    
        const [data, setData] = useState(null);
        const [error, setError] = useState(null);
        const [isLoading, setIsLoading] = useState(true);
      
        useEffect(() => {
          const fetchData = async () => {
            try {
              const result = await fetchUserData();
              setData(result.data);
            } catch (error) {
              setError(error);
            } finally {
              setIsLoading(false);
            }
          };
      
          fetchData();
        }, []); // Empty dependency array means this useEffect runs once after the initial render
        console.log(data)
        if (isLoading) return <div>Loading...</div>;
        if (error) return <div>Error loading profile: {error.message}</div>;
      
        return (
          <div>
            <h1>User Profile</h1>
            <p>Name: {data?.user?.name}</p>
            <p>Email: {data?.user?.email}</p>
            {/* Add more fields as needed */}
          </div>
        );
      }
      
export default Profile;