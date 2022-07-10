# React Photo Editor (PixelShop-Editor) <img src="https://i.ibb.co/m8rbYLt/b17.jpg" alt="b17" border="0" width="50px" align="center">
<img src="https://i.ibb.co/B6MsrCq/Pixel-Shop.png" alt="Pixel-Shop" border="0">
This application allows a user to take a picture using their device camera or upload a picture from their device storage,then provides the client with a platform to edit the picture to their own specification and finally download the edited result.

## **Project Summary**
* Created 3 pages using react-router (homepage, editor and features page)
* Used react-webcam package to allow client to take a picture.
* Used html canvas for adding and manipulating the picture in the application.
* Used react-alice-carousel package to preview edited pictures using the app.
* Also used react-image-data-capture package to capture the image data pixels so as to manipulate the picture colors as per client adjustments.
* Created multiple editing features e.g adding text,changes text position,adding emojis and changing colors and adding filters.
* Finally used styled-components to style the entire application.

### **Resources Used**
***
**React Version**: 17.0.2  
**Languange used**: Javascript

**Packages**: react-alice-carousel, react-color, react-dnd-html5-backend, react-icons, react-image-data-capture, react-router-dom , react-webcam and styled-components    
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E) ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=flat&logo=styled-components&logoColor=white) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=react-router&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)

**Run app locally (Run)**: git clone (the url to the GitHub repo) then  npm install

**APIs**: React Context-Api.

### **Image Upload**
***
Used Two methods for uploading a picture:
* Camera Upload: used react webcam package to allow user to access the front facing camera of their device to take a picture. Once picture is taken, it is then drawn on the html canvas.
* Device Upload: Used html Input tag to upload image from client's device storage unit.

### **Image Manipulation**
<img src="https://i.ibb.co/6H5qv5Y/Pixel-Shop-1.png" alt="Pixel-Shop-1" border="0">
After Image upload, I used html canvas to draw the image and react-context Api to connect the user editing inputs component and the canvas component.  
Used react useEffect hook to re-draw the image as client edits the image.  
Image Editing features are:

* Changing image color (red,green,blue,yellow,purple,orange,lime and crimson)
* Changing image filters (blur,sepia,brightness,grayscale,invert,opacity,saturation,contrast)
* Adding Text on Image and Dragging functionality to change text position within the image.
* Adding Emojis to the Image (happy,sad,angry,cool,laughing emojis...etc)


### **Image Download**
***
* Converted the canvas image to png format using inbuilt canvas method (toDataUrl)
* Used URL.createObjectURL() function to allow the client to download the image to their device.

### **Productionization**
***
In this step, I ran the npm run build command to build the application for production and deployed it on netlify.  
**Live Application**: [PixelShop-Editor](https://pixelshop-editor.netlify.app)
