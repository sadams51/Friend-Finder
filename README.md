#Friend Finder 

##Overview

The Friend Finder App is a site which takes in results from users' surveys and compares their answers with those of other users. The application will then display the name and picture of the user with the best overall match. 

This application uses Express, Body-Parser, and Path. 


##Functioning 

Each user's results are collected and stored in an array of numbers. The code then compares the current user's scores against those from others, question by question. The sum of the difference between users is calculated and the closest match will be the user with the least amount of difference. 
The most compatible friend is dislayed in the modal pop-up. 

