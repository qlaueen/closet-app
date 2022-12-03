
# Closet App

## Overview

Every once in a while people start getting bored of their clothes. Not everyone has the ability (or time) to come up with new outfit combinations, especially when trying to keep up with the current trends. In addition, the increase of the ultra fast-fashion market has made people purchase items that are trending for a very short period of time, and that ultimately end up being forgotten in the back of the consumer's closets.

This closet app came to solve these issues. The users will be able to add their clothes into the app, sorting into specific weather, color, brand, how comfortable it is, and any other category that they want, and then combine their different pieces to create a schedule of outfits. The app will show the user the weather for the week, and they will be able to plan their outfits accordingly as well. Also, the app will have social media features, where you can connect with friends to share outfit ideas (by checking the clothes they have in their closets), give recommendations, suggestions and more. And more importantly, the app will keep track of the pieces of clothes that have not been worn in a long time, and show donation centers to give that piece to someone who needs it.

## Data Model

The application will store Users, Clothing Items, and Outfits

- Users can have multiple clothing items
- Users can have multiple outfits
- Each outfit has multiple clothing items

An cxample user:

```javascript
{
  username: "janedoe",
  email: "janedoe@email.com",
  hash: // a password hash,
}
```

An example clothing piece:

```javascript
{
  type: "skirt", 
  brand: "Vivianne Westwood", 
  color: "blue", 
  image: // img,
  owner: "janedoe",
  createdAt: // timestamp,
}
```

## [Link to Commented First Draft Schema](db.mjs)

(__TODO__: create a first draft of your Schemas in db.mjs and link to it)

## Wireframes

[Wireframe](https://www.figma.com/file/J15QZVMA2x1RiJQWeFpf2H/wireframe-closet-app?node-id=0%3A1)

## Site map

[Site Map](https://www.figma.com/file/CMOq4vij5YLOxh6263dw5W/site-map-closet-app?node-id=0%3A1)

## User Stories or Use Cases

1. as non-registered user, I can register a new account with the app
2. as a user, I can log in to the site
3. as a user, I can add new pieces of clothing
4. as a user, I can create outfits with the pieces of clothing that I have added
5. as a user, I can add outfits to a schedule of the outfits I want to wear
6. as a user, I want to visit my friends' closets
7. as a user, I want to recommend outfits to my friends

## Research Topics

- (2 points) Integrate user authentication
  - I will create a safe authentication system for users
- (6 points) React.js
  - used React.js as the frontend framework; it's a challenging library to learn, so I've assigned it 5 points
- (2 point) Material UI
  - I will use MaterialUI as the front-end styling library for my application.

10 points total out of 8 required points

## [Link to Initial Main Project File](app.mjs)

## Annotations / References Used

1. [React.js documentation](https://reactjs.org/docs/getting-started.html?/)
2. [Express.js documentation](https://expressjs.com/en/starter/installing.html)
