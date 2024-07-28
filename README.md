# Frontend Mentor - Password generator app solution

This is a solution to the [Password generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/password-generator-app-Mr8CLycqjh). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Bugs](#bugs)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- Generate a password based on the selected inclusion options
- Copy the generated password to the computer's clipboard
- See a strength rating for their generated password
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot



#### Mobile View :
![](./mobile-view.png)


#### Tablet View :

![](./tablet-view.png)

#### Desktop View :

![](./desktop-view.png)




### Links

- [Solution URL](https://your-solution-url.com)
- [Live Site URL](https://www.frontendmentor.io/challenges/password-generator-app-Mr8CLycqjh/hub)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Vanilla JS
- ZXCVBN Library

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

- If a flex item dont grow, add flex:1 property to make it do so
- margin: auto can achieve sometimes the wanted layout faster than using flexbox or grid
- How to copy a text to clipboard using Javascript

```js
try {
    await navigator.clipboard.writeText(what.to.copy);
  } catch(err) {
    console.error('Failed to copy: ', err);
  }
}
```

- How to customize a range input
- How to customize a checkbox input
 
about enums
![alt text](image.png)
![alt text](image-1.png)
```
  useEffect(()=>{
    setStrenght()
  },[includeLowerCases,includeNumbers,includeSymbols,includeUpperCases]) 

  ```
  in that code setStrenght is executed everytime the includes states are changing so it will execute this function
  ```
  setStrenght:()=>{set(state=>({strenght:calculateStrenght(state.includeLowerCases,state.includeNumbers,state.includeSymbols,state.includeUpperCases)}))}

  ```
  who calculate the state based on the inculdes states

  ![alt text](image-2.png)
  how to work with map if you have constant number of iterations
  ![alt text](image-3.png)
  A mathematical explanation of how to scale a number
  we know that Math.random() generates a number 0< =r < 1
  but we need a number between min <= x < max 
  by multiplying r*(max-min) we will get 0 <= r*(max-min) <= max -min then     min <= r*(max-min) +min < max beceause max will be exclusive and we will use the Math.floor() function we can add one to max to still have a chance to get it in a random generation so the inequation becomes min <= r*(max-min +1) < max +1 
 ### Bugs

- When checked, If the user hovers over the checkbox , the cursor doesn't switch to pointer and the click doesn't uncheck the case


### Useful resources

- [Password generator algorithm](https://x-engineer.org/random-password-generator-algorithm/) - I used this algorithm to generate the wanted passwords
- [Slider styler](https://toughengineer.github.io/demo/slider-styler/slider-styler.html) - This helped to get the slider done in a short time without the need to care about the browsers issue



## Author


- Frontend Mentor - [@Earthyyy](https://www.frontendmentor.io/profile/Earthyyy)
- Github - [@Earthyy](https://github.com/Earthyyy)



## Acknowledgments

Big Thanks <3 to :

* [Codecademy](https://www.codecademy.com)
* [Frontend Mentor](https://www.frontendmentor.io/) 
