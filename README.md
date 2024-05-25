## DEVPOST

[devpost](https://devpost.com/software/codify-uevra8)

## Inspiration

Dealing with code snippets in non-text formats, such as images, is not only tedious but often results in inefficient and unoptimized code. We're inspired to tackle this problem head-on.

## What it does

Kodify seamlessly translates visual code into actual code, optimizing it whenever feasible.

## How we built it

We implemented a robust system that begins by securely handling user/client input: images are saved to the server with randomized names to prevent conflicts among multiple users. These images are then seamlessly processed through the Gemini API using customized prompts parsed into JSON format. Finally, the response – comprising both the original and optimized code – is elegantly displayed to the user on the client side.

## Challenges we ran into

- We encountered inconsistency in Gemini's results, where the same prompt sometimes generated vastly different outputs, posing challenges to maintaining code integrity.

- Implementing secure and efficient image file management on the client side proved challenging. We devised a workflow to save user images with randomized names to prevent conflicts and ensure smooth concurrent usage.

## Accomplishments that we're proud of

- We developed a memory-efficient program that optimizes resource usage by reading and temporarily saving user files, promptly deleting them to prevent unnecessary memory consumption.

- Our fully functional program seamlessly handles user image uploads, swiftly processing them on the server side. It successfully leverages the Gemini API to convert images into text and deliver optimized code versions.


## What we learned

- Crafting optimized code for both server and client sides, streamlining processes for image file handling, and seamless integration with the Gemini API.

- Prioritizing scalability and user experience, understanding the importance of accommodating growth while ensuring a smooth and intuitive user journey.

## What's next for Kodify

- Deploying Codify with the Google Drive API integration for enhanced image file storage, ensuring robust data management and accessibility.
- Continuously refining our prompt selection process to achieve the most consistent and efficient results, optimizing user experience and code accuracy.
- Developing a browser extension version of Kodify, expanding accessibility and usability across different platforms.

## To run locally 

Get your api key [here](https://aistudio.google.com/app/apikey)
```bash 
git clone https://github.com/Aashish1-1-1/Kodify
cd Kodify/src
echo gemini_api = "Your api">.env
npm i
npm run dev
```

