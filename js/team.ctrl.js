app.controller('TeamCtrl', function($scope, $location, $mdDialog, $mdToast, $rootScope, $routeParams, $http, $window, $log, $document, $mdSidenav, $timeout) {
  $scope.expandDetail=function (member, ev) {
    $mdDialog.show({
      controller: function ($mdDialog) {
        var vm = this;
        vm.member = {};
        vm.member = member;  //your task object from the ng-repeat

        $scope.hide = function () {
          $mdDialog.hide();
        };
        $scope.cancel = function () {
          $mdDialog.cancel();
        };
      },
      controllerAs: 'infomodal',
      templateUrl: 'templates/team.member.details.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
    .then(function(answer) {

    }, function() {

    });
  };
  $scope.lastTeam=[
    {
      'name':'Amar Srivastava',
      'position':'Team Mentor',
      'image':'amar.jpg',
      'email':'',
      'desc':'I am a simple person who likes to spread happiness around :) Have a passion for cricket and books. I believe in the saying No Gain, No Pain and believe in giving my hundred percent in everything.	'
    },
    {
      'name':'Vaibhav Garg',
      'position':'Team Mentor',
      'image':'vaibhav.jpg',
      'email':'',
      'desc':''
    },
    {
      'name':'Anurag Acharya',
      'position':'General Secretary',
      'image':'anurag.jpg',
      'email':'nssgsec@iitd.ac.in',
      'desc':'Nature loving person, truthful to everyone, believe in doing things different, i like to make people smile but doing so might irritate them some time, love to spend time with kids, like to do some stupid stuff, drawing and painting is sort of my art :P, car travelling in rain and foodyperson.'
    },
    {
      'name':'Ayush Kumar',
      'position':'General Secretary',
      'image':'ayush.jpg',
      'email':' nssgsec@iitd.ac.in',
      'desc':'I love to listen music and play cricket in my leisure time.I am a nature lover and believe, "There must be a technical solution to the problems around us" and I always try to find one.'
    },
    {
      'name':'Ashwaghosh Manohare',
      'position':'Secretary',
      'image':'ashwa.jpg',
      'email':'ashwaghoshiit@gmail.com',
      'desc':'I love to listen music and play cricket in my leisure time.I am a nature lover and believe, "There must be a technical solution to the problems around us" and I always try to find one.'
    },{
      'name':'Jishnudeep Kar',
      'position':'Secretary',
      'image':'jishnu.jpg',
      'email':'jishnudeep.kar@gmail.com',
      'desc':'I love to listen music and play cricket in my leisure time.I am a nature lover and believe, "There must be a technical solution to the problems around us" and I always try to find one.'
    },{
      'name':'Madhur Kumar Shakya',
      'position':'Secretary',
      'image':'madhur.jpg',
      'email':'madhurkshakya@gmail.com',
      'desc':'I love to listen music and play cricket in my leisure time.I am a nature lover and believe, "There must be a technical solution to the problems around us" and I always try to find one.'
    },{
      'name':'Niladri Shekhar Mandal ',
      'position':'Secretary',
      'image':'the_boss.jpg',
      'email':'niladrisekharmandal@gmail.com',
      'desc':'I love to listen music and play cricket in my leisure time.I am a nature lover and believe, "There must be a technical solution to the problems around us" and I always try to find one.'
    },{
      'name':'Praful Agarwal',
      'position':'Secretary',
      'image':'praful.jpg',
      'email':'praful.agr@gmail.com',
      'desc':'I love to listen music and play cricket in my leisure time.I am a nature lover and believe, "There must be a technical solution to the problems around us" and I always try to find one.'
    },{
      'name':'Rupika Taneja',
      'position':'Secretary',
      'image':'rupika.jpg',
      'email':'rupikataneja1996@gmail.com',
      'desc':'I love to listen music and play cricket in my leisure time.I am a nature lover and believe, "There must be a technical solution to the problems around us" and I always try to find one.'
    },{
      'name':'Utkarsh Agarwal',
      'position':'Secretary',
      'image':'agarwal.jpg',
      'email':'utkarsh6991@gmail.com',
      'desc':'I love to listen music and play cricket in my leisure time.I am a nature lover and believe, "There must be a technical solution to the problems around us" and I always try to find one.'
    },{
      'name':'VBSS Reddy',
      'position':'Secretary',
      'image':'bala.jpg',
      'email':'vanukuri.balasai@gmail.com',
      'desc':'I love to listen music and play cricket in my leisure time.I am a nature lover and believe, "There must be a technical solution to the problems around us" and I always try to find one.'
    },{
      'name':'Aditya Kumar',
      'position':'Executive',
      'image':'aditya.jpg',
      'email':'aditya.kmr2121@gmail.com',
      'desc':'I love to listen music and play cricket in my leisure time.I am a nature lover and believe, "There must be a technical solution to the problems around us" and I always try to find one.'
    },{
      'name':'Aishvi Jain',
      'position':'Executive',
      'image':'aishvi.jpg',
      'email':'aishvijain1@gmail.com',
      'desc':'I love to listen music and play cricket in my leisure time.I am a nature lover and believe, "There must be a technical solution to the problems around us" and I always try to find one.'
    },{
      'name':'Akhil Singla',
      'position':'Executive',
      'image':'akhil.jpg',
      'email':'akhilsingl8@gmail.com',
      'desc':'I love to listen music and play cricket in my leisure time.I am a nature lover and believe, "There must be a technical solution to the problems around us" and I always try to find one.'
    },{
      'name':'Ashray Gupta',
      'position':'Executive',
      'image':'ashray.jpg',
      'email':'ashraygupta1@gmail.com',
      'desc':'I love to listen music and play cricket in my leisure time.I am a nature lover and believe, "There must be a technical solution to the problems around us" and I always try to find one.'
    },{
      'name':'Ayush Rai',
      'position':'Executive',
      'image':'rai.jpg',
      'email':'ayushrai1114@gmail.com',
      'desc':'I love to listen music and play cricket in my leisure time.I am a nature lover and believe, "There must be a technical solution to the problems around us" and I always try to find one.'
    },{
      'name':'Divyank Mittal',
      'position':'Executive',
      'image':'divyank.jpg',
      'email':'divyank.mittal@gmail.com',
      'desc':'I love to listen music and play cricket in my leisure time.I am a nature lover and believe, "There must be a technical solution to the problems around us" and I always try to find one.'
    },{
      'name':'Harman Singh',
      'position':'Executive',
      'image':'harman.jpg',
      'email':'harmans59@gmail.com',
      'desc':'I love to listen music and play cricket in my leisure time.I am a nature lover and believe, "There must be a technical solution to the problems around us" and I always try to find one.'
    },{
      'name':'Harsh Maheshwari',
      'position':'Executive',
      'image':'maheshwari.jpg',
      'email':'harshm121@gmail.com',
      'desc':'I love to listen music and play cricket in my leisure time.I am a nature lover and believe, "There must be a technical solution to the problems around us" and I always try to find one.'
    },{
      'name':'Harshvardhan',
      'position':'Executive',
      'image':'harry.jpg',
      'email':'satyamrsm@gmail.com',
      'desc':'I love to listen music and play cricket in my leisure time.I am a nature lover and believe, "There must be a technical solution to the problems around us" and I always try to find one.'
    },{
      'name':'Komal Arya',
      'position':'Executive',
      'image':'komal.jpg',
      'email':'guruarya3@gmail.com',
      'desc':'I love to listen music and play cricket in my leisure time.I am a nature lover and believe, "There must be a technical solution to the problems around us" and I always try to find one.'
    },{
      'name':'Kritika Sharma',
      'position':'Executive',
      'image':'kritika.jpg',
      'email':'krisharma999@gmail.com',
      'desc':'I love to listen music and play cricket in my leisure time.I am a nature lover and believe, "There must be a technical solution to the problems around us" and I always try to find one.'
    },{
      'name':'Narayani Bhatia',
      'position':'Executive',
      'image':'narayani.jpg',
      'email':'narayani.97@gmail.com',
      'desc':'I love to listen music and play cricket in my leisure time.I am a nature lover and believe, "There must be a technical solution to the problems around us" and I always try to find one.'
    },{
      'name':'Prachi Gupta',
      'position':'Executive',
      'image':'prachigupta.jpg',
      'email':'prachigupta.iitd@gmail.com',
      'desc':'I love to listen music and play cricket in my leisure time.I am a nature lover and believe, "There must be a technical solution to the problems around us" and I always try to find one.'
    },{
      'name':'Raunak Gautam',
      'position':'Executive',
      'image':'raunak.jpg',
      'email':'gautam.raunak13@gmail.com',
      'desc':'I love to listen music and play cricket in my leisure time.I am a nature lover and believe, "There must be a technical solution to the problems around us" and I always try to find one.'
    },{
      'name':'Sahil Khokhar ',
      'position':'Executive',
      'image':'sahil.jpg',
      'email':'sahilkhokhar505@gmail.com',
      'desc':'I love to listen music and play cricket in my leisure time.I am a nature lover and believe, "There must be a technical solution to the problems around us" and I always try to find one.'
    },{
      'name':'Sakshi Jain',
      'position':'Executive',
      'image':'sakshi.jpg',
      'email':'smartsj2511@gmail.com',
      'desc':'I love to listen music and play cricket in my leisure time.I am a nature lover and believe, "There must be a technical solution to the problems around us" and I always try to find one.'
    },{
      'name':'Sarthak Jain',
      'position':'Executive',
      'image':'sarthak.jpg',
      'email':'sarjain1997@gmail.com',
      'desc':'I love to listen music and play cricket in my leisure time.I am a nature lover and believe, "There must be a technical solution to the problems around us" and I always try to find one.'
    },{
      'name':'Simar Kaur Mattewal',
      'position':'Executive',
      'image':'simar.jpg',
      'email':'simar0497@gmail.com',
      'desc':'I love to listen music and play cricket in my leisure time.I am a nature lover and believe, "There must be a technical solution to the problems around us" and I always try to find one.'
    },{
      'name':'Subhankar Dash',
      'position':'Executive',
      'image':'subhankar.jpg',
      'email':'dashsubhankar@gmail.com',
      'desc':'I love to listen music and play cricket in my leisure time.I am a nature lover and believe, "There must be a technical solution to the problems around us" and I always try to find one.'
    }
  ];

  $scope.currentTeam = [
    {"description": "I love to listen to music and play cricket in my leisure time. I am a nature lover and believe, \"There must be a technical solution to the problems around us\" and I always try to find one.",
      "designation": "Team Mentor",
      "image": "ayush.jpg",
      "comments": "",
      "email": "NA",
      "projects": "NA",
       "name": "Ayush Kumar"
     },
    {"description": "Hi there reader! I am currently pursuing B.Tech in Electrical Engineering and in my 4th year. And I love coding. Just love it. But the thing closest to my heart is . . . Guess what ? NSS . You can just feel the joy of volunteering . Describing in words is not possible. Happy volunteering :)",
      "designation": "G. Secretary",
      "image": "jishnudeep.jpg",
      "comments": "",
      "email": "nssgsec@iitd.ac.in",
      "projects": "NA",
       "name": "Jishnudeep Kar"
     },
    {"description": "\"Let the people explore if you really want to teach them. Your role should be just to facilitate it\"\nReading and watching stories involved in Indian Mythology is my cup of tea. I love to listen slow songs. I adore kids and like greenery.",
      "designation": "G. Secretary",
      "image": "madhur.jpg",
      "comments": "",
      "email": "nssgsec@iitd.ac.in",
      "projects": "NA",
       "name": "Madhur Kumar Shakya"
     },
    {"description": "\"Do what you love and love what you do. Don't listen to anyone else who tells you not to do it. You do what you want, what you love. Imagination should be the center of your life.\"",
      "designation": "G. Secretary",
      "image": "utkarsh.jpg",
      "comments": "",
      "email": "nssgsec@iitd.ac.in",
      "projects": "NA",
       "name": "Utkarsh Agarwal"
     },
    {"description": "I believe that making assumptions is part of any investigation. If we're wrong, all it'll cost is an apology but if you can't win the game, if you can't solve the puzzle, then you're nothing but a loser.",
      "designation": "Secretary",
      "image": "aditya.jpg",
      "comments": "",
      "email": "aditya.kmr2121@gmail.com",
      "projects": "Lakshyam Project, Bachpan, Nature Lovers, Blood Donation Camps, Organ Donation Camps, RTE, Blanket Distribution Drive",
       "name": "Aditya Kumar"
     },
    {"description": "I like to talk to new people and to know about their experiences and make new friends. I like to play basket ball, badminton and like to swim too. I love and enjoy spending time with small kids. I am a seeker, want to learn everything I can and like to explore as much I can. I like dancing, drama, sketching and is very crazy about making new useful and creative things from useless and waste things, I love travelling too.",
      "designation": "Secretary",
      "image": "aishvi.jpg",
      "comments": "",
      "email": "aishvijain1@gmail.com",
      "projects": "Munirka Teaching Project, Munirka Community Work, Toys From Trash, Old Age Home,DNip Care, Road Safety, Health Camps",
       "name": "Aishvi Jain"
     },
    {"description": "I like to interact with new people, make new friends and to spend time with them. I love teaching children, watching cricket and playing squash. Interested in travelling and learning new things.",
      "designation": "Secretary",
      "image": "divyank.jpg",
      "comments": "",
      "email": "divyank.mittal@gmail.com",
      "projects": "Apna Parivaar Children Home, Vidya Teaching, Neem School, Collection Drives",
       "name": "Divyank Mittal"
     },
    {"description": "I consider our beloved world as an opportunity to see things from a non-conventional viewpoint. I believe in exploring simple solutions to complex problems, for simplicity (topped with uniqueness) is the best policy! If you want to experiment with your ideas feel free to approach and brainstorm with me :)",
      "designation": "Secretary",
      "image": "harman.png",
      "comments": "",
      "email": "harmans59@gmail.com",
      "projects": "Aarohan Teaching Project, Climate Crusade, Green Warrior and Internships",
       "name": "Harman Singh"
     },
    {"description": "I believe every life has a purpose, I am trying to fulfill mine. :)",
      "designation": "Secretary",
      "image": "harsh.jpg",
      "comments": "",
      "email": "harshm121@gmail.com",
      "projects": "Animal Care, Cleanliness Drive, Substance Abuse, Waste Paper Recycling Initiative",
       "name": "Harsh Maheshwari"
     },
    {"description": "I believe we all keep changing and love making bonds with people. My hobbies are listening songs and reading. I think science and innovation (in right direction) can solve many of the problems that we face today.",
      "designation": "Secretary",
      "image": "raunak.jpg",
      "comments": "",
      "email": "gautam.raunak13@gmail.com",
      "projects": "Extra Currics, NAB, Social Innovation Cell, Anti-Human Trafficking Project, Collection Drive",
       "name": "Raunak Gautam"
     },
    {"description": "No set of words can describe me completely. You could say that faith keeps me going.",
      "designation": "Secretary",
      "image": "simar.jpg",
      "comments": "",
      "email": "simar0497@gmail.com",
      "projects": "5th Space, Animal Care, Food4Thought, Gender Sensitization, Green Warrior, NSS Magazine",
       "name": "Simar Kaur Mattewal"
     },
    {"description": "I like to explore new domains and fields to find the one that suits me best. I like programming, reading, playing badminton and chess. I love to travel to new places and try different cuisines. ",
      "designation": "Executive",
      "image": "adhityaabhi.jpg",
      "comments": "",
      "email": "aditya.abhishek27@gmail.com",
      "projects": "Green Warrior Project, Substance Abuse Project, Neem School Project, Social Innovation Cell",
       "name": "Aditya Abhishek"
     },
    {"description": "I like writing and exploring. A nature and animal-loving person. I feel happy when I am able to make someone smile. Hobbies include T.T. and swimming. Foodie. I believe in living everyday to the fullest because you get this gift of life only once :)",
      "designation": "Executive",
      "image": "adityasingla.jpg",
      "comments": "",
      "email": "adityasingla676@gmail.com",
      "projects": "Munirka, Animal Care, Blood and Organ Donation Camps",
       "name": "Aditya Singla"
     },
    {"description": "A famous sanskrit shloka is the guiding force of my life \"\u0905\u092d\u093f\u0935\u093e\u0926\u0928 \u0936\u0940\u0932\u0938\u094d\u092f \u0928\u093f\u0924\u094d\u092f\u0902 \u0935\u0943\u0926\u094d\u0927\u094b\u092a\u0938\u0947\u0935\u093f\u0928\u0903 \u0964\n\u091a\u0924\u094d\u0935\u093e\u0930\u093f \u0924\u0938\u094d\u092f \u0935\u0930\u094d\u0927\u0928\u094d\u0924\u0947 \u0906\u092f\u0941\u0930\u094d\u0935\u093f\u0926\u094d\u092f\u093e \u092f\u0936\u094b \u092c\u0932\u092e\u094d \u0965\" I believe simplicity and positivity adds quality to our life. I bet, you will never regret my company :) ",
      "designation": "Executive",
      "image": "https://drive.google.com/file/d/0B4NOQNY9_IiScmNpZ1BIOVpYdGJqQnoyXzNUd1lzd3NaNkpF/view?usp=sharing",
      "comments": "",
      "email": "ashutoshrajiitd@gmail.com",
      "projects": "Lakshyam, Social Innovation Cell, Documentation",
       "name": "ashutosh.jpg"
     },
    {"description": "I like old hindi songs. I am passionate about badminton and programming. I also like to read mystery novels (Hardy Boys).",
      "designation": "Executive",
      "image": "https://photos.google.com/photo/AF1QipOzgRkHBjo7GNeTu8TKxjzspDB-NnaGBOYuNYqy",
      "comments": "",
      "email": "chinmaya.xavier@gmail.com",
      "projects": "Aarohan,Green Warrior,Climate Crusade,Internships",
       "name": "Chinmay Singh"
     },
    {"description": "I enjoy spending time with family and friends. Just believe in something and everything.",
      "designation": "Executive",
      "image": "https://www.facebook.com/photo.php?fbid=670566829781459&set=pb.100004844449302.-2207520000.1496159658.&type=3&theater",
      "comments": "",
      "email": "devendradewanda97@gmail.com",
      "projects": "Lakshyam, Vidya",
       "name": "Devendra Dewanda"
     },
    {"description": "I enjoy meeting new people, exploring new things, new places. I like to help people to find solution of their problems. I also enjoy travelling, cooking, watching movies, going out for dinner, and having intellectual conversations!",
      "designation": "Executive",
      "image": "https://drive.google.com/open?id=0BwUv9nQCgeh_LXBQWXRzVUdXLTQ",
      "comments": "",
      "email": "garima.g.29.07@gmail.com",
      "projects": "Children's Home, Vidya, Blanket distribution Drive,tree plantation and nature walks,waste paper recycling initiatives, RTE",
       "name": "Garima Gupta"
     },
    {"description": "I like to read articles, quora, watch movies and debate. I like to make new friends. Love to play T.T., Badminton and watch Cricket. ",
      "designation": "Executive",
      "image": "https://www.facebook.com/photo.php?fbid=1351735531548124&set=pcb.1351735628214781&type=3&theater",
      "comments": "",
      "email": "hbansal10n@gmail.com",
      "projects": "Aarohan,Bachpan",
       "name": "Hritik Bansal"
     },
    {"description": "I am a technical guy who mostly spends his time on the computer (who doesn't ?). Absolutely love to listen to all genres of music. I like watching animes & tv shows. Love spending my time with friends. I am passionate about programming.",
      "designation": "Executive",
      "image": "https://www.facebook.com/photo.php?fbid=1054790507892214&set=a.249512205086719.53317.100000838253195&type=3&theater",
      "comments": "",
      "email": "kaustubh698@gmail.com",
      "projects": "Munirka, Food for Thought, Blood and Organ Donation Camps, Health Camps, Waste Paper Recycling Initiative ",
       "name": "Kaustubh Prakash"
     },
    {"description": "I am guy who loves interaction with people and loves making new friends. I mostly spend my time on my laptop watching anime. Another thing I am good at is exploring places and eating various cuisines.",
      "designation": "Executive",
      "image": "https://drive.google.com/file/d/0BzSBpFndRG4obGhtUVZJZFVIS00/view?usp=sharing",
      "comments": "",
      "email": "kunalrnarayan@gmail.com",
      "projects": "Vidya Teaching Project, Neem School, Climate Crusade and Substance Abuse Project",
       "name": "Kunal Narayan"
     },
    {"description": "I love reading books (even the text books :p). I am a quiet person, at times, too much loud. I enjoy discussions on spirituality. I appreciate art and culture. I listen to every genre of music. I am interested in people, their life stories and struggles. Always ready if someone needs help.",
      "designation": "Executive",
      "image": "https://drive.google.com/open?id=0BxWK-34fbXC3X3VUbnkwYnlSYWM",
      "comments": "",
      "email": "malayjain1@gmail.com",
      "projects": "NAB, Food4Thought, Pravah, Timeline, RTE",
       "name": "Malay Jain"
     },
    {"description": "Children are very special for me. I don't think that there can be greater happiness than talking and playing with them . I want to meet different people and know about their problems and try to contribute in reducing their problems .",
      "designation": "Executive",
      "image": "https://docs.google.com/document/d/1pR_WPdqIz7fuFQDtDAygivXKWAvKZzoum8VXpScxLnk/edit?usp=drivesdk",
      "comments": "",
      "email": "er.mamtaiit@gmail.com",
      "projects": "Dnip care/ NAB /Road safety campaign / cleanliness drive",
       "name": "Mamta"
     },
    {"description": "I would like to connect to new people. I love playing any sports anytime. To be honest, I feel I'm a bit pessimistic but always try to be positive. I love reading novels (though haven't read many) and watching TV series.",
      "designation": "Executive",
      "image": "https://m.facebook.com/photo.php?fbid=1183919771727554&id=100003286262340&set=a.101143420005200.1116.100003286262340&source=11&ref=bookmarks",
      "comments": "",
      "email": "gmohit200@gmail.com",
      "projects": "Apna Parivar, Gender Sensitisation, Extra Currics, Animal Care",
       "name": "Mohit Goyal"
     },
    {"description": "I like to communicate and socialize with new people; love to read novels and manga. Interested in research in the field of Molecular Biology and Genetics.",
      "designation": "Executive",
      "image": "https://drive.google.com/file/d/0Bw3QpBjGmmmwRktfSks5bkVZakU/view?usp=drivesdk",
      "comments": "",
      "email": "sakshamre@gmail.com",
      "projects": "Green Warrior, Gender Sensitization, Bachpan",
       "name": "Saksham Sharma"
     },
    {"description": "\u0915\u094b\u0908 \u092d\u0940 \u0915\u093e\u092e \u0916\u093c\u0941\u0936\u0940 \u092a\u093e\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u0928\u0939\u0940\u0902 \u092c\u0932\u094d\u0915\u093f \u0939\u0930 \u0915\u093e\u092e \u0916\u093c\u0941\u0936\u0940 \u0938\u0947 \u0939\u0940 \u0915\u0930\u0928\u093e \u091a\u093e\u0939\u093f\u090f\u0964 This was a line I learnt from my school director. Also I always try to sit in a receiving mode. Apart from this I love to interact with people and teaching children. I also like music.",
      "designation": "Executive",
      "image": "https://drive.google.com/open?id=0B28bYWHU2mynaUxaUjA5WFpfcFk",
      "comments": "",
      "email": "sanchitsharma596@gmail.com",
      "projects": "Apna Parivaar Children Home, Lakshyam, SIC, Climate Crusade",
       "name": "Sanchit Sharma"
     },
    {"description": "I like to teach children and love to watch tv series",
      "designation": "Executive",
      "image": "https://drive.google.com/open?id=0B_bu92HqZI4RMTZzeXpYZm9zZGc",
      "comments": "",
      "email": "sarthakasati@gmail.com",
      "projects": "Munirka Teaching Project,RTE Munirka,Health Camps",
       "name": "Sarthak Asati"
     },
    {"description": "One of the most precious things which we have got: Friends, love to be with them, roam, study and make new ones. watching web/tv series and standup comedy are my other favourites.",
      "designation": "Executive",
      "image": "https://drive.google.com/open?id=0B0ksTsJSjQR6Ry1laXpKRjMxTzA",
      "comments": "",
      "email": "online.shivamkumar@gmail.com",
      "projects": "Substance Abuse, Road Safety, Toys from Trash",
       "name": "Shivam kumar"
     },
    {"description": "A person, prior to the responsibilities. Love to interact with people and have lengthy discussions. Possessing a great learning attitude, it's not okay for me, unless I do it. A social freak, traveller and truly a nature lover.",
      "designation": "Executive",
      "image": "https://drive.google.com/file/d/0B9xIXqE0MN7ROEdMVzR4dlAtckk/view?usp=drivesdk",
      "comments": "",
      "email": "singlashivam022@gmail.com",
      "projects": "Green Warrior, Anti-human Trafficking, Extra Currics",
       "name": "Shivam Singla"
     },
    {"description": "I like to interact with different people and always seek to learn something from them. My first impression in people's mind is that I am introvert person but when you will spend time with me you will explore real me. I like playing badminton, chess, reading novels and listening music.",
      "designation": "Executive",
      "image": "https://drive.google.com/file/d/0B-2oX8LYYkA7dmR3dHZITG84S3M/view?usp=sharing",
      "comments": "",
      "email": "ujjwaltater92@gmail.com",
      "projects": "Aarohan, Anti-Human Trafficking, Road Safety",
       "name": "Ujjwal N Tater"
     },
    {"description": "I just find myself happy with simple things, appreciating the blessings God gave me. I love myself, I love my crazy lifestyle. I love that I have learned to trust people by heart. I take a lot of pride in being myself. I am comfortable with who I am.",
      "designation": "Executive",
      "image": "https://drive.google.com/file/d/0B7rFH7s4JT_pSDVQSjUtdEpnaHM/view",
      "comments": "",
      "email": "vidarya99@gmail.com",
      "projects": "NAB, Food for Thought, Cleanliness drive, Collection drive, Internships",
       "name": "Vidushi Toshniwal"
     },
    {"description": "I love to learn new aspects of life from wherever I can, meeting new people and sharing their experiences, trying new activities, travelling all are (I believe) part of the learning. I believe our each and every step counts in c",
      "designation": "Executive",
      "image": "https://goo.gl/photos/kVMjuuNqw2uhKVmw6",
      "comments": "",
      "email": "vikrambaranwal46@gmail.com",
      "projects": "Old age home, Dnip Care, Tree Plantation and Nature Walk, Collection Drives",
       "name": "Vikram Baranwal"
     },
    {"description": "I am a little introvert, I guess. But those who know me closely can tell that I can be very talkative especially when it comes to intellectual or ethical talks . I like playing badminton. I am quite emotional especially for kids and animals. My bucket list includes a world tour with besties and watching snowfall\ud83d\ude0d.",
      "designation": "Executive",
      "image": "https://drive.google.com/file/d/0B49h5Nq1VMV2RW04bllmeWI3Vk0/view?usp=drivesdk",
      "comments": "",
      "email": "yashasvi1611@gmail.com",
      "projects": "Oldage Home,Toy from Trash ,Animal Care, Health Camps, Gender Sensitization, Inventory",
       "name": "Yashasvi Maurya"
     },
    {"description": "Not me but you.",
      "designation": "M.Tech / PhD Rep",
      "image": "https://drive.google.com/open?id=0B700YVZ2p-yyaFRoeERPMi1hbFdENzZYUTZLbTdDQWhjOV9R",
      "comments": "",
      "email": "iitd.hardik@gmail.ccom",
      "projects": "Old Age Home, NAB, Blood Donation Camps, Tree Plantation and Nature Walks, Animal Care, Bachpan",
       "name": "Hardik Patel"
     },
    {"description": "When I look at little kids, I see unlimited possibilities. I love to inspire and awaken the flames in their heart. I want to be the teacher the kids need, they would hunt me down with their questions because they know I can take it. I love being their watchful protector, a silent guardian, their Batman. ",
      "designation": "M.Tech / PhD Rep",
      "image": "goo.gl/wRjV6J",
      "comments": "",
      "email": "ask.mandeep.singh@gmail.com",
      "projects": "Vidya, Lakshyam, Aarohan, Animal Care, Humans for Animals",
       "name": "Mandeep Singh"
     },
    {"description": "I consider myself an evolving specie. Everyday I learn new things which adds new dimension and knowledge to my life. I am inspired by Sir Kalam. I would like to contribute my gained experiences for humanity through scientific temperament, social inclusiveness and our indigenous morality",
      "designation": "M.Tech / PhD Rep",
      "image": "https://drive.google.com/file/d/0B_12hJSQNUDlVklvYXVYX0FwNVk3ZXJPTnUyNmViV2twcE9v/view?usp=drivesdk",
      "comments": "",
      "email": "rehanali.iitr@gmail.com",
      "projects": "",
       "name": "Rehan Ali Pradhan"
     }
  ];
});
