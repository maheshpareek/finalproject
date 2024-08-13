import React, { useEffect } from 'react';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = 'dev-wejfh3fk64gx8hqi.us.auth0.com';
  const clientId = '0JgOk8UBGDByyLqauIqr4kWpqxAWPQqK';
  const audience = 'https://dev-wejfh3fk64gx8hqi.us.auth0.com/api/v2/';

  const navigate = useNavigate();

  // Use the Auth0 hook to manage authentication state
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();

  // Handle the redirect after login
  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  // Store the user in local storage when authenticated
  useEffect(() => {
    if (isAuthenticated && user) {
      // Store user details in local storage
      localStorage.setItem('user', JSON.stringify(user));

      // Optionally store the access token in local storage
      (async () => {
        try {
          const token = await getAccessTokenSilently();
          localStorage.setItem('accessToken', token);
        } catch (error) {
          console.error('Error getting access token', error);
        }
      })();
    } else {
      // Clear local storage if not authenticated
      localStorage.removeItem('user');
      localStorage.removeItem('accessToken');
    }
  }, [isAuthenticated, user, getAccessTokenSilently]);

  // Ensure that domain and clientId are provided
  if (!domain || !clientId) {
    console.error('Missing Auth0 domain or client ID');
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: audience,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
