import React, { useEffect, useState } from 'react';
import UsersList from '../components/UsersList';
import ErrorModal from '../../shared/components/UIElements/Error/ErrorModal';
import Spinner from '../../shared/components/UIElements/Error/LoadingSpinner';

const Users = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const sendRequest = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:5000/api/users');
        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(responseData.message);
        }
        setUsers(responseData.users);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };
    sendRequest();
  }, []);

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      <React.Fragment>
        <ErrorModal error={error} onClear={errorHandler} />
        {isLoading && (
          <div className="center">
            <Spinner />
          </div>
        )}
        {!isLoading && users && <UsersList users={users} />}
      </React.Fragment>
    </div>
  );
};

export default Users;
