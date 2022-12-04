#  **PolySave** 
# What it does
**PolySave** is a personal saving 
decentralized app built on the polygon blockchain 
whereby users can deposit funds they want to lock 
for a period of time. 
# Inspiration
**PolySave** is inspired by **Piggyvest**. Piggyvest is also saving platform 
where users can save funds. 
# How We built it
PolySave is segmented to 2 parts;
##### **1. Smart Contract**
#####  **2. Frontend**
### **Smart Contract** 
The smart contract is written in solidity. 
The development, verification and testing of 
the contract was done with these;   
**Hardhat** - To bundle/bootstrap the entire contract development enviroment   
**Ethers** - To interact with the blockchain  
**Alchemy** - Alchemy node used to send and query requests  
**Metamask** - Wallet used to inject web3 enviroment into the browser  
###  **Frontend**
The Frontend of the dApp was done with these technologies;  
**ReactJS/NextJS** - Used to create the entire website  
**Rainbowkit**   - For wallet connection/integration  
**Ethers/Wagmi**  - For smart contract interaction    
**Tailwind CSS** - For styling the entire website  
## Challenges I ran into
Coming up with a design was quite challenging because 
in addition to me not being a designer, there wasn't so much 
time to come up with a new design. 
## What I learned
I was able to practicalize some of the things we 
were taught by our instructors during the bootcamp phase.  
## What's next for PolySave
An investment segment added to the app whereby several users 
invest their assets together for a period of time and the 
the funds can be used for yield farming/liquidity pool provision 
and the the profits are shared among all users based on percent of 
their initial investment  

## Environment Variables

To run this project, you will need to  
- Create an `.env.local` file to the root of the **piggy** folder
- Then add this environment variable to your .env.local file

`NEXT_PUBLIC_ALCHEMY_KEY="<your-alchemy-key>"` 
get this key from [Alchemy](https://dashboard.alchemy.com/)


## Run Locally
To run this project Locally, make sure you've configured
your environment variable, then run the following commands in Terminal: 
-  `cd piggy`
-  `npm install` to install dependencies
-  `npm run dev` 

the app would be running in the localhost link shown in the terminal.


## Demo
Because this is a personal savings app, there are
functions that can only be called from the owners account.  
To check these out you might need to redeploy the contract
or I transfer ownership to your account.  
Since that can be tedious, I've attached a demo video link 
that shows the functionalities of the app and also a live site link 
- Here's my Demo video [Link](https://vimeo.com/777705176)
- Here's my live site [Link](https://polygon-bootcamp.vercel.app/)
- [Smart contract Mumbai scan Link](https://mumbai.polygonscan.com/address/0x5ECA3bb1D26102b38c7A7de4E43d399F008d9dA5#readContract)
