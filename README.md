# Recipez
## _Search your favourite recipes_

- Search for an ingredient or a specific recipe.
- Specify the amount of servings. 
- Bookmark your favourite recipes and store them after closing the browser.
- Create and upload your own recipes.


## User's story and functionalities

Before any coding is, it's important to place oneself in the mind of the user. This is why the first step is to create the user's story, and to imagine the functionalities : 

*As a user, I want to search for recipes, so that I can find new ideas for meals.*
- Search : input field to send to API with searched keywords
- Display results with pagination functionality
- Display recipe with cooking time, serving and ingredients

*As a user, I want to update the number of servings, so that I can cook a meal for different number of people.*
- Change servings : update all the ingredients according to the wanted number of servings

*As a user, I want to bookmark recipes, so that I can keep them for later.*
- Bookmarking functionality : display list of all bookmarked recipes

*As a user, I want to be able to create my own recipes, so that I have them stored in the same app.*
- Upload : the users can upload their own recipes
- The user’s recipes will be bookmarked
- The users can only see their own recipes

*As a user, I want to be able to keep my bookmarks and own recipes when I close the app and come back later, so that I can reopen the app whenever I want.*
- Store: Store bookmarks in the browser using local storage
- On page load : read the saved bookmarks from local storage and display

## Development

Here is a descriptive [flowchart] of the app.

If you have any questions or want to reach me, here is my [linkedin].

## _Thanks and acknowledgments_

This App was first conceptualized and designed by [Jonas Schmedtmann] and is the final project of his  [JavaScript course][df1]

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)
[flowchart]: <https://github.com/Tsi-Bo/Recipez/blob/main/Recipez.drawio.pdf>
[linkedin]: <https://www.linkedin.com/in/thibault-f-bedot-77a7b32a4/>
[jonas schmedtmann]: <https://twitter.com/jonasschmedtman>
[df1]: <https://www.udemy.com/course/the-complete-javascript-course/?LSNPUBID=QZaBth%2FyPOQ&siteID=QZaBth_yPOQ-6DJzpOuHDLk8nt_7ENhXow&utm_source=adwords&utm_medium=udemyads&utm_campaign=Webindex_Catchall_la.EN_cc.CA&utm_term=_._ag_119831896715_._ad_533102824797_._kw__._de_c_._dm__._pl__._ti_aud-2268488108799%3Adsa-416504847274_._li_9000255_._pd__._&matchtype=&gad_source=1&gclid=Cj0KCQiA-62tBhDSARIsAO7twbaViHMqJrYtHUU3Mfyvo5coMXe-0J3TlILXXs54JwDCXJiJkQOsOZAaAnsSEALw_wcB>

