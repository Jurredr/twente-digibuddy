![image](https://user-images.githubusercontent.com/62119716/124087389-3d90b800-da52-11eb-867a-e76ac4c7bebc.png)

***By [Jurre de Ruiter](https://github.com/jurredr) & [Chris Bleeker](https://github.com/SlagHoedje/)***

## About
How do we put digital Twente on the map? A question that is not easily answered, but we gave it our best shot!

### Solution
We have developed a dynamically rendered SPA (Single-Page-Application) using [NuxtJS](https://nuxtjs.org/). This web application mainly consists of a neat user-interface, showing a complete map of Twente. Using various tools and actions, the user can discover Twente by moving around on the map, and checking out markers of companies. Companies can be filtered and checked out by clicking on a marker and going through all kinds of interesting data. Companies can have connections, and so can users/persons. Some conceptual systems include (but are not limited to):

- **Welcome pop-up**, a nice warm welcome, quickly telling the user what they can use the application for.
- **Help window**, a quick way to get in contact or view FAQs.
- **Language switcher**, Twente is a place filled with internationals, amongst whom a lot of students. By providing the option to quickly change the application to English, a bigger audience will be attracted.
- **Filters**, in the top right there are a few easy-to-access filters, that provide a way for the user to find what they're looking for.
- **News page**, showing the latest news of the digital world of Twente.
- **Profile page**, allowing the user to authenticate using Google's OAuth. By doing this, we can utilize the various API systems that Google offers, allowing us to (for example) get data from Google Businesses, validate them, and allow users to add their companies themselves. This makes for huge scalability and little maintenance (which of course could easily be added through admin-accounts).
- **Chat page**, it might be nice to offer users the opportunity to directly link up with other individuals, or companies to partner up. This would be an addition to social media links, and could maintain a remaining sense of interest in the application.
- **Settings page**, where the user can customize their experience within the application.

### Images
<img width="70%" height="70%" src="https://user-images.githubusercontent.com/62119716/124089969-b3961e80-da54-11eb-9d8f-d3164ed3637e.png" alt="preview1" />
<img width="70%" height="70%" src="https://user-images.githubusercontent.com/62119716/124090102-d1638380-da54-11eb-9d52-7393102d615d.png" alt="preview2" />
<img width="70%" height="70%" src="https://user-images.githubusercontent.com/62119716/124090183-e04a3600-da54-11eb-89f5-7ec19343df53.png" alt="preview3" />


## Build Setup
Want to run or build the project?

Simply clone the project, and use one of the following Yarn commands:

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```
