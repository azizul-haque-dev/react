# My Simple Markdown File

This is a basic markdown document to show simple formatting.

## Features

- Easy to write
- Easy to read
- Works on GitHub, VS Code, and more

## Code Example

```js
console.log("Hello, Markdown!");

```


##########################


```js
import axios from 'axios'
import { api } from "../api";
import { useAuth } from "./useAuth";

```
- axios: HTTP requests করার জন্য।
- api: তুমি একটা custom configured axios instance বানিয়ে রেখেছো (ধরা যাক baseURL সহ)।
- useAuth: একটি custom hook যেটি authentication state (authToken, refreshToken userData ইত্যাদি) ম্যানেজ করে।

```js
 const useAxios =()=>{
    const {auth,setAuth} = useAuth()
 }
```
- এই hook টি auth object এবং setAuth function কে access করে যেগুলোতে user এর authentication token ও অন্যান্য তথ্য থাকে।

```js
  useEffect(() => {},[auth.authToken])

```
- যখন auth.authToken পরিবর্তিত হয়, তখন এই useEffect চলে — মানে যখন নতুন টোকেন সেট হবে, তখন interceptor গুলো আবার সেট হবে।

```js
 // add request interceptor
  const requestInterceptor = api.interceptor.request.use(
    (config)=>{
        const authToken =  auth?.authToken
        if(authToken){
            config.headers.Authorization = `Bearer ${authToken}`
        }
        return config;
    }
    (error)=>Promise.reject(error)
  )

  ```
  - request interceptor
  - প্রতিটি API request এর আগে এটি চলে।
  - যদি authToken থাকে, তাহলে সেটি Authorization হেডারে Bearer <token> আকারে যোগ করে।

 

```js
 // add response interceptor 
  const responseInterceptor = api.interceptor.response.use(
    (response) => response,)
```

- response interceptor part 1
- যদি response ঠিক থাকে, তাহলে কোনো পরিবর্তন না করেই return করে।

    ```js
        async (error) => {
        const originalRequest = error.config;
        ```

- response interceptor - error handling
- যদি কোনো error আসে, তাহলে আমরা সেটি ধরব।


```js 
        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
```

-  যদি 401 Unauthorized আসে এবং _retry ফ্ল্যাগ না থাকে, তাহলে বুঝি token expire হয়ে গেছে।

```js
          try {
            const refreshToken = auth?.refreshToken;
            const response = await axios.post(
              `${import.meta.env.VITE_SERVER_BASE_URL}/auth/refresh-token`,
              { refreshToken }
            );

```
- আমরা server কে refreshToken পাঠিয়ে নতুন authToken চাই।

```js
            const { token } = response.data;

            console.log(`New Token: ${token}`);
            setAuth({...auth, authToken: token})


```
-  নতুন token পাওয়া গেলে সেটি auth স্টেটে আপডেট করি।


```js
        originalRequest.headers
        Authorization = `Bearer ${token}`;
        return axios(originalRequest);

```
- পুরোনো request টি আবার নতুন token সহ পাঠানো হয়।