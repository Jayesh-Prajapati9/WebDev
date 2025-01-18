# HTML
- HTML stands for hyper text markup language. It is the foundation of building unstyled websites.
## Step 1 - Creating a simple HTML file locally
1. Create a folder on your machine called website
2. Add a index.html file inside it
3. Write the following code in it - 
```html
<html>
	<title>
		Visual Studio Code - Code Editor
	</title>
</html>
```

### Now open this in your browser
![](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fb0f8a4ce-674c-4bd8-a4f1-e729609751f0%2FScreenshot_2024-08-03_at_6.50.27_PM.png?table=block&id=fd558e26-6782-4dbe-bf5b-95331569bb55&cache=v2)
 
## Step 2 - Tags
1. div, span
2. head
3. body
4. h1, h2, h3, h4, h5, h6
5. b, i, u
6. a
7. img
8. input
9. button
10. br
 
## Step 3 - Building a basic HTML page
```html
<html>
	<title>
		Visual Studio Code - Code Editor
	</title>
</html>
<body>
	<div>
		<span>Visual Studio Code</span>
		<a href="/">Docs</span> 
		<a href="/">Updates</span> 
		<a href="/">Blog</span> 
		<a href="/">API</span> 
		<a href="/">Extensions</span> 
		<a href="/">FAQs</span>
		<a href="/">Learn</span>
		
		<input type="text" placeholder="Search Docs">
		<button>Download</button>
	</div>
	<br/>

	<div>
		<a href="/">Version 1.82</a> is now available! Read about the new features and fixes from July.
	</div>

	<br/>
</body>
```
 
![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F4387c99f-3afe-4d4a-8355-7685139bf791%2FScreenshot_2024-08-03_at_7.02.44_PM.png?table=block&id=8ee0c424-ac34-452b-a208-cfe3709c53d5&cache=v2)

# CSS
- CSS stands for Cascading Style Sheets. It is used to style our applications
You can add CSS to your HTML app by using - 
1. The  style attribute (inline styles)
2. In an external css file
 
## Approach #1 - Inline styles
Try updating the body tag in the last style as follows - 
<body style="background-color: black;">
... rest of the code
</body>

Approach #2 - External styles
Add a new file called index.css
Add the following code in it
body {
    background-color: black;
}

Update index.html
<html>
	<title>
		Visual Studio Code - Code Editor
	</title>
	<link rel="stylesheet" href="index.css">
</html>
<body>
... rest of the code
</body>

notion image
 
Common style attributes
color: Sets the text color.
background-color: Sets the background color.
font-size: Sets the size of the text.
margin: Sets the outer space around an element.
padding: Sets the inner space within an element.
border: Sets the border around an element.
Flexbox
Flexbox is a CSS layout model designed to help with the arrangement of items within a container.
Update the website to the following - 
<html>
	<title>
		Visual Studio Code - Code Editor
	</title>
</html>
<body>
	<div style="display: flex;">
		<div>Visual Studio Code</div>
		<a href="/">Docs</span> 
		<a href="/">Updates</span> 
		<a href="/">Blog</span> 
		<a href="/">API</span> 
		<a href="/">Extensions</span> 
		<a href="/">FAQs</span>
		<a href="/">Learn</span>
	</div>
	<div>
		<input type="text" placeholder="Search Docs">
		<button>Download</button>
	</div>
	<br/>

	<div>
		<a href="/">Version 1.82</a> is now available! Read about the new features and fixes from July.
	</div>

	<br/>
</body>

Notice that the elements are positioned right next to each other even though Visual Studio code is inside a div
Justify content
Try experimenting with the justify-centent  property
notion image
<html>
	<title>
		Visual Studio Code - Code Editor
	</title>
</html>
<body>
	<div style="display: flex; justify-content: space-between;">
		<div>Visual Studio Code</div>
		<a href="/">Docs</span> 
		<a href="/">Updates</span> 
		<a href="/">Blog</span> 
		<a href="/">API</span> 
		<a href="/">Extensions</span> 
		<a href="/">FAQs</span>
		<a href="/">Learn</span>
	</div>
	<div>
		<input type="text" placeholder="Search Docs">
		<button>Download</button>
	</div>
	<br/>

	<div>
		<a href="/">Version 1.82</a> is now available! Read about the new features and fixes from July.
	</div>

	<br/>
</body>

 
Another example
<html>

</html>
<body>
    <header>

    </header>
    <section>
    <div style="border-width: thick; border-style: solid; display: flex; justify-content: space-between; margin-left: 200px; margin-right: 200px;">
        <div style="background: red; "> 
            <h1>
                Code with GitHub Copilot
            </h1>
            <h6>
                Write code faster and smarter with GitHub Copilot, your AI pair programmer.
            </h6>            
            Try GitHub Copilot free for 30 days
            Completions present suggestions automatically to help you code more efficiently.
            
            Copilot Chat understands the context of your code, workspace, extensions, settings, and more.
            
            Inline Chat enables you to iteratively generate edits and get answers to quick questions, directly on your code.
        </div>
        <div style="background: green;">
        <img src="https://code.visualstudio.com/assets/home/swimlane-copilot.png" width="800px" /></div>
    </div>
</section>
    <footer>

    </footer>
</body>

Classes and ids
In CSS, classes and IDs are used as selectors to apply styles to HTML elements. They help in targeting specific elements for styling and can be used to enhance the modularity and reusability of CSS code.