app.controller('MainCtrl', function($scope, $location, $mdDialog, $mdToast, $rootScope, $routeParams, $http, $window, $log, $document, $mdSidenav, $timeout) {

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
