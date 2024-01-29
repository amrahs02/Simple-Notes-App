// import React, { useState } from 'react';
// import { useGoogleLogin, googleLogout } from '@react-oauth/google';
// import { useHistory } from 'react-router-dom';
// import Home from './components/Home';

// const Login = () => {
//   const [user, setUser] = useState(null);
//   const history = useHistory();

//   const login = useGoogleLogin({
//     onSuccess: (codeResponse) => {
//       setUser(codeResponse.profileObj);
//       history.push('/');
//     },
//     onError: (error) => console.log('Login Failed:', error)
//   });

//   const logout = () => {
//     googleLogout();
//     setUser(null);
//   };

//   return (
//     <div className='m-20'>
//       <h2>Login Page</h2>
//       <br />
//       <br />
//       {user ? (
//         <div>
//           <Home user={user} />
//           <button onClick={logout}>Logout</button>
//         </div>
//       ) : (
//         <button onClick={() => login()}>Login with Google</button>
//       )}
//     </div>
//   );
// };

// export default Login;
