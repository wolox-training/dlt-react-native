import React, { Component } from 'react';

import { sessionExists } from '../../../services/sessionStorageService';
import Login from '../../screens/Login';

export default function UserSession(Wrapped) {
  console.log('wrapped', Wrapped);
  return sessionExists() ? <Wrapped /> : <Login />;
}
