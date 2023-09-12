# trekkers
Trekkers connects to an external API that I built. This API, hosted at https://galactic-trek.cyclic.app/api/, serves as the source of information for the alien species data displayed on the website. The app sends requests to this API when users input the name of an alien species, and it receives responses containing detailed information about the requested species, which is then dynamically displayed on the website.

**Key Features:**

- Alien Species Information: Users can enter the name of an alien species into an input field and click a button to retrieve detailed information about that species.

- Dynamic Display: The retrieved information, including the species name, homeworld, features, facts, notable examples, and an image, is dynamically displayed on the screen.

**Link to project:** 
https://trekkers1.netlify.app/

**Tech used:** 
- HTML, JavaScript, jQuery, LCARS template by https://www.thelcars.com/

## Lessons Learned:

- API Integration: Integrating an external API adds valuable and up-to-date data to your application. Ensure that the API is reliable and well-documented to avoid potential issues.
- User Experience: Learnt from  https://www.thelcars.com/ the importance to provide clear instructions. 
- 
## Optimisation:
- Adding error handling and validation for user inputs.
- Caching: Implement caching mechanisms, both on the client and server sides, to reduce the load on the API and improve response times.
- Lazy Loading: implementing lazy loading if application grows and contains more images,to improve initial page load times and reduce data usage for users.
