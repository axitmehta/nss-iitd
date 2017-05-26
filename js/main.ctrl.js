app.controller('MainCtrl', function($scope, $location, $mdDialog, $mdToast, $rootScope, $routeParams, $http, $window, $log, $document, $mdSidenav, $timeout) {
$scope.collabrationNGOs=[
  { "desc":"<p>The objective of NAB is to educate and impart life skills to the visually impaired children so that they can self-reliant and contributing members of the society. Six to eight volunteers will be required each week to teach kids and to edit books. Volunteers also help them as scribes and in voice recording. The only thing worse than being blind is having sight but no vision.</p><ul>Type of work:    <li>Teaching one-on-one (mostly at higher secondary level)</li><li>Book Editing</li></ul><p>Six to eight volunteers are required each week, including the work of book editing .Volunteers are being sent regularly . Besides the above activities, they also help them in conducting their workshops, field surveys and filling up forms from time to time. </p>",
    "name":"National Association of Blind",
    "location":"",
    "form_link":""
  },
  { "desc":"<p>DNip-Care <a href='www.dnipcare.org'>(www.dnipcare.org)</a> is an NGO dedicated to improving the quality of life of long-term, terminally ill, bedridden patients, mostly cancer patients. Volunteers generally go every weekend to visit these patients at their homes; or in a hospital, and try to spend some time with them as their well-wishers/ friends. </p>",
    "name":"DNIP CARE",
    "location":"",
    "form_link":""
  },
  { "desc":"<p>    Imagine a childhood without TV, candies and toys. Strange, isn’t it? Would you like to be the ray of brightness in lives of some less fortunate children, by devoting some time of your lives to them? <br>    <br>    About Appna Parivar Children Home: A shelter to children aged between 6 and 12, the home has been started by Mr. Babu Rao. The children involve themselves in games mostly apart from studies. Appna Parivar Children Home is located in Chhatarpur.<br>    <br>    Volunteering: Volunteers will be required to visit the home and engage the kids in fun filled activities through which the children learn. Volunteers are required to go during the weekends for around 4 hours per day.  </p>",
    "name":"APPNA PARIVAR CHILDREN’S HOME",
    "location":"",
    "form_link":""
  },
  { "desc":"<p>Have you ever come across homeless, old people? How did you react?Can you imagine a life where your own children have abandoned you?  <br>  If the above questions raise thoughts in your mind as well, then join hands with the NSS  Team to transform your reaction into action, which can bring a smile to many faces.  <br><br>   About Rana Senior Citizen Home: The home has been set up by Mr. S.P. Rana. Around 78 senior citizens stay at this home, where they are taken care of by a couple of maids. They are provided with all the basic amenities like food, clothing, medical help and other daily needs. A doctor regularly visits the home for a checkup of the residents.<br><br>  Rana Senior Citizen Home is located at B126, Neb Sarai, IGNOU Road, Delhi.  <br><br> Volunteering: Volunteers will be required to visit the home and provide emotional support to the residents by interacting with them and engaging them in suitable activities. Volunteers are required to go during the weekends for around 2 hours each day. </p>",
    "name":"RANA SENIOR CITIZEN HOME",
    "location":"",
    "form_link":""
  }
];
$scope.collabrationProjects=[
  {"desc":"It is an initiative to bring social change in J.J. Basti by educating the children in the basti. The vision of the project is the overall upliftment of the community by educating it.Founded with Lakshyam NGO, the Lakshyam teaching project at present aims at familiarizing the students of a Vasant Kunj situated slum with basic English, Hindi and Mathematics. Volunteers teach elementary vocabulary ,spellings and elementary Mathematics to primary-school students along with extra curricular activities on weekends.",
    "name":"LAKSHYAM TEACHING PROJECT",
    "location":"",
    "form_link":""
  },
  {"desc":"Teaching small kids is certainly a lot of fun. We can be inspired by their innocence and enthusiasm. Teaching kids in itself is a rejuvenating activity which relieves us of stress. In Vidya, we teach all subjects to students from class 6th to class 10th, with focus on Science and Maths. The teaching methodology involves helping them in their homework and making them understand the nitty gritty of the subjects. The volunteers have go to at least twice a week to Kendriya Vidyalaya near Kailash hostel from 3 pm to 5 pm. The volunteers need to be regular for teaching the students.",
    "name":"VIDYA TEACHING PROJECT",
    "location":"",
    "form_link":""
  },
  {"desc":"AAROHAN TEACHING PROJECT<br><br> As students who are receiving quality education, it is our responsibility to pass on our knowledge to those who are deprived of it due to financial constraints.<br><br> Project Description: Here meritorious talent from the economically backward sections is guided by NSS volunteers for admission to IITs, India’s most prestigious engineering institutions. These underprivileged students of classes 11th and 12th go to MCD schools located nearby and are really enthusiastic about their studies. The kids come to the campus itself to study.Type of Volunteering: Classroom teaching: One semester of class for the subject you apply for. You have to be regular during the whole semester except in case of unavoidable circumstances.. There will be a 3 hours class for each subject weekly. Mentors: You need to be a mentor, adviser, confidant, counselor and most importantly, a friend to the mentee assigned. You need to take back-up classes, maintain attendance and keep their parents updated about their performance.",
    "name":"AAROHAN TEACHING PROJECT",
    "location":"",
    "form_link":""
  },
  {"desc":"Music Masti Project aims to introduce Music education among the underprivileged street kids & students of NSS IITD Teaching projects through the musicians of IIT Delhi. This project focuses on the upliftment of the deprived and poor street kids and the larger community by creating participatory music education programs and life-skills development.<br><br>The volunteers would be required to visit Munirka slums on weekends for sessions of 2-3 hours. They must have some skill/experience in music.",
    "name":"MUSIC MASTI PROJECT",
    "location":"",
    "form_link":""
  },
  {"desc":"Toys from Trash	Toys From Trash is an initiative where a group of volunteers spend some time with kids making learning fun for them using some science based toy. These toys serve two purposes - i) These toys are helpful to explain subtle science concepts to students and arouse curiosity in their minds.ii) These toys bring a smile on the faces of the kids who cannot afford them but instead they can make them on their own. https://drive.google.com/drive/my-drive	https://goo.gl/6Qcauh",
    "name":"TOYS FROM TRASH",
    "location":"",
    "form_link":""
  },
  {"desc":"Toys from Trash	Toys From Trash is an initiative where a group of volunteers spend some time with kids making learning fun for them using some science based toy. These toys serve two purposes - i) These toys are helpful to explain subtle science concepts to students and arouse curiosity in their minds.ii) These toys bring a smile on the faces of the kids who cannot afford them but instead they can make them on their own. https://drive.google.com/drive/my-drive	https://goo.gl/6Qcauh",
    "name":"MUNIRKA TEACHING PROJECT",
    "location":"",
    "form_link":""
  },
  {"desc":"Green Warrior is an initiative of NSS IIT Delhi with aim to minimize wastage in hostels and to make campus more environment friendly. It mainly works in three domains i.e. food, water and electricity wastage reduction in hostels, where we basically focus on sensitizing people as well as make small necessary changes to improve wastage reduction scenario at IITD.",
    "name":"GREEN WARRIOR",
    "location":"",
    "form_link":""
  },
];
$scope.collabrationInitiatives=[
  {"desc":"Ever thought what you can do about the growing cases of rape in the capital city? May be just changing the way you look at things can change a lot. Stree is an initiative of NSS IIT Delhi against sexual harassment by means of gender sensitization. <br> To know more about STREE, visit <a href='https://www.facebook.com/groups/stree2014'> Here </a>",
    "name":"STREE",
    "location":"",
    "form_link":""
  },
  {"desc":"As it has been seen in the last few months, cases of eve-teasing and rapes have gone on a rise, especially in metropolitan cities like Delhi. So it is the need of the hour to empower people with a technical solution so that they can feel safer on streets of cities, even when they are alone. Safe Hands serves the same purpose.<br><br>The app can be used to send distress messages to contacts stored in the app on a single press of a button. The message contains the location of the user and his/her distance and direction from a nearby landmark. The landmark model makes our app distinct as this model is not found in any of the similar apps present in the market.<br><br>The location is determined using GPS in the smartphone, eliminating the need for an internet connection. Just in case the GPS fails, the app uses GPRS to determine the location. And even if that fails, the app send a message without the location. The user can add as many contacts as he/she wants in the app, and message will be sent to all of them.<br><br>The app has a pre-installed database of landmarks in Delhi, which are used to determine a user’s location. But, the app also allows the user to add user-specific landmarks in the database, like their home and place of work. The user can add contacts to a location as well, making it more user-friendly and easier to locate the user. This allows the app to be easily used in cities other than Delhi.<br><br>We have been continually working on improving the app through testing and user feedback. We have tested the app with users at IIT Delhi and Delhi University and incorporated the suggestions of the users in the app. <br><br> We are in talks with Delhi Police as well so that in future the app can be used to send message to Police as well, making the user feel even more safer. A final nod to our proposal is awaited from the Commissioner of Delhi Police",
    "name":"SAFE HANDS APP",
    "location":"",
    "form_link":""
  },
  {"desc":"Stree firmly believes that the cause of all sexual attacks is the power men presume over women. The gender sensitization workshops let the people attending the workshop go through certain events of their daily lives and realize how the gender biases have become an essential part of their lives. Most of the workshops are based on discussion where it is the people attending the workshop who decide the course of the talk.",
    "name":"GENDER SENSITIZATION WORKSHOPS",
    "location":"",
    "form_link":""
  },
]
  console.log($scope.collabrationNGOs);
  console.log($scope.collabrationProjects);
  console.log($scope.collabrationInitiatives);


});
