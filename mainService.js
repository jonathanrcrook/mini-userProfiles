angular.module('userProfiles').service('mainService', function() {

this.getUsers = function() {
  return users;
}

this.toggleFavorite = function(idx) {
  users[idx].isFavorite = !users[idx].isFavorite;
}

})

var users = [
  {
      "id": 0,
      "first_name": "benjamin",
      "last_name": "biggs",
      "avatar": "https://avatars1.githubusercontent.com/u/8809310?v=3&s=460"
  },
  {
      "id": 1,
      "first_name": "jonathan",
      "last_name": "crook",
      "avatar": "https://avatars1.githubusercontent.com/u/8443410?v=3&s=460"
  },
  {
      "id": 2,
      "first_name": "toby",
      "last_name": "farmer",
      "avatar": "http://www.gannett-cdn.com/-mm-/925463b3577c007f9179683935e6f5cf50243287/c=57-0-709-652&r=x203&c=200x200/local/-/media/Phoenix/LaurieRoberts/2014/06/20/1403308278000-Toby-Farmer.png"
  },
  {
      "id": 3,
      "first_name": "michael",
      "last_name": "gaudet",
      "avatar": "https://avatars3.githubusercontent.com/u/13405559?v=3&s=460"
  },
  {
      "id": 4,
      "first_name": "christian",
      "last_name": "lukacin",
      "avatar": "https://avatars0.githubusercontent.com/u/11768199?v=3&s=460"
  },
  {
      "id": 5,
      "first_name": "qais",
      "last_name": "malik",
      "avatar": "https://avatars1.githubusercontent.com/u/24416225?v=3&s=460"
  },
  {
      "id": 6,
      "first_name": "kurt",
      "last_name": "mcgallion",
      "avatar": "https://avatars1.githubusercontent.com/u/20898043?v=3&s=460"
  },
  {
      "id": 7,
      "first_name": "jessica",
      "last_name": "mitchell",
      "avatar": "https://avatars2.githubusercontent.com/u/24928482?v=3&s=460"
  },
  {
      "id": 8,
      "first_name": "vernon",
      "last_name": "mullen",
      "avatar": "https://avatars1.githubusercontent.com/u/9091221?v=3&s=460"
  },
  {
      "id": 9,
      "first_name": "daanish",
      "last_name": "nasir",
      "avatar": "https://avatars1.githubusercontent.com/u/15917537?v=3&s=460"
  }

]
