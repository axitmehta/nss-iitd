app.controller('TeamCtrl', function($scope, $location, $mdDialog, $mdToast, $rootScope, $routeParams, $http, $window, $log, $document, $mdSidenav, $timeout) {

  $scope.currentTeam=[
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

});
