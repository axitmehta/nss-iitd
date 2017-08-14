#### To add new NGO to list ####

Search for ` $scope.collabrationNGOs ` array and add new object into it.

Here is an example of NGO object

```

{"image": "path/of/image", 
 "description": "some random description", 
 "link": "http://google.form.link/", 
 "name": "Some Awesome name", 
 "location": "Random location"}

```
Similarly, 

#### To add new Images to carousel (front page, first section) ####

Search for `$scope.carouselImages ` array and add new object into it.

Here is an example of NGO object

```

{
   "Name" : "Artists performing in Rendezvous 2017",
   "img" : "images/carousel/image1.png"
}

```

#### FAQ's ####

` $scope.accordianData `

```
{
    "question" : "What is NSS IIT Delhi all about?",
    "answer" : "NSS IITD is an initiative taken up by IITD students to participate in service of humanity. We wish to work towards building a beautiful world and spread message of environment, peace, education among today's youth. We believe in bringing the change we wish to see. <br> 		If you wish to work with us to create a positive impact in the society, join our hands and be a part of this journey together."
  }
```

#### Team ####

` $scope.lastTeam ` and ` $scope.currentTeam `

Put images into `images/team` directory

```

   "description": "Super Coll description",
   "designation": "Cool bouy",
   "image": "awesome.jpg",
   "comments": "empty",
   "email": "cool@bouy.jpg",
   "projects": "Vidya, Lakshyam, Aarohan, Animal Care, Humans for Animals",
   "name": "Awesome Name"
 }
  ```
