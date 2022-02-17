# Acidtango Chuck Norris API

For running the aplication only run `docker-compose up`

This is a Chuck Norris fact search REST API.

The request.rest its only a file to test the endpoint in visual studio code whit the extension REST Client

## Front Info

In the root you have a simple SPA to interact whit the API

> http://localhost

Here you have three colums one for each enpoint of the api\
At the end you can see the data whit some format and one button that displays the raw data

## Endpoints info

And There you have the different endpoints of the api

> http://localhost/api/jokes/

### Random > /api/jokes/random

this will give one random joke

> - http://localhost/api/jokes/random

```
{
	"categories": [],
	"created_at": "2020-01-05 13:42:24.142371",
	"icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
	"id": "wcL8ornrTpWDRzaRH6A4dg",
	"updated_at": "2020-01-05 13:42:24.142371",
	"url": "https://api.chucknorris.io/jokes/wcL8ornrTpWDRzaRH6A4dg",
	"value": "some say that Chuck Norris' blood is green, too bad we'll never know"
}

```

### Random Joke By Category

This will give one random joke of the specified category

> https://api.chucknorris.io/jokes/categories

Categories:
[
"animal",
"career",
"celebrity",
"dev",
"explicit",
"fashion",
"food",
"history",
"money",
"movie",
"music",
"political",
"religion",
"science",
"sport",
"travel"
]\

> - http://localhost/api/jokes/random?category=sport

```
{
	"categories": ["sport"],
	"created_at": "2020-01-05 13:42:19.576875",
	"icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
	"id": "6zbljdhqtd2oqdxxfe9tpq",
	"updated_at": "2020-01-05 13:42:19.576875",
	"url": "https://api.chucknorris.io/jokes/6zbljdhqtd2oqdxxfe9tpq",
	"value": "When Chuck Norris does a pushup, he isn't lifting himself up, he's pushing the Earth down."
}
```

### Search By Word

> - http://localhost/api/jokes/search?query=war&page=1&limit=10&email=koregfx@gmail.com

```
{
    "search": "war",
    "email": "koregfx@gmail.com",
    "linkOfTheOriginalAPI": "https://api.chucknorris.io/jokes/search?query=war",
    "numOfPages": 21,
    "actualPage": 1,
    "nextPage": {
      "page": 2,
      "limit": 10,
      "link": "http://localhost/api/jokes/search?query=war&page=2&limit=10"
    },
    "jokes": [
      {
        "categories": [

        ],
        "created_at": "2020-01-05 13:42:18.823766",
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "BuNe7usbS7O-PLSypn93Fw",
        "updated_at": "2020-01-05 13:42:18.823766",
        "url": "https://api.chucknorris.io/jokes/BuNe7usbS7O-PLSypn93Fw",
        "value": "Chuck Norris killed 37 terrorist with 2 bullets,the first was a warning shot!"
      },
      {
        "categories": [
          "dev"
        ],
        "created_at": "2020-01-05 13:42:18.823766",
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "bwoz2uwsqnwmyawyxdvo1w",
        "updated_at": "2020-01-05 13:42:18.823766",
        "url": "https://api.chucknorris.io/jokes/bwoz2uwsqnwmyawyxdvo1w",
        "value": "Chuck Norris finished World of Warcraft."
      },
      {
        "categories": [

        ],
        "created_at": "2020-01-05 13:42:18.823766",
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "x1w55vtgtc2bglt4q4dd9w",
        "updated_at": "2020-01-05 13:42:18.823766",
        "url": "https://api.chucknorris.io/jokes/x1w55vtgtc2bglt4q4dd9w",
        "value": "There is no such thing as global warming. Chuck Norris was cold, so he turned the sun up."
      },
      {
        "categories": [

        ],
        "created_at": "2020-01-05 13:42:19.104863",
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "brpq_CvdT06A-ExtGwnJqw",
        "updated_at": "2020-01-05 13:42:19.104863",
        "url": "https://api.chucknorris.io/jokes/brpq_CvdT06A-ExtGwnJqw",
        "value": "There's no such thing as global warming. Chuck Norris just got cold, so he turned up the sun."
      },
      {
        "categories": [

        ],
        "created_at": "2020-01-05 13:42:19.104863",
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "ft6ydkkst-27mlnsdkss4a",
        "updated_at": "2020-01-05 13:42:19.104863",
        "url": "https://api.chucknorris.io/jokes/ft6ydkkst-27mlnsdkss4a",
        "value": "A handicapped parking sign does not signify that this spot is for handicapped people. It is actually in fact a warning, that the spot belongs to Chuck Norris and that you will be handicapped if you park there."
      },
      {
        "categories": [

        ],
        "created_at": "2020-01-05 13:42:19.324003",
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "aD83ERrWQJW5LzKsGaVuNw",
        "updated_at": "2020-01-05 13:42:19.324003",
        "url": "https://api.chucknorris.io/jokes/aD83ERrWQJW5LzKsGaVuNw",
        "value": "Chuck Norris should win the Nobel Peace Prize, because when he starts a war, it's over before it begins."
      },
      {
        "categories": [

        ],
        "created_at": "2020-01-05 13:42:19.324003",
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "x34ca10tsgm5dom-xclkmq",
        "updated_at": "2020-01-05 13:42:19.324003",
        "url": "https://api.chucknorris.io/jokes/x34ca10tsgm5dom-xclkmq",
        "value": "Faster than a speeding bullet... More powerful than a locomotive... Able to leap tall buildings in a single bound... These are some of Chuck Norris's warm-up exercises."
      },
      {
        "categories": [

        ],
        "created_at": "2020-01-05 13:42:19.324003",
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "45vrM0YcTDSG-IiRgeYlbQ",
        "updated_at": "2020-01-05 13:42:19.324003",
        "url": "https://api.chucknorris.io/jokes/45vrM0YcTDSG-IiRgeYlbQ",
        "value": "Chuck Norris has a sign in his front yard that reads, \"Beware of Chuck Norris.\" This is not a joke. He actually has one."
      },
      {
        "categories": [
          "dev"
        ],
        "created_at": "2020-01-05 13:42:19.324003",
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "vugxeryxthmn186raqgnng",
        "updated_at": "2020-01-05 13:42:19.324003",
        "url": "https://api.chucknorris.io/jokes/vugxeryxthmn186raqgnng",
        "value": "When Chuck Norris is web surfing websites get the message \"Warning: Internet Explorer has deemed this user to be malicious or dangerous. Proceed?\"."
      },
      {
        "categories": [
          "movie"
        ],
        "created_at": "2020-01-05 13:42:19.324003",
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "fdwytur3tpgz48-mdd1amg",
        "updated_at": "2020-01-05 13:42:19.324003",
        "url": "https://api.chucknorris.io/jokes/fdwytur3tpgz48-mdd1amg",
        "value": "The original title for Star Wars was \"Skywalker: Texas Ranger\". Starring Chuck Norris."
      }
    ]
  }
```
