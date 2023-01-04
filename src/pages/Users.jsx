// users page

import React from 'react';
import { Hero } from '../features/home/components';
import { UserList } from '../features/users/components';

const UsersPage = () => {
    return (
        <div>
        <Hero title="Users" subtitle="Connect with other users" imageUrl="https://img001.prntscr.com/file/img001/emVuxatlQzuKWe5viZB4bQ.png"/>
        <UserList/>
        </div>
    );
    }

export default UsersPage;