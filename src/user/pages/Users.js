import React, { useEffect, useState } from 'react';
import UsersList from '../components/UsersList';
import ErrorModal from '../../shared/components/UIElements/Error/ErrorModal';
import Spinner from '../../shared/components/UIElements/Error/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook'

const Users = () => {
  const [users, setUsers] = useState([]);

  const { isLoading, error ,sendRequest, clearError  } = useHttpClient()

  useEffect(() => {
    const requestSent = async () => {
      try {
        const response = await sendRequest('http://localhost:5000/api/users');
        setUsers(response.users);
      } catch (error) {
        console.log(error)
      }
    }
    requestSent()
  }, [sendRequest]);

  return (
    <div>
      <React.Fragment>
        <ErrorModal error={error} onClear={clearError} />
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
