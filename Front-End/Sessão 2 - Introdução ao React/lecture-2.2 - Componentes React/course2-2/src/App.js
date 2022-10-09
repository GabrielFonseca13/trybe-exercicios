// //Ex1 ### Props
// import React from 'react';
// import './App.css';
// import Image from './components/Image';

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <Image
//           source={'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg'}
//           alt={'Cute cat staring'}
//         />
//       </div>
//     );
//   }
// }

// export default App;
import React from 'react';
import UserProfile from './components/UserProfile';

class App extends React.Component {
  render() {
    const users = [
      {
        id: 102,
        name: 'João',
        email: 'joao@gmail.com',
        avatar:
          'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png',
      },
      {
        id: 77,
        name: 'Amélia',
        email: 'amelia@gmail.com',
        avatar:
          'https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png',
      },
    ];

    return (
      <div>
        {users.map((user) => <UserProfile key={ user.id } user={user} />)}
      </div>
    );
  }
}

export default App;
