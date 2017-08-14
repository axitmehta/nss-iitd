var app = angular.module('app', ['ngMaterial','ngAnimate','ngRoute','ngMessages','ngSanitize','angular-carousel']);
app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
  .primaryPalette('teal', {
   'default': '400',
   'hue-1': '100',
   'hue-2': '600',
   'hue-3': 'A100'
  })
  .accentPalette('orange');
});


// routes for the urls
app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
  $routeProvider.when("/", {
    controller: "MainCtrl",
    templateUrl: "templates/home.html"
  }).when("/about_nss", {
    controller: "MainCtrl",
    templateUrl: "templates/about.nss.html"
  }).when("/about_domains", {
    controller: "MainCtrl",
    templateUrl: "templates/about.domains.html"
  }).when("/about_collabs", {
    controller: "CollabCtrl",
    templateUrl: "templates/about.collabs.html"
  }).when("/about_collabs_apply", {
    controller: "CollabCtrl",
    templateUrl: "templates/about.collabs.apply.html"
  }).when("/faq", {
    controller: "MainCtrl",
    templateUrl: "templates/about.faq.html"
  }).when("/internship", {
    controller: "MainCtrl",
    templateUrl: "templates/internship.html"
  }).when("/involve_internship", {
    controller: "MainCtrl",
    templateUrl: "templates/involve.internship.html"
  }).when("/involve_events", {
    controller: "MainCtrl",
    templateUrl: "templates/involve.events.html"
  }).when("/involve_volunteering", {
    controller: "MainCtrl",
    templateUrl: "templates/involve.volunteering.html"
  }).when("/download_magazine", {
    controller: "MainCtrl",
    templateUrl: "templates/download.magazine.html"
  }).when("/download_app", {
    controller: "MainCtrl",
    templateUrl: "templates/download.app.html"
  }).when("/download_report", {
    controller: "MainCtrl",
    templateUrl: "templates/download.report.html"
  }).when("/pending_hours", {
    controller: "MainCtrl",
    templateUrl: "templates/hours.pending.html"
  }).when("/hours_complaint", {
    controller: "MainCtrl",
    templateUrl: "templates/hours.complaint.html"
  }).when("/hours_policy", {
    controller: "MainCtrl",
    templateUrl: "templates/hours.policy.html"
  }).when("/download_report", {
    controller: "MainCtrl",
    templateUrl: "templates/download.report.html"
  }).when("/team_current", {
    controller: "TeamCtrl",
    templateUrl: "templates/team.current.html"
  }).when("/team_previous", {
    controller: "TeamCtrl",
    templateUrl: "templates/team.previous.html"
  }).otherwise({
    controller: "MainCtrl",
    templateUrl: "templates/error.html"
  });
}]);

app.controller('CollabCtrl', function($scope, $location, $mdDialog, $mdToast, $rootScope, $routeParams, $http, $window, $log, $document, $mdSidenav, $timeout) {

  $scope.expandDetail=function (ngo, ev) {
    $mdDialog.show({
      controller: function ($mdDialog) {
        var vm = this;
        vm.info = {};
        vm.info = ngo;  //your task object from the ng-repeat

        $scope.hide = function () {
          $mdDialog.hide();
        };
        $scope.cancel = function () {
          $mdDialog.cancel();
        };
      },
      controllerAs: 'infomodal',
      templateUrl: 'templates/about.collabs.details.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
    .then(function(answer) {

    }, function() {

    });
  };

  // NGO collaboration list starts from here
  $scope.collabrationNGOs=[{"image": "neem.jpg", "description": "In the words of Mahatma Gandhi, \u201cLiterary Education is of no value if it is not able to build up a sound character.\u201d Keeping the above thought in mind, The Neem School Project was initiated by NSS IITD in collaboration with the White Swan Foundation to ensure quality value education in slum children. We, as a part of the Neem school, visit slums near IITD and try to inculcate the values of honesty, integrity, kindness, helping- nature, cleanliness, hygiene and a lot more through fun filled activities like painting, story-telling, games, etc. The NSS volunteers, called the Value Initiators, interact with the Value Multipliers, i.e. children in age group of 6-14 years and aim at developing good moral character and conduct in the children.", "link": "http://nss.iitd.ac.in/links/NEEM_School", "name": "Neem School", "location": "Katwaria Sarai"},
  {"image": "vidya.jpg", "description": "To the world you may be just a teacher, but to your students you are a HERO.\nThe foundation of every nation is the education of its youth. Believing in this core value, our prime focus at VIDYA is to teach students from classes 4th to 10th and inculcate the fundamental concepts of all subjects, especially Mathematics and Science. Teaching is a wonderful activity, not only the students learn but we, as their tutor and guide, learn a lot too. Volunteers of our teaching projects have demonstrated to have a lot of fun while teaching the kids. We follow a simple and flexible technique of teaching with adoption of interactive learning methodologies, focused on activity based teaching and learning experience. Our contribution includes helping the kids with their regular homework and providing remedial sessions for their doubts and conceptual understanding of the subject. We do believe in 'all work and no play makes jack a dull boy'. Abiding by this, an equal importance is also given to co-curricular activities which not only freshen up minds of the students but also help them develop inter-personal skills. In order to achieve out targets and ensure a good learning exercise, our volunteers go to Kendriya Vidyalaya, near Kailash hostel on all weekdays from 3-5 pm. Volunteers are expected to be regular and enjoying the task they have taken up. And as NSS, we try to provide you the atmosphere to help you develop the memorable experience.", "link": "http://nss.iitd.ac.in/links/VIDYA_Teaching", "name": "VIDYA Teaching Project", "location": "Kendriya Vidyalaya, IITD"},
  {"image": "apna1.jpg", "description": "A stable and nurturing childhood is essential for a healthy physio- emotional and spiritual development of a human being. Aiming this in children's home project we try to give kids various exposure to different things, inculcate thinking skills in them, provide them creative environment for studies through various activities. \"An investment in knowledge pays the best dividends\". Other than studies our focus is to develop their personality and improve their interpersonal skills. In this project 4 volunteers visit Apna parivaar children's home on every sunday from 12:30 to 5:30 in Mandigaon (near Chhatarpur). For keeping the regular track on kids volunteers have to be regular and passionate for the work.", "link": "http://nss.iitd.ac.in/links/Apna_Parivaar_Children_Home", "name": "Apna Parivaar Children Home", "location": "Mandi Village (Near Chhatarpur)"},
  {"image": "", "description": "With its aim to provide quality education and inculcate learning habits in students pursuing Engineering Entrances who neither can afford nor have access to these values in current society., we teach Board  as well as JEE level material consisting of Physics, Chemistry and Mathematics to students of Class11,12 and 12 Droppers. From the volunteer point of view, it is aimed at developing skills like teaching which requires a lot of patience and communication abilities.", "link": "", "name": "Aarohan", "location": "Blocks,HauzKhas,IITD"},
  {"image": "", "description": "\u201cAn over-indulgence of anything, even something as pure as water, can intoxicate.\u201d Thankfully water is not addictive, but alcohols, drugs and cigarettes are. Under this project we try to eradicate this problem of abuse in our IIT campus. Two domains in which we work include 1. Making the new-comers aware of the problem. 2. Recovery of the people indulged in this abusing.", "link": "", "name": "Substance abuse project", "location": "IIT Delhi"},
  {"image": "", "description": "Supporting the Swachh Bharat Abhiyan, this project aims at conducting drives to clean that place and thus sensitize students as well to not litter public places.", "link": "", "name": "Cleanliness Drive", "location": "IIT Delhi"},
  {"image": "", "description": "The project aims to segregate recyclable paper from normal waste in the institute. It also aims at sensitising the community about the wastage of paper.", "link": "", "name": "Waste Paper Recycling Initiative", "location": "IIT Delhi"},
  {"image": "", "description": "As truly said that, \"Hope is being able to see that there is light despite of the all darkness.\" Believing in the same this project works for the upliftment of the blind girls. There is a well-known saying that, teacher can change life with just the right mix of chalk and challenges. Our main focus here is to educate them so that the can stand on their own feet. There are girls from different classes. We teach them different subjects English, maths, computer, etc. Not only this much they also learn handicraft, spa and other courses also. They make many beautiful things on their own and those things are sold.", "link": "", "name": "NAB ", "location": "NAB hauz khas, NAB RK Puram "},
  {"image": "", "description": "The SIC is most appropriately a blend of the two terms that we all relate to, NSS and IITD. We, at the Social Innovation Cell aim to utilize the available technology and design new techniques to target problems faced by the society and for conservation of resources. We try to achieve this aim by motivating and training the IITD student population to innovate for the societal well-being.", "link": "", "name": "SIC", "location": "IIT Delhi"},
  {"image": "", "description": "The munirka project aims for the upliftment of the slum community by making it self-reliant in various spheres.  We believe that the future of the community is in the hands of the children of the community. Hence, our prime focus is on the overall character development of the kids mainly through education. We provide help to the kids of Munirka slums not just by teaching them but to instil in them love for education so that they may excel in their future endeavours. This is done by interactive teaching and by conducting various fun activities. Extra-curricular activities are also organised to ensure that each kid has a multifaceted personality. Other than that we try to inculcate moral values in them. NSS volunteers are required to go to Munirka Basti from Jwala circle and teach kids various subjects. Volunteers are also needed to design content for teaching and plan activities.", "link": "", "name": "Munirka Teaching Project", "location": "Munirka Basti (Near RK Puram) "},
  {"image": "", "description": "In collaboration with lakshyam NGO we work to develop Sindhi basti as a model basti in which we can get a glimpse of future INDIA. We talk to people there and make them aware about various issues concerning them like cleanliness, sanitation etc. As Children are the future of any community thus we also interact with children and teach them moral values so that they can avoid involvement in illegal activities. Our main purpose is to make people broad minded and also in this process volunteers get an exposure of a very backward slum.", "link": "", "name": "Lakshyam Community Development", "location": "Sindhi Basti, Vasant Kunj, E-2"},
  {"image": "dnip.jpg", "description": "DNip-Care (www.dnipcare.org) is an NGO dedicated to improving the quality of life of long-term, terminally ill, bedridden patients, mostly cancer patients. Our volunteers generally go every weekend to visit these patients at their homes; or in a hospital, and try to spend some time with them as their well-wishers/ friends. Our strategy is to-1.Offer emotional support; 2.Establish a network of volunteers, nurses and doctors with expertise in palliative care to support such initiatives; 3.Facilitate the development of locally sustainable home care programs; All this with the active support of our esteemed volunteers and well-wishers.", "link": "", "name": "Dnip Care", "location": "Dharamshala of Delhi Cancer Institute, Dilshad Garden"},
  {"image": "animal.jpg", "description": "Under this project, we try to analyse the behaviour of people towards animals and of animals towards us. As the name suggests, we try to motivate people to care for the animals. The animals are equally important to earth and deserve the same amount of love as we do. This project also aims at making people realise the pain or suffering they intentionally or unintentionally give to the nature primarily animals. We facilitate interactions in and out of campus, tell people how to deal with animals and provide a platform for enthusiasts to do their bit. With this we create a coexistence.", "link": "", "name": "Animal Care", "location": ""},
  {"image": "internship.png", "description": "Where volunteering is a platform for you to contribute selflessly, Internships are chosen to gain some ground exposure, qualities and experience. There are different types of internships under NSS, within our projects and with the NGOs. Internships with NGOs are a platform for volunteers to expand their experience beyond the domain of NSS IITD, in different parts of country.", "link": "", "name": "Internships", "location": "All acoss India"},
  {"image": "", "description": "Climate Crusade is an initiative taken by NSS IIT Delhi to tackle the growing concern over Climate Change which is quite a \"hot\" topic nowadays.\nWe need to realise that the average temperature of the earth has been rising continuously from the years of industrial revolution. Although the rise in temperature is normal but the rate of rise of temperature which is quite alarming is not normal. This leads us to debatable topic of Climate Change. Some say that the climate is actually changing some say it is not.\nMost of our activities would be research based. We will be conducting various studies and surveys and try to analyse them on the institute or city level and make fruitful conclusions. However, our main focus would be - To make everyone aware of this issue so that they are able to classify it accordingly in the shades of grey.", "link": "", "name": "Climate Crusade", "location": "IIT Delhi"},
  {"image": "", "description": "Toy from Trash or TFT is an initiative of NSS IITD to create a interest among the kids in the field of science and engineering. Our main targets are those kids who are deprived of proper environment where they can develop their interest. As the name suggest the volunteers make some scientific toys from useless or easily available materials. They then demonstrate these in munirka village or apna parivar.", "link": "", "name": "Toy from trash", "location": "Munirka and apna parivar"},
  {"image": "", "description": "Through this project we try to analyse and show people that certain stereotypes and notions about gender and sex are questionable and need to be rectified. We initiate discussions on topics like equality, stereotypes, discrimination based on gender etc., among people, to make them realise the need  and bring out quality solutions.", "link": "", "name": "Gender Mainstreaming", "location": "IIT Delhi"},
  {"image": "", "description": "This project of NSS IITD is run in collaboration with Food4Thought Organization with a purpose to connect idle books to hungry minds, restore endangered books & stories, reignite the joy of reading and build school & community libraries. With this we aim to bring a reading revolution. Books can spread knowledge, change lives and  bring revolutions. Books are the link which connects ages and makes  humanity flow. We help  children in reading books. We make sure that they have exposure to books other than just coursebooks. We ask people and  institutions to donate used books and provide those books to the needy.", "link": "", "name": "Food4Thought", "location": "Delhi"},
  {"image": "5thspace.jpg", "description": "Bound by the 4 spaces of family, friends, work and leisure, we aim to create a fifth space which is a space  to \u201chang out\u201d, meet others, share opinions and views and take action; to think beyond, learn, do and be more. A platform which will make the other 4 count. The project would be full of activities, discussions and YOU, the YOUth.", "link": "", "name": "5th Space", "location": "IIT Delhi"},
  {"image": "", "description": "\"Earth provides enough to satisfy every man's needs, but not anyone's greed\" as said by Mahatma Gandhi. Our project team members, commonly referred as the \"Green Warriors\" work on sensitizing the commoners about environment conservation, presenting them solutions to their day-to-day wastage, and connecting them to nature. It is well-known for our every problem, there are experts to counter them, the need is just to ask for a solution. We help in making a platform, such that people ask for such questions, related to their daily effects on nature's degradation, because questioning your actions is really important.", "link": "", "name": "Green warrior", "location": "IIT Delhi"},
  {"image": "", "description": "As the saying goes,\"In youth the days are short and the years are long, in old age the years are short and day's long\", the primary aim of oldage home project is to provide mental support to the old people, in a way such that the volunteers also learn something from it.Currently we are aiming at forming a connection between old age homes and orphanages because both can prove to be strong support to each other. We also want to convert it into a sustainable model. The volunteers, oldage home and orphanage residents are the primary stakeholders. We do regular visits to oldage homes, in addition to making combined visits with children from orphanage or homes(currently umeed home). In this way we try to establish a permanent connection between them so that in future whenever they feel like, they should be able to visit each other.", "link": "", "name": "Old age home", "location": ""},
  {"image": "", "description": "The campaign was set up with the vision that we will do our best to bring the ugly reality of human trafficking in front of general public with the ultimate aim that no person man, woman or child, be sold, purchased, violated or be subject to any form of exploitation. Various events to sensitize IITD community against this evil are conducted regularly. ", "link": "", "name": "Anti-Human Trafficking Project", "location": "IIT Delhi, Kat-katha NGO"},
  {"image": "", "description": "Under this project, we try to teach some extra activities which some people can't afford to learn despite of having interest and talent. In this way, they get to learn something and also they gain confidence which is very crucial for them. Through teaching them music or dance, the volunteers also get to improve themselves in various aspects, in this way both the sides get to develop.", "link": "", "name": "Extra Currics", "location": ""},
  {"image": "", "description": "The project aims to aware the people about the Right To Education act and if they are eligible to get benefitted from this then we also help them to fill the online form.", "link": "", "name": "RTE", "location": "Munirka Basti (Near RK Puram) "},
  {"image": "collectiondrive.jpeg", "description": "Collection drives aim to collect materials no longer in use and deliver them to people who cannot afford them. We collect clothes, utensils, booka and medicines from hostels and residential areas. These, after sorting, are sent to an NGO named Goonj, which provides them to the needy ones", "link": "http://nss.iitd.ac.in/links/Collection_Drive", "name": "Collection Drives", "location": "IIT Campus"},
  {"image": "roadsafety.JPG", "description": "With the aim of making indian road safer, NSS IIT Delhi started its road safety project. To achieve this aim we conduct \u00a0lecture cum discussion session on Road Safety, workshops for first hand experience, field visits and also two types of internships,i.e, policy and technical. An annual competition, WATCH THE ROAD, is held from last 2 years at TRYST wherein participants from various colleges across the country work on a Road Safety Problem and try to implement feasible solutions for the same.\nThrough Watch the road we try to channelize youth's energy to bring a policy or infrastructural change to reduce road accidents. We want to make Indian road safer by not just spreading awareness but also coming up with technological and innovative solutions to existing problems related to road safety.", "link": "", "name": "Road Safety project", "location": "IIT Campus and ouside IIT too"}];
});

app.controller('MainCtrl', function($scope, $location, $rootScope, $mdDialog, $window,  $mdSidenav, $timeout) {
  $scope.toggleLeft = buildToggler('left');
  $scope.toggleRight = buildToggler('right');
  $rootScope.isPath= function(viewLocation) {
    return viewLocation === $location.path();
  };
  function buildToggler(componentId) {
    return function() {
      $mdSidenav(componentId).toggle();
    };
  }
  $timeout(function() {
    $rootScope.loadingComp=true;
  }, 0);
  $scope.subscribe = function (user) {
      $window.location.href= ('https://groups.google.com/group/'+user.type+'/boxsubscribe');
  };

  // caraousel Images starts from here
  $scope.carouselImages= [
       {
            "Name" : "Artists performing in Rendezvous 2017",
            "img" : "images/carousel/image1.png"
        },{
            "Name" : "Artists performing in Rendezvous 2017",
            "img" : "images/carousel/image2.jpg"
        },{
            "Name" : "Artists performing in Rendezvous 2017",
            "img" : "images/carousel/image3.jpg"
        },{
            "Name" : "Artists performing in Rendezvous 2017",
            "img" : "images/image4.jpg"
        }
    ];


    // FAQ's starts form here
  $scope.accordianData = [
        {
            "question" : "What is NSS IIT Delhi all about?",
            "answer" : "NSS IITD is an initiative taken up by IITD students to participate in service of humanity. We wish to work towards building a beautiful world and spread message of environment, peace, education among today's youth. We believe in bringing the change we wish to see. <br> 		If you wish to work with us to create a positive impact in the society, join our hands and be a part of this journey together."
        },
        {
            "question" : "Sounds interesting. Who all can be a part of it?",
            "answer" : "Anyone can help us in our initiatives in whatever capacity they can.<br> If you are a student of IIT Delhi, you need to choose an option between NSS, NCC and NSO at the time of taking admission and have to complete stipulated hours of work (2010-2012 entry -90 hrs, 2013-2014 entry - 100 hrs) among any one of them. If you choose NSS as an option, then you need to complete these hours in NSS.<br> Even if you decide to opt for NSO/NCC, you can help us in our initiatives if  you wish to."
        },
        {
            "question" : "I opted for NSS/NSO/NCC earlier but now I wish to change it. Is it possible?",
            "answer" : "For 2014 entry students, during Semester II  only freshers are allowed to switch from NSO to NSS and vice-versa. The exact procedure of NSO-NSS change will be notified to you well before that time comes.<br> If that time has already gone by, or if you are not a fresher, then just have faith in these words of Ratan Tata, 'I don't believe in taking right decisions; I take decisions and make them right.'<br> Also, neither a NSS/NSO student can change into NCC, nor a NCC student can change into NSS/NSO. The above mentioned quote is the only solace which we could provide to you in this case. However in special circumstances if you have opted for NCC/NSO and are unable to take part in their activities for medical reasons, you could be allowed a shift to NSS after necessary approval from the respective coordinators.<br> Anybody who wishes to be a part of any NSS activity is invited and attendance for all will be taken."
        },
        {
          "question":"Can you please explain this ’90/100 hours’ rule in NSS? How strictly is it followed?",
          "answer":"As mentioned above, you need to complete 100 hours in NSS/NSO/NCC depending on the choice you make. We have our hours policy which we strictly follow to give hours to NSS volunteers.<br> 2013 and later entry students have to complete their 100 hours ( 2012 and prior have to complete 90 hours) by the end of 4th Semester. Else you will not be allowed to register for 		2012 and prior entry students  need to complete their respective hours by the end of 2nd Semester 2014-15 else they will not get registered for their next semester."
        },
        {
          "question":"What if I’m unable to complete my 100 NSS hours in the first two years?",
          "answer":"According to IIT rules, a student is not allowed to register in the 5th semester if he/she hasn’t completed his/her hours by the end of second year in IIT."
        },
        {
          "question":"You have mentioned 'Ground' (earlier 'Non-lecture') and 'Non ground' (earlier 'Lecture') events in your hours policy. What is the exact difference in these kind of events? What is Compulsory module hours?  And why can’t I complete all my hours with lecture events?",
          "answer":"<u>Non Ground</u> event are those events in which you are made aware about social issues prevailing in the society. It could include speeches, movies and discussions but doesn’t involve any ground-level work. It is a first step on the path of social change. Also Non Ground level volunteering includes all online, Content Development and tech related work one does.<br> In <u>Ground</u> events, you are just not allowed to sit in a LT. You are taken to the outside world where you volunteer for the cause you believe in. It could be anything related to education, nature, health, women empowerment, tech projects or anything which you think can create a social impact.<br> 		<u>Compulsory module hours</u> are for 2014 and later entry students, wherein certain activities are tagged as compulsory module hours and you need to complete 20 hours of volunteering in this module. These aim to provide a larger picture about social causes and will help you identify your area of interest.<br> 		You are not allowed to complete all your hours through Non Ground events because we want you to experience the real thing! When you go out and try to give something to this world, you get more from this world than you expected. In the end, you will be a better person and you won’t complain about this 50 hours restriction.<br> Remember the words of Confucius - 'I hear and I forget. I see and I remember. I do and I understand.'"
        },
        {
          "question":"But I know some seniors who are facing difficulties in completing their NSS hours. Is NSS actually so difficult?",
          "answer":"'Nothing in the world is difficult, it is only our own thoughts that make things seem so.'<br>	Completing hours in NSS is not a difficult task at all. The easiest way to complete your hours is not to think about it. There is plethora of activities in NSS which happen throughout the year. You just need to find the activities which are meant for you. If you are able to find them, you’ll start loving this work and completing hours will become a cakewalk for you.<br> So, just keep your eyes open and have a heart for the world!"
        },
        {
          "question":"Sounds good. So, what are the various NGOs where it is possible to volunteer through NSS? Can you elaborate the work done by them? ",
          "answer":"You can find the list of all NGOs, their work profile and the point of contact here:<a href='http://www.nssiitd.in/volunteering-opportunities' target='_blank'>http://www.nssiitd.in/volunteering-opportunities</a><br> We encourage people to find other organizations in diverse fields for volunteering. NSS IITD wants people to gain as much exposure to social and environmental issues as possible. To know more about our volunteering policy, please visit this link:<a href='http://www.nssiitd.in/volunteering-policy'>http://www.nssiitd.in/volunteering-policy</a><br>Are all NSS events carried out within IIT campus, or also outside it?	In case of any query or confusion, you can always contact us at <a href='nssinbox@gmail.com.'  >nssinbox@gmail.com.</a>"
        },
        {
          "question":"Are all NSS events carried out within IIT campus, or also outside it?",
          "answer":"Some people say that IIT is the world. We disagree. There is a lot more in this world outside IIT to explore. In NSS, we try to provide you wide variety of opportunities out of which you can choose whatever you wish to.<br> You can always volunteer in a NGO of your interest, explore the nature through nature walks, be a part of urban and rural internships during vacations, come along us in exposure trips to different communities, work on a NSS project to bring a change and many other exciting things."
        },
        {
          "question":"How will I get to know about any upcoming NSS event? Or any ongoing volunteering with an NGO?",
          "answer":"You can subscribe to the Google group of your respective year to get updates about the upcoming NSS events.<br>To subscribe to google group: <a href='http://nss.iitd.ac.in/subscribe.html' target='_blank'>http://nss.iitd.ac.in/subscribe.html</a><br> 		Another way is NSS mobile application and FB group.<br>		We try to be eco-friendly and thus generally do not put posters in the campus for the upcoming events and rather focus on online publicity through gmail and facebook. We also have a sms-channel running in every hostel and you can subscribe to it by contacting NSS member of your hostel.<br>	Some of the important links that might come handy are:		Website: <a href='http://www.nssiitd.in' target='_blank'>http://www.nssiitd.in</a><br> Facebook page: <a href='https://www.facebook.com/NSSIITDelhi' target='_blank'>http://www.facebook.com/NSSIITDelhi</a><br>		NSS Mobile Apps.: <a href='http://nss.iitd.ac.in/app.html' target='_blank'>http://nss.iitd.ac.in/app.html</a><br> 	NSS FB Group: <a href='https://www.facebook.com/groups/nssiitd/' target='_blank'>https://www.facebook.com/groups/nssiitd/</a><br>	NSS Blog: <a href='http://www.nssiitd.blogspot.in' target='_blank'>http://nssiitd.blogspot.in</a>"
        },
        {
          "question":"Is NSS just about the conventional social service? Where is the fun involved in it?",
          "answer":"The answer depends on how you define the term ‘conventional social service’. NSS is all about bringing happiness in life of people around us, directly or indirectly. We try to make this world a better place to live in; socially and environmentally. If you think that bringing smiles to someone’s face comes under conventional social service, then yes, NSS is just about that. Else, we are much more than that.<br> To know if there is fun involved in it, you need to get involved in it. The kind of happiness that you will get by adding smiles to someone else’s life is difficult to describe in words. We are not selfless bunch of students; we do it because we find fun for ourselves in it. <br> 		Join us and explore the answers on your own! :)"
        },
        {
          "question":"I’m involved in other activities in IIT too. Will NSS events' timings match with the timings feasible to me?",
          "answer":"Yes. We have events and volunteering opportunities after classes and even on weekends. There are regular volunteering opportunities which could be chosen according to your free timings. If you are not able to devote much time during the semester, you can join any of the internships floated by us in summer or winter vacations."
        },
        {
          "question":"What are internships? How are they different from volunteering?",
          "answer":"Internships are the activities that are done in summer and winter vacations that involve greater and continuous involvement for a period of 2-6 weeks. They involve work for greater hours per day and throughout the week. We provide internship opportunities in different organizations both in and outside Delhi. You also have the opportunity to do a rural internship and experience life of ‘true Bharat’ for the period. Sometimes, people prefer an internship close to their hometown too.<br>	To know more about our internship policy, please visit: <a href='http://www.nssiitd.in/internship-policy' target='_blank'>http://www.nssiitd.in/internship-policy</a>"
        },
        {
          "question":"there are still some doubts left in my mind. Who can help me to resolve my queries?",
          "answer":"You can find all of our current team members on<a href='http://nss.iitd.ac.in/current-team.html' target='_blank'> http://nss.iitd.ac.in/current-team.html</a> . It would be better if you ask your queries to a team member who belongs to your hostel as it would be easier to contact him/her. 	In case you feel your query wasn’t solved, you can mail us at nssinbox@gmail.com. It has answer of all questions related to NSS!"
        }
    ];
    $scope.collapseAll = function(data) {
       for(var i in $scope.accordianData) {
           if($scope.accordianData[i] != data) {
               $scope.accordianData[i].expanded = false;
           }
       }
       data.expanded = !data.expanded;
    };
});

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
