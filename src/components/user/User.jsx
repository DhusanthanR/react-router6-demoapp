import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom';

const User = () => {

  const [ searchParams, setSearchParams ] = useSearchParams();

  const showActiveuser = searchParams.get('filter') === 'active';

  return (
    <div>
        User
        <h5>user 1</h5>
        <h5>user 2</h5>
        <h5>user 3</h5>
        <Outlet/>

        <div>
          <button onClick={ () => setSearchParams({filter:'active'}) }>Active user</button>
          <button onClick={() => setSearchParams({}) }>Reset active user</button>
        </div>
        {
          showActiveuser ? (
            <h2>Showing all active user</h2>
          ) : (
            <h2>Showing all user</h2>
        )}
    </div>
  )
}

export default User;