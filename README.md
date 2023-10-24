---> package.json is a configuration for npm which is a package manager
---> parcel, webpack, CRA, vite are all bundlers while we configure our react apps, bundler is used to package/bundle/minify our files while we shift our react app to production
---> there are mainly 2 types of dependencies: 
a) dev - used during development phase; we add it while installing any package or dependency
b) normal ones - used during production phase
---> transitive dependency: used indirectly by the package because of the dependency needs it; brought by third-party components/dependencies

--->  caret vs tilde in package.json
a) when there is a minor upgrade in the version of the package, then caret comes into picture which is used to upgrade to a minor version
b) tilde is used in the major upgrade of the package version

--> npx: executing a package
--> npm: installing a package

# Parcel 
-> dev build
-> local server
-> HMR: Hot Module Replacement: if we add or change something in our files and then save it, the browser automatically reloads the new chnages, so in that case we don't need to refresh the browser to see our new changes
-> caching and faster builds
-> Image Optimization
-> Files Minification and bundling
-> Files compressing
-> Consistent Hashing
-> Code splitting
-> Differential bundling: supporting of older browser and bundlers for our app
-> Tree Shaking: removes unused code or random ones when not in use

# JSX
-> JSX code transpiled before it reaches JS engines, transpilation means converting this code which the browsers can understand,
-> done by babel which PARCEL provides 
-> JSX ----> react.createElement() -> further transpiled to JS Object ----> after transpilation, it is displayed as HTML element
-> A function which returns some JSX code is a functional component in React