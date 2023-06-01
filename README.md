>__PLINKIFY__

live site: https://dashboard.render.com/static/srv-chrmpa0rddl72kr4h02g/deploys/dep-chsar21mbg582kfo6l10

An application that allows users to post plinks, or playlists of links, to a public forum and vote on their relevance to a topic.

Users are encouraged to describe their plink and limit their list to 10 links.

The purpose of this application is to help people curate their interests and share interesting internet resources and rabbit holes with others.

>Tech

I am using the MERN stack with a mongodb database, Express and Mongoose for routing and db interactivity, and Vite: React for the front.

I have implemented user authentication using packages like bcrypt and validator (see package.json in the backend repo here: https://github.com/joshuapoveda/plinkify-backend)

>Challenege

The authentication is working and the database is populating. The next step for this project is creating a public landing site, a voting system where plinks can aggregate votes from authenticated users, and styling.

There are a few bugs to fix because this was my first time using the react context hook. It is a very powerful tool, but can create a complicated workflow that is difficult to debug. 

>Thanks

I thought up the idea with other coders in mind. We all seem to have a giant list of bookmarked urls and tabs open. I thought it would be a good idea to gamify the expereince a bit by challenging users to pick a topic and 10 links that they feel explain or represent that topic as best as possible. 

The idea ultimately then became about anyone on the internet sharing a curated list of their own interests. 

I hope this tool will help others both learn and discover new things in a fun and exciting way. 