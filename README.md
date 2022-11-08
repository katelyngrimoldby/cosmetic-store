# Miralou Cosmetic Store
This is a fictional cosmetic store's ecommerce site. Design from [Miralou Eight](https://www.figma.com/community/file/1148147308548932653) by ThemeRage. JSON data taken from [Makeup API](https://makeup-api.herokuapp.com/).

## Run Locally
**Step 1:** Clone the repository  
`git clone https://github.com/katelyngrimoldby/cosmetic-store.git`

**Step 2:** Navigate to root directory  
`cd cosmetic-store`  

**Step 3:** Install dependencies  
`npm install`  

**Step 4:** Start the develpoment server  
`npm run dev`  
Then, open the localhost port outputted in the console

---
## Goals
- Learn to handle static JSON data for handling calculations and rendering
- Utilize React Redux, as well as Redux Toolkit, to globally store state for ease of data sharing among pages and components
- Build an SPA with React Router and utilize dynamic URL params and URL search params

## Technologies Used
- Vite with a React boilerplate written in TypeScript
- React Router
- Redux Toolkit, React Redux
- Axios
- PostCSS (Nesting, Autoprefixer)

## Caveats
While the original design outlines sections for a blog and checkout, I omitted both. Due to the implementation of a blog not being a priority in this project, it was omitted to place focus on the elements aligning with my goals outlined. The checkout process was omitted out of preference to not mock a payment processing system, and avoid potential privacy issues with doing such. 

Additionally, some elements from the larger section I did implement were omitted or changed due to limitations within my data. For example: Product SKU numbers were not displayed as they did not exist. Ratings were not included due to inconsistent recording of such within the data. Categories were changed from Men/Women/Children to the product categories present within the data, and only basic categoeries were used due to inconsistent recording in the data. 

While colour selection was added, some products (ie. eyeshadow palettes) list colours found within the product, as opposed to variations. This is due to the data representtion of such, and since writing the JSON data was not a priority, the implementation is, while incorrect, consistent with other products. 

The site is not optimized for SEO, as it was not a priority for this project and client-side rendering isn't SEO-friendly to begin with. See [The Travel Enablers source code](https://github.com/katelyngrimoldby/the-travel-enablers) for my take on SEO in a dynamic website.

Finally, due to the hosting through GitHub Pages, the SPA behaviour is flawed. Accessing any page aside from home via URL (not routing within the website) will result in a 404. Viewing the site through localhost does not reflect these issues. Unfortunately this also means the custom 404 implementation is unable to be seen through GitHub Pages.

## Areas of Pride
Some elements are larger than others, but are elements I'm happy with the result of.

- Fully reusable slideshow components. Want to display images? Card components? One or multiple on a slide? It can all be done, and with as many or as few slides as you like. The arrows are even on either side of the slide pills on mobile, so the full device width is at your slide's disposal. The only thing missing is automatic cycling, but that's just poor UX. 

- Equally reusable paginaton. With a custom hook and a few props, nearly everything in this component is customizable. Anything can be put within it, and the size of both the displayed page numbers and page size are customizable. 

- Data sorting and filtering using URL Search Params. Instead of these options being stored within state, with the help of React Router they are stored within the URL themselves, allowing one to access their desired parameters within the same link. This also means those parameters are perservered within the browser history and through a releoad. 

- Custom 404 Page. It doesn't sound like much, but due to the structure of the projects routing, any false URL is considered a dynamic URL parameter. A simple check on page load (or link click) seamlessly renders the product page for a real product, or the custom 404 page for a bad link!

## Challenges
- Remember that custom 404 I mentioned? The first implementation I did, the site took a split second to load a product page, and a glimpse of the 404 could be seen. After a lot of complex solutions were tried to no avail, a simple check for the data being populated in redux fixed the issue. My lesson? Sometimes simple is better, no matter how silly it may seem. 

- As this project is deployed to GitHub Pages, the site is stored entirely within a sub directory. Upon deployment, this led to the issue of the JSON data stored in my public folder being undiscoverable. Again, the solution was simple: prepend the subdirectory to the pathname of my Axios fetch. 

- There were so many css challenges within the development of this site I can't even list them all. Some issues were complex styles to make a component work (eg. slideshows and accordians), some were simply trying to make an element look good (eg. the overlapping images on the about page). The solution to all of them was trial and error - and of course lots of research.


## Future Improvements
- Implement decorative dropdowns for language and currency; maybe make functional as well

- Improve JSON data. Complete and error-free data and consistently-sized images will make the site feel that much more real!

- Implement blog & checkout process - even mocked without a real CMS or payment processor

- Better filtering. Selecting multiple filters, and adding different filter parameters without heavily bloated JSX

- Implementing slideshow behaviour to landing page's hero section.

- Finding a workaround for GitHub Pages' anti-SPA behaviour. So far [rafgraph's solution](https://github.com/rafgraph/spa-github-pages) has been atempted with no success.
