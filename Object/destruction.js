
// Деструктуризація об'єкта
// - Значення по за замовчуванням
// - Ім'я змінної відрізняється від іменніхарактеристики

// const playlist = {
//     name: 'My super playlist',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     trackCount: 3,
// };

// const {
//     rating,
//     tracks,
//     name,
//     trackCount: numberOfTracks = 0,
//     author = 'user',
// } = playlist;

// console.log(playlist);

// console.log(numberOfTracks)


// Глибока деструктуризація

// const profile = {
//     name: 'Andrii Petrovskyi',
//     tag: 'AP',
//     location: 'San-Francisko, USA',
//     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//     stats: {
//         followers: 560325,
//         views: 250452,
//         likes: 44899,
//     },
// };

// console.log(profile)

// const {
//     avatar,
//     name,
//     tag,
//     location,
//     stats: {followers, views, likes},       
// } = profile;

// console.log(avatar, name, tag, location, name, folowers, views, likes);

// Деструктуризація масив

// const rgb = [255, 100, 80];

// const [red, green, blue] = rgb;

// console.log(red, green, blue)

// const authors = {
//     kiwi: 4,
//     poly: 7,
//     ajax: 9,
//     mango: 6,
//   };
  
//   const entries = Object.entries(authors);

//   console.log(entries)

//   for(const [name, rating] of entries) {
//     //   const [name, rating] = entries;

//     const name = entries[0];
//     const rating = entries[1];

//       console.log(name, rating)
//   }

//   Операція rest (сбір)

// const profile = {
//     name: 'Andrii Petrovskyi',
//     tag: 'AP',
//     loc: 'San-Francisko, USA',
//     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//     stats: {
//         followers: 560325,
//         views: 250452,
//         likes: 44899,
//     },
// };
// console.log(profile)
// const { name, tag, loc, restProps } = profile;
// console.log(name, tag, loc); 
// console.log(restProps);
// console.log(profile);

const showProfileInfo = function (userProfile) {
    const { name, tag, location, ...restProps } = userProfile;
  
    // console.log(name, tag, location, avatar, followers, views, likes);
    console.log(restProps);
  };
  
  const profile = {
    name: 'Jacques Gluke',
    tag: 'jgluke',
    location: 'Ocho Rios, Jamaica',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
    stats: {
      followers: 5603,
      views: 4827,
      likes: 1308,
    },
  };
  
  showProfileInfo(profile);