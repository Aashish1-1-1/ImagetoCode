## Inspiration
We come across many code snippets which are not in actual code format they can be in image or some visual form. 

## What it does
What codify does is it convert that visual form of code into actual code and optimizes it if it can be optimized

## How we built it
We take image as a input from user/client save it to the server with randomized name so that it will not create problem with multiple user using at a same time and feed that image to Gemini API with proper prompt we parse the prompt to json  and send it as response to user. The response is displayed in client side with the image to code side code and the optimized version of the the code.

## Challenges we ran into

It was little hard for us to save users image file in the client side. The workflow was saving users image in client side with random name so that other users can also use at same time without conflicting the name and store in client side.

## Accomplishments that we're proud of

We have developed an optimized program writing memory efficient code where the user file is read and save temporary and it is deleted after a second so that it won;t get store to take unnecessary memory.

The program is completely working. Users browser the image file, it get save in client side for few second so that the program can read the file can send to the gemini API to change image into the text and also provide the optimized version of the code.


## What we learned

To write an optimized code, to create server  and client side effective code to browse image file and save it and send it ot the gemini api.

## What's next for Codify

-We will be doing deployment 
-We will iteratively move to the most consistent and efficient prompt.

##To run locally 
Get your api key [here](https://aistudio.google.com/app/apikey)
```bash 
git clone https://github.com/Aashish1-1-1/Kodify
cd Kodify/src
echo gemini_api = "Your api">.env
npm i
npm run dev
```


