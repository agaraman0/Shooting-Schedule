# Schooting Schedule

A api to select shooting schedule for Actor if he is earning equal amount from every movie.

Problem can be solved by using Activity Selection or by using greedy Approach

## Assumption
+ Shooting Start Date is always greater then by end date
+ no invalid entry allowed in post request

## Tech Stack and Tools used

+ Node JS
+ VS Code
+ Postman

**Clone The Application**

```bash 

$ git clone https://github.com/agaraman0/Shooting-Schedule.git

$ cd Shooting-Schedule/

```
**To Run Application**

```bash 

$ npm install

$ node index.js

```

**Open Postman and make Post Request at**

http://localhost:3000

with this data format

```

{
	"data": [
		
		{
			"Movie":"Bala",
			"Start": "8 January 2020",
			"End": "28 January 2020"
	},
	
		{
			"Movie":"Rock",
			"Start": "20 January 2020",
			"End": "30 January 2020"
	},
	
		{
			"Movie":"PolicyMaker",
			"Start": "29 January 2020",
			"End": "16 February 2020"
	},
	
		{
			"Movie":"Brave",
			"Start": "2 February 2020",
			"End": "14 February 2020"
	},
	
		{
			"Movie":"Drive",
			"Start": "10 February 2020",
			"End": "18 February 2020"
	},	
	
		{
			"Movie":"Race",
			"Start": "15 February 2020",
			"End": "28 February 2020"
	}
	
		]
}

```

**Respose You will get**

```
{
    "data": [
        {
            "Movie": "Bala",
            "Start": "8 January 2020",
            "End": "28 January 2020"
        },
        {
            "Movie": "Brave",
            "Start": "2 February 2020",
            "End": "14 February 2020"
        },
        {
            "Movie": "Race",
            "Start": "15 February 2020",
            "End": "28 February 2020"
        }
    ],
    "Total Earnings( in Cr)": 3
}

```

**Screenshots**

Request
![Request](https://user-images.githubusercontent.com/29687692/87390746-16ce3d00-c5c7-11ea-9695-4c0545607d41.png)
Response
![Response](https://user-images.githubusercontent.com/29687692/87390698-ff8f4f80-c5c6-11ea-8819-0b01c82405d2.png)

