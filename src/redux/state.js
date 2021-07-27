let postsData = [
    {id: 1, message: 'Hi', likesCount: 20},
    {id: 2, message: 'How are you?', likesCount: 15},
    {id: 3, message: 'Im fine', likesCount: 21},
  ]
  
  let dialogsData = [
    {id: 1, name: 'Dima', av: 'https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png'},
    {id: 2, name: 'Vlad', av: 'https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png'},
    {id: 3, name: 'Sveta', av: 'https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png'},
    {id: 4, name: 'Kate', av: 'https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png'},
    {id: 5, name: 'Valera', av: 'https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png'},
    {id: 6, name: 'Andrey', av: 'https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png'}
  ]
  
  let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
    {id: 6, message: 'Yo'}
  ]
  
  let state = {
      profilePage: {
        postsData: postsData
      },

      dialogsPage: {
        dialogsData: dialogsData,
        messagesData: messagesData
      } 
  }

  export default state;