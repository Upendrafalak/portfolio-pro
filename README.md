# Portfolio Pro

Portfolio Pro is a tool that helps to streamline the process of managing information about one's resume, job, qualifications, and skills. It reduces the manual effort required to keep track of all these details, and allows users to easily manage their portfolio information in one place. The tool tracks all the relevant information about the individual, including their skills and qualifications, to provide a comprehensive and organized view of their portfolio.

This project is live at: [https://portfolio-pro.one/](https://portfolio-pro.one/)

<table>
  <tr>
    <td>
       Home Page
       <img width="1552" alt="Screenshot 2023-02-10 at 7 11 40 PM" src="https://user-images.githubusercontent.com/92196450/218110869-fc169430-8cb0-45d3-98e3-e16e96c884e5.png">
    </td>
    <td>
    Login Page
      <img width="1552" alt="Screenshot 2023-02-10 at 7 11 54 PM" src="https://user-images.githubusercontent.com/92196450/218110887-69b21df2-2f65-46d1-a11d-6710c9383c41.png">
    </td>
  </tr>
  
   <tr>
    <td>
       Dashboard
       <img width="1552" alt="Screenshot 2023-02-10 at 7 12 14 PM" src="https://user-images.githubusercontent.com/92196450/218110891-fdd4333c-6872-4138-b19e-b695d9d8d14b.png">
    </td>
    <td>
      View Portfolio
      <img width="1552" alt="Screenshot 2023-02-10 at 7 13 24 PM" src="https://user-images.githubusercontent.com/92196450/218110900-1575c5a2-e099-477b-9bf2-078b31eba5ae.png">
    </td>
  </tr>
  
   <tr>
    <td>
       Edit Portfolio
       <img width="1552" alt="Screenshot 2023-02-10 at 7 13 30 PM" src="https://user-images.githubusercontent.com/92196450/218110906-b241e5f0-e435-40c8-a6d1-0901efe3620d.png">
    </td>
    <td>
      Admin Page
      <img width="1552" alt="Screenshot 2023-02-10 at 7 13 51 PM" src="https://user-images.githubusercontent.com/92196450/218110910-02613c2c-b341-453c-85f1-778ccaebe8f3.png">
    </td>
  </tr>
</table>

## Installation

1. Install [Node.js](https://nodejs.org/en/download/)
2. Clone this repository using `git clone https://github.com/sarvesh2902/portfolio.git`
3. Run `npm install` in root directory. (`npm install --force` if the previous command does not work)
4. Create a file name `.env.local` in the root directory and insert the following env variables:
```
GITHUB_ID = 
GITHUB_SECRET = 

GOOGLE_CLIENT_ID = 
GOOGLE_CLIENT_SECRET = 

TWITTER_CLIENT_ID = 
TWITTER_CLIENT_SECRET = 

DB_USER = 
DB_PASSWORD = 
DB_URL = mongodb+srv://$DB_USER:$DB_PASSWORD@cluster0.wfnik3x.mongodb.net/<database_name>?retryWrites=true&w=majority

NEXTAUTH_URL = http://localhost:3000/

SENDGRID_API_KEY= 

DOMAIN_URL = http://localhost:3000
```

5. Start the server with `npm run dev`.


# portfolio-pro
# portfolio-pro
