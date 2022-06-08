This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



## About the project
I created a database of paddleboards and gear -- borrowed from islesurfandsup.com/ --  With that a created a website that is dynamically rendered.  To render the paddleboards and accessories data I dynamically rendered page routes using getStaticPaths and getStaticProps.  I used react context to set the initial context of the shopping cart with getServerSideProps and used that context throughtout the application.

NextJS / React / MongoDB / TailwindCSS

Learn more about this project here : https://jordan-latz.vercel.app/my_projects

Take a look at the deployed page here : https://paddle-board-store.vercel.app/
