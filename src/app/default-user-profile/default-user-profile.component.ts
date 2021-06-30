import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-user-profile',
  templateUrl: './default-user-profile.component.html',
  styleUrls: ['./default-user-profile.component.css']
})
export class DefaultUserProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  hasUnsavedNotes(n:number) {
    if(n === 100) {
      return true
    } else {
      return false
    }
  }

  isUnlock(n:number) {
    if(n === 100) {
      return ('UNLOCK')
    } else {
      return (n+'/100')
    }
  }
  isOffline(s:string) {
    if(s === 'LIVE') {
      return true
    }
    return false
  }

  data  = {
    settings: [{
      colortheme: '',
      headerBackground: true,
      stickyHeader: false,
      fullScreen: false,
      menuPosition: false,
      darkMode: true
    }],
    notification: [
    {
      author:{
        lastName:'Sandler',
        firstname:'Adam',
        msg:"J'ai kické la gueule de cette catin !",
        time:2 //problematique entre date d'émission et date now
      }
    },
    {
      author:{
        lastName:'Sylvestre',
        firstname:'Mike',
        msg:"Regarde comment il est nul ! Techniquement, tactiquement...",
        time:16 //problematique entre date d'émission et date now
      }
    }
  ],
    picture: 'https://firebasestorage.googleapis.com/v0/b/saynaweb-e44b7.appspot.com/o/thumbnail_Capture%20d%E2%80%99e%CC%81cran%C2%A0.%202021-06-29%20a%CC%80%2011.21.52.png?alt=media&token=d2afea43-a79f-48e3-8915-eab7cd686187',
    name: 'Mignon',
    firstname: 'Alexandre',
    email:'Alexabdre.Mignon@gmail.fr',
    certifications:['Symfony', 'NodeJs', 'React', 'Ionic'],
    friends:[{
      firstname:'',
      lastname:'',
      url:'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley',
      picture:'https://firebasestorage.googleapis.com/v0/b/saynaweb-e44b7.appspot.com/o/thumbnail_Capture%20d%E2%80%99e%CC%81cran%C2%A0.%202021-06-29%20a%CC%80%2011.21.52.png?alt=media&token=d2afea43-a79f-48e3-8915-eab7cd686187',
      background_picture:'',
      email:'',
      facebook:'',
      twitter:'',
      linkedin:'',
      instagram:''
    },
    {
      firstname:'',
      lastname:'',
      url:'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley',
      picture:'https://firebasestorage.googleapis.com/v0/b/saynaweb-e44b7.appspot.com/o/thumbnail_Capture%20d%E2%80%99e%CC%81cran%C2%A0.%202021-06-29%20a%CC%80%2011.21.52.png?alt=media&token=d2afea43-a79f-48e3-8915-eab7cd686187',
      background_picture:'',
      email:'',
      facebook:'',
      twitter:'',
      linkedin:'',
      instagram:''
    },
    { firstname:'',
      lastname:'',
      url:'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley',
      picture:'https://firebasestorage.googleapis.com/v0/b/saynaweb-e44b7.appspot.com/o/thumbnail_Capture%20d%E2%80%99e%CC%81cran%C2%A0.%202021-06-29%20a%CC%80%2011.21.52.png?alt=media&token=d2afea43-a79f-48e3-8915-eab7cd686187',
      background_picture:'',
      email:'',
      facebook:'',
      twitter:'',
      linkedin:'',
      instagram:''
    },
    { firstname:'',
      lastname:'',
      url:'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley',
      picture:'https://firebasestorage.googleapis.com/v0/b/saynaweb-e44b7.appspot.com/o/thumbnail_Capture%20d%E2%80%99e%CC%81cran%C2%A0.%202021-06-29%20a%CC%80%2011.21.52.png?alt=media&token=d2afea43-a79f-48e3-8915-eab7cd686187',
      background_picture:'',
      email:'',
      facebook:'',
      twitter:'',
      linkedin:'',
      instagram:''
    },
    {
      firstname:'',
      lastname:'',
      url:'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley',
      picture:'https://firebasestorage.googleapis.com/v0/b/saynaweb-e44b7.appspot.com/o/thumbnail_Capture%20d%E2%80%99e%CC%81cran%C2%A0.%202021-06-29%20a%CC%80%2011.21.52.png?alt=media&token=d2afea43-a79f-48e3-8915-eab7cd686187',
      background_picture:'',
      email:'',
      facebook:'',
      twitter:'',
      linkedin:'',
      instagram:''
    }
    ],
    following_authors:[{
      name:'Sylvestre',
      firstname:'Mike',
      picture:'url'
    },
    {
      name:'La D',
      firstname:'Koba',
      picture:'url'
    }
  ],
    xp: 42,
    bio: "Henry de Lesquen (vicomte Henry de Lesquen du Plessis-Casso) est un homme politique et haut fonctionnaire français né le 1er janvier 1949 à Port-Lyautey (aujourd’hui Kénitra) au Maroc de deux parents français. Il est français par le droit du sang. Cofondateur en 1974 du Club de l’Horloge, devenu Carrefour de l’Horloge en 2015, il le préside depuis 1985. Il a dirigé Radio Courtoisie pendant onze ans, de 2006 à 2017. Il préside le Parti National-Libéral, qu’il a fondé en 2016.",
    mycourses:[{//same as saved
      video:'https://firebasestorage.googleapis.com/v0/b/saynaweb-e44b7.appspot.com/o/pyt.jpeg?alt=media&token=ec534151-3dd4-4c5e-a2fa-4927b860c4d1',
      language:'Python',
      lessonNumber:42,
      price: 602,
      title:'Fundamentals for Scrum Master and Agile Projects',
      applyStudent:[{

      }],
    }],
    badges:[{
      name:'Bronze',
      picture:'url',
      explaination:'Learn how to manage a Mongo database',
      percentage:73
    }],
    groups:[{//same for stream
      picture:'url',
      title:'Mobile Product Design',
      explaination:'Learn new secrets to creating awesome.',
      typeTime:'Full Time',//enum
      typeWork:'Designer',
      averageCompleteTime:30,
      applyStudents:[{
        url:'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley',
        picture:'https://firebasestorage.googleapis.com/v0/b/saynaweb-e44b7.appspot.com/o/thumbnail_Capture%20d%E2%80%99e%CC%81cran%C2%A0.%202021-06-29%20a%CC%80%2011.21.52.png?alt=media&token=d2afea43-a79f-48e3-8915-eab7cd686187'
      },
      {
        url:'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley',
        picture:'https://firebasestorage.googleapis.com/v0/b/saynaweb-e44b7.appspot.com/o/thumbnail_Capture%20d%E2%80%99e%CC%81cran%C2%A0.%202021-06-29%20a%CC%80%2011.21.52.png?alt=media&token=d2afea43-a79f-48e3-8915-eab7cd686187'
      },
      {
        url:'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley',
        picture:'https://firebasestorage.googleapis.com/v0/b/saynaweb-e44b7.appspot.com/o/thumbnail_Capture%20d%E2%80%99e%CC%81cran%C2%A0.%202021-06-29%20a%CC%80%2011.21.52.png?alt=media&token=d2afea43-a79f-48e3-8915-eab7cd686187'
      },
      {
        url:'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley',
        picture:'https://firebasestorage.googleapis.com/v0/b/saynaweb-e44b7.appspot.com/o/thumbnail_Capture%20d%E2%80%99e%CC%81cran%C2%A0.%202021-06-29%20a%CC%80%2011.21.52.png?alt=media&token=d2afea43-a79f-48e3-8915-eab7cd686187'
      },
      {
        url:'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley',
        picture:'https://firebasestorage.googleapis.com/v0/b/saynaweb-e44b7.appspot.com/o/thumbnail_Capture%20d%E2%80%99e%CC%81cran%C2%A0.%202021-06-29%20a%CC%80%2011.21.52.png?alt=media&token=d2afea43-a79f-48e3-8915-eab7cd686187'
      }]
    }],
    lives:[{
      picture:'https://firebasestorage.googleapis.com/v0/b/saynaweb-e44b7.appspot.com/o/thumbnail_Capture%20d%E2%80%99e%CC%81cran%C2%A0.%202021-06-29%20a%CC%80%2011.21.52.png?alt=media&token=d2afea43-a79f-48e3-8915-eab7cd686187',
      background_picture:'',
      email:'bougaloo@gmail.com',
      status:'LIVE',//offline
      url:'',
      firstname: 'troululu',
      lastname: 'Sylvestre'
    },
    {
      picture:'https://firebasestorage.googleapis.com/v0/b/saynaweb-e44b7.appspot.com/o/thumbnail_Capture%20d%E2%80%99e%CC%81cran%C2%A0.%202021-06-29%20a%CC%80%2011.21.52.png?alt=media&token=d2afea43-a79f-48e3-8915-eab7cd686187',
      background_picture:'',
      email:'bougaloo@gmail.com',
      status:'OFFLINE',
      url:''
    },
    {
      picture:'https://firebasestorage.googleapis.com/v0/b/saynaweb-e44b7.appspot.com/o/thumbnail_Capture%20d%E2%80%99e%CC%81cran%C2%A0.%202021-06-29%20a%CC%80%2011.21.52.png?alt=media&token=d2afea43-a79f-48e3-8915-eab7cd686187',
      background_picture:'',
      email:'bougaloo@gmail.com',
      status:'LIVE',//offline
      url:''
    }],
    facebook:'',
    instagram:'',
    linkedin:'',
    twitter:'',
    pinterest:'',
    follower:[{
      name:''
    }]
  }
}
