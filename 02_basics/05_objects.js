'user strict';

// Destricturing an object
const course = {
    name: 'Web development',
    semester: 6,
    courseInstructor: '?'
};

const {name, semester: sem, courseInstructor: instructor} = course;
// console.log(name, sem, instructor);


// const navbar = (/*props.company*/ {company}) => {
    //
// }
// navbar({company: 'github'});


// Javascript object notation
// // Sometimes
// {
    // 'name': 'Hansraj',
    // 'isStudying': 'true',
// }

// Api response can be an object or an array of objects
[
    {},
    {},
    {}
]

const myGitHub = {
    "login": "hansraj025",
    "id": 114150228,
    "node_id": "U_kgDOBs3LVA",
    "avatar_url": "https://avatars.githubusercontent.com/u/114150228?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/hansraj025",
    "html_url": "https://github.com/hansraj025",
    "followers_url": "https://api.github.com/users/hansraj025/followers",
    "following_url": "https://api.github.com/users/hansraj025/following{/other_user}",
    "gists_url": "https://api.github.com/users/hansraj025/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/hansraj025/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/hansraj025/subscriptions",
    "organizations_url": "https://api.github.com/users/hansraj025/orgs",
    "repos_url": "https://api.github.com/users/hansraj025/repos",
    "events_url": "https://api.github.com/users/hansraj025/events{/privacy}",
    "received_events_url": "https://api.github.com/users/hansraj025/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Hansraj Singh Shekhawat",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 5,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2022-09-22T10:18:07Z",
    "updated_at": "2024-12-13T22:21:13Z"
  };

  const randomUserMe = {
    "results": [
      {
        "gender": "female",
        "name": {
          "title": "Mrs",
          "first": "Lola",
          "last": "Onipko"
        },
        "location": {
          "street": {
            "number": 7958,
            "name": "Kochubeyivska"
          },
          "city": "Ievpatoriya",
          "state": "Mikolayivska",
          "country": "Ukraine",
          "postcode": 33915,
          "coordinates": {
            "latitude": "79.9324",
            "longitude": "113.3451"
          },
          "timezone": {
            "offset": "-4:00",
            "description": "Atlantic Time (Canada), Caracas, La Paz"
          }
        },
        "email": "lola.onipko@example.com",
        "login": {
          "uuid": "7aa4c749-49d8-416a-8fe9-d373f88aa861",
          "username": "organicswan308",
          "password": "ttttttt",
          "salt": "KYFfyMc8",
          "md5": "2b9659e60c1cf974c1c8d48b6df22495",
          "sha1": "fa9141d116c0047d13982755b1808ef01dc38ff0",
          "sha256": "eab2786b4c8fc1dec50b45075a7e0268fc621cf946f1b390c7e80bdb7914cef0"
        },
        "dob": {
          "date": "1971-06-30T09:53:01.149Z",
          "age": 53
        },
        "registered": {
          "date": "2006-04-11T07:43:48.169Z",
          "age": 18
        },
        "phone": "(096) N66-5307",
        "cell": "(097) K28-8653",
        "id": {
          "name": "",
          "value": null
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/women/95.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/95.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/95.jpg"
        },
        "nat": "UA"
      }
    ],
    "info": {
      "seed": "d6b8c2dfdb22a3cd",
      "results": 1,
      "page": 1,
      "version": "1.4"
    }
  };