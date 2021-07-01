// index.js

module.exports = () => {

    const name = ['Liam', 'Noah','Oliver','Elijah', 'William', 'James', 'Benjamin', 'Lucas', 'Henry ', 'Alexander', 'Mason',
    'Michael', 'Ethan','Daniel', 'Jacob', 'Logan', 'Jackson', 'Levi', 'Sebastian', 'Mateo', 'Jack',  'Owen', 'Theodore',  'Aiden', 
    'Samuel', 'Mignon', 'Olivia','Emma', 'Ava', 'Charlotte', 'Sophia', 'Amelia', 'Isabella', 'Mia', 'Evelyn', 'Harper', 'Camila', 
    'Gianna', 'Abigail', 'Luna', 'Ella','Elizabeth', 'Sofia', 'Emily', 'Avery', 'Mila','Scarlett', 'Eleanor', 'Madison','Layla',
    'Penelope', 'Rona'];
    
    const mail = ['gmail.com', 'gmail.fr', 'gmail.de', 'gmail.uk', 'yahoo.com', 'yahoo.fr', 'lyknowledge.com', 'hotmail.com',
    'live.fr', 'live.com'];

    const picturesUrl = ['https://firebasestorage.googleapis.com/v0/b/saynaweb-e44b7.appspot.com/o/users%2FprofilePics%2F1.jpeg?alt=media&token=01f9ea1e-3f00-40bf-ba08-0ce4fe58a7ac',
    'https://firebasestorage.googleapis.com/v0/b/saynaweb-e44b7.appspot.com/o/users%2FprofilePics%2F2.jpeg?alt=media&token=a744efeb-40fa-428a-bbcc-d944502754db',
    'https://firebasestorage.googleapis.com/v0/b/saynaweb-e44b7.appspot.com/o/users%2FprofilePics%2F3.jpeg?alt=media&token=13d179c7-3227-4b87-882b-b966f33a2fb2',
    'https://firebasestorage.googleapis.com/v0/b/saynaweb-e44b7.appspot.com/o/users%2FprofilePics%2F4.jpeg?alt=media&token=5a96d2a9-bdf7-4247-a252-d9cc641a9c56',
    'https://firebasestorage.googleapis.com/v0/b/saynaweb-e44b7.appspot.com/o/users%2FprofilePics%2F5.jpeg?alt=media&token=9b2b38c1-43d7-4de9-8513-2647a643477b',
    'https://firebasestorage.googleapis.com/v0/b/saynaweb-e44b7.appspot.com/o/users%2FprofilePics%2FIMG_0003.jpeg?alt=media&token=87268c9d-ca94-41dd-9e28-5e332bfb77b1',
    'https://firebasestorage.googleapis.com/v0/b/saynaweb-e44b7.appspot.com/o/users%2FprofilePics%2Fthumbnail_Capture%20d%E2%80%99e%CC%81cran%C2%A0.%202021-06-29%20a%CC%80%2011.21.52.png?alt=media&token=bb5dd3ce-21c0-4daa-b8bb-8309bb95389a'];

    const certificationsArray = ['Symfony', 'NodeJs', 'React', 'Ionic', 'COBOL', 'DB2', 'Mongo', 'Reddis', 'ReactJs', 'VueJs',
    'Python'];

    const colorArray = ['color-theme-blue', 'color-theme-red', 'color-theme-green', 'color-theme-deepblue', 'color-theme-pink',
    'color-theme-yellow', 'color-theme-orange', 'color-theme-purple', 'color-theme-deeppurple', 'color-theme-lightblue', 
    'color-theme-teal', 'color-theme-lime', 'color-theme-deeporange', 'color-theme-gray', 'color-theme-white', 'color-theme-black',
    'color-theme-brown', 'color-theme-drakgreen', 'color-theme-cayan', 'color-theme-darkorchid', 'color-theme-cadetblue',
    'color-theme-deeppink']

    const data = { 
        users: []
    }

    const msg = ["Hello there !", "T'es con comme un mignon !", "Et la marmotte, elle ...", "Jeanne ! Au secours !", " Tout à commencé à l'IMIE"];

    const backgroundPics = ['https://firebasestorage.googleapis.com/v0/b/saynaweb-e44b7.appspot.com/o/users%2FprofilePics%2Fte%CC%81le%CC%81chargement.jpeg?alt=media&token=aac7454f-e68a-4579-94fe-77ef5edfe6f7'];

    const badgeTitle = ['Iron', 'Bronze', 'Silver', 'Gold', 'Platinium', 'Diamond', 'Master', 'Challenger'];

    const badgeUrl = ['https://firebasestorage.googleapis.com/v0/b/saynaweb-e44b7.appspot.com/o/users%2Fbadge%2Ficon41.png?alt=media&token=92a40045-d749-4c23-91c9-12085fc8ff24',
    'https://firebasestorage.googleapis.com/v0/b/saynaweb-e44b7.appspot.com/o/users%2Fbadge%2Ficon42.png?alt=media&token=66b85483-3d81-4fda-a438-67437572da91',
    'https://firebasestorage.googleapis.com/v0/b/saynaweb-e44b7.appspot.com/o/users%2Fbadge%2Ficon43.png?alt=media&token=56912c80-c093-469b-afd0-02523ba41276',
    'https://firebasestorage.googleapis.com/v0/b/saynaweb-e44b7.appspot.com/o/users%2Fbadge%2Ficon44.png?alt=media&token=01023b3a-513d-4bf4-8d3f-36eb692fcfcf'];

    const groupPicture = ['https://firebasestorage.googleapis.com/v0/b/saynaweb-e44b7.appspot.com/o/group%2Fdownload1.png?alt=media&token=0c523eaa-bf02-4cd0-8614-272c3dce9706',
    'https://firebasestorage.googleapis.com/v0/b/saynaweb-e44b7.appspot.com/o/group%2Fdownload2.png?alt=media&token=47d646d4-a1d3-4a16-b676-382ee45b4966',
    'https://firebasestorage.googleapis.com/v0/b/saynaweb-e44b7.appspot.com/o/group%2Fdownload4.png?alt=media&token=ba3480a5-f298-478e-a916-2c39a3a3a202',
    'https://firebasestorage.googleapis.com/v0/b/saynaweb-e44b7.appspot.com/o/group%2Fdownload5.png?alt=media&token=4517b9d6-356c-4758-93d4-f966f55daf51',
    'https://firebasestorage.googleapis.com/v0/b/saynaweb-e44b7.appspot.com/o/group%2Fdownload6.png?alt=media&token=39609f84-92f7-4a1f-bc80-f7c780cda61a',
    'https://firebasestorage.googleapis.com/v0/b/saynaweb-e44b7.appspot.com/o/group%2Fdownload7.png?alt=media&token=6fbb713e-31b3-4061-b5fb-2dbc00db3a4c',
    'https://firebasestorage.googleapis.com/v0/b/saynaweb-e44b7.appspot.com/o/group%2Ficon44.png?alt=media&token=82f179af-b0fb-478e-9878-0a81d92ca3fe'];


    
    function randomStatus() {
        var rand = Math.floor(Math.random() * 2)
        if(rand % 2 == 0) {
            return 'LIVE'
        }
        return 'OFFLINE'
    }
    function randomGroupPicture() {
        return groupPicture[Math.floor(Math.random() * groupPicture.length)];
    }
    
    function multipleRandomLive(n) {
        rand = Math.floor(Math.random() * n);
        var lives = [];
        for(let y = 0; y < rand; y++) {
            lives.push(
                {
                    id:Math.floor(Math.random() * number),
                    status: randomStatus()
                }
            )
        }
        return lives;
    }
    function randomBadge(n) {
        var rand = Math.floor(Math.random() * n);
        var badges = [];
        for(let y = 0; y < rand; y++) {
            badges.push({
                name:randomBadgeTitle(),
                picture:randomBadgeUrl(),
                explaination:'Learn how to manage a Mongo database',
                percentage:Math.floor(Math.random() * 100)
            })
        }
        return badges;

    }
    function randomBadgeUrl() {
        return badgeUrl[Math.floor(Math.random() * badgeUrl.length)];
    }

    function randomBadgeTitle() {
        return badgeTitle[Math.floor(Math.random() * badgeTitle.length)];
    }
    
    function removeDuplicates(array) {
        return array.filter((a, b) => array.indexOf(a) === b)
    };
    
    function randomBool() {
        var rand = Math.floor(Math.random() * 100)
        if(rand%2 === 0) {
            return true;
        }
        return false;
    }

    function randomName() {
        return name[Math.floor(Math.random() * name.length)];
    }
    
    function randomMail() {
        return mail[Math.floor(Math.random() * mail.length)];
    }

    function randomProfilPic() {
        return picturesUrl[Math.floor(Math.random() * picturesUrl.length)];
    }

    function randomCertification() {
        return certificationsArray[Math.floor(Math.random() * certificationsArray.length)];
    }
    function randomDate(start, end, startHour, endHour) {
        var date = new Date(+start + Math.random() * (end - start));
        var hour = startHour + Math.random() * (endHour - startHour) | 0;
        date.setHours(hour);
        return date;
    }

    function randomMsg() {
        return msg[Math.floor(Math.random() * msg.length)]
    }

    
    function multipleRandomCertification(n) {
        rand = Math.floor(Math.random() * n);
        var certifications = [];
        for(let y = 0; y < rand; y++) {
            certifications.push(
                certificationsArray[Math.floor(Math.random() * certificationsArray.length)]
            )
        }
        return certifications;
    }

    function multipleRandomFriend() {
        rand = Math.floor(Math.random() * number);
        var friends = [];
        for(let z = 0; z < rand; z++) {
            friends.push(
                Math.floor(Math.random() * number)
            )
        }
        return friends;
    }

    function multipleRandomAuthor() {
        rand = Math.floor(Math.random() * number);
        var authors = [];
        for(let x = 0; x < rand; x++) {
            authors.push(
                Math.floor(Math.random() * number)
            )
        }
        return authors;
    }

    function multipleRandomFollower() {
        rand = Math.floor(Math.random() * number);
        var followers = [];
        for(let j = 0; j < rand; j++) {
            followers.push(
                Math.floor(Math.random() * number)
            )
        }
        return followers;
    }

    function randomThemeColor() {
        rand = Math.floor(Math.random() * colorArray.length);
        var colors = [];
        colors.push(colorArray[rand]);
        return colors
    }

    function randomMultipleCourses(n) {
        rand = Math.floor(Math.random() * n);
        var courses = [];
        for(let j = 0; j < rand; j++) {
            courses.push(
               {//same as saved
                video:'https://firebasestorage.googleapis.com/v0/b/saynaweb-e44b7.appspot.com/o/pyt.jpeg?alt=media&token=ec534151-3dd4-4c5e-a2fa-4927b860c4d1',
                language:randomCertification(),
                lessonNumber:Math.floor(Math.random() * 70),
                price: Math.floor(Math.random() * 1000),
                title:'Fundamentals for Scrum Master and Agile Projects',
                applyStudent:removeDuplicates(multipleRandomFollower())
              }
            )
        }
        return courses;
    }

    function randomMultipleGroup(n) {
        rand = Math.floor(Math.random() * n);
        var groupes = [];
        for(let j = 0; j < rand; j++) {
            groupes.push(
               {//same for stream
                picture:randomGroupPicture(),
                title:'Mobile Product Design',
                explaination:'Learn new secrets to creating awesome.',
                typeTime:'Full Time',
                typeWork:'Designer',
                averageCompleteTime:Math.floor(Math.random() * 120),
                applyStudents:removeDuplicates(multipleRandomFriend())
              }
            )
        }
        return groupes;
    }
    const number = 30;
    for (let i = 0; i < number; i++) {
        var rand;
        var firstName = randomName();
        var lastName  = randomName();
        var mailType = randomMail();
        var email = firstName+'.'+lastName+'@'+mailType;
        var picture = randomProfilPic();
        
        

        var certifications = multipleRandomCertification(5);

        var friends = multipleRandomFriend();

        var authors = multipleRandomAuthor();

        var followers = multipleRandomFollower();

        var colors = randomThemeColor();

        data.users.push({
            id: i,
            firstName:firstName,
            lastName: lastName,
            email: email,
            profilePic: picture,
            backgroundPic:backgroundPics[0],
            certifications: removeDuplicates(certifications),
            xp: Math.floor(Math.random() * 10000),
            bio: 'User has no biography yet....',
            facebook:'https://www.facebook.com/',
            instagram:'https://www.instagram.com/?hl=fr',
            linkedin:'https://www.linkedin.com/',
            twitter:'https://twitter.com/',
            pinterest:'https://www.pinterest.fr/',
            friend: removeDuplicates(friends),
            followingAuthors: removeDuplicates(authors),
            follower: removeDuplicates(followers),
            notifications:[
                {
                    firstName:randomName(),
                    lastName:randomName(),
                    msg:randomMsg(),
                    createdAt:randomDate(Date.now(), Date.now(), 0, 23)
                }
            ],
            settings:[{
                colorTheme: colors[0],
                headerBackground:randomBool(),
                stickyHeader:randomBool(),
                fullScreen:randomBool(),
                menuPosition:randomBool(),
                darkMode:randomBool()
            }],
            mycourses:randomMultipleCourses(13),
              badges:randomBadge(5),
              groups:randomMultipleGroup(15),
              lives:multipleRandomLive(10)
        })
    }
    return data
}

