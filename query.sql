SELECT * 
  FROM userAccounts
 WHERE email = 'johndoe@mail.com' 
   AND password = crypt('johnspassword', password);