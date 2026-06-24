const questions = {
    html: [
        {
            question: "What does HTTP stand for?",
            answer:
                "HTTP stands for HyperText Transfer Protocol. It is the protocol used for communication between web browsers and web servers. It defines how requests and responses are sent over the internet.",
            type: "theory",
        },
        {
            question: "What is the role of a web browser?",
            answer:
                "A web browser retrieves web pages from servers, interprets HTML, CSS, and JavaScript, and displays them to users in a readable format.",
            type: "theory",
        },
        {
            question: "The <a> tag in HTML is used for?",
            answer:
                "The anchor tag (<a>) is used to create hyperlinks that allow users to navigate from one page or resource to another.",
            type: "theory",
        },
        {
            question: "Which HTML element is used to embed a video?",
            answer:
                "The <video> element is used to embed video content directly into a web page without requiring external plugins.",
            type: "theory",
        },
        {
            question: "Which semantic tag is typically used to group main content in a web page?",
            answer:
                "The <main> tag is used to represent the primary content of a web page. It helps improve accessibility and SEO.",
            type: "theory",
        },
    ],

    css: [
        {
            question: "Which selector has the highest specificity?",
            answer:
                "The ID selector has the highest specificity among element, class, and ID selectors. It overrides class and element selectors.",
            type: "theory",
        },
        {
            question: "What are the axes used in Flexbox layout?",
            answer:
                "Flexbox uses two axes: the Main Axis and the Cross Axis. Flex items are arranged along the main axis and aligned along the cross axis.",
            type: "theory",
        },
        {
            question: "What does the z-index property control?",
            answer:
                "The z-index property controls the stacking order of positioned elements. Elements with a higher z-index appear above elements with a lower z-index.",
            type: "theory",
        },
        {
            question: "Which property is used to change the font of an element?",
            answer:
                "The font-family property is used to specify the typeface of text such as Arial, Times New Roman, or Roboto.",
            type: "theory",
        },
        {
            question:
                "Which CSS property is used to control the alignment of flex items along the cross axis?",
            answer:
                "The align-items property is used to align flex items along the cross axis inside a flex container.",
            type: "theory",
        },
    ],

    javascript: [
        {
            question:
                "What is the difference between getElementById() and querySelector()?",
            answer:
                "getElementById() selects an element only by its unique id and is generally faster. querySelector() is more flexible because it can select elements using any valid CSS selector and returns the first matching element.",
            type: "theory",
        },
        {
            question: "What does addEventListener() do?",
            answer:
                "addEventListener() attaches an event handler to an HTML element. It allows JavaScript to respond to user actions such as clicks, keyboard input, and mouse events.",
            type: "theory",
        },
        {
            question: "Explain the use of localStorage in web development.",
            answer:
                "localStorage is used to store data in the browser as key-value pairs. The data remains available even after the browser is closed and reopened.",
            type: "theory",
        },
        {
            question: "What is Hoisting?",
            answer:
                "Hoisting is JavaScript's behavior of moving declarations to the top of their scope before code execution. Function declarations are fully hoisted, while variables behave differently depending on var, let, or const.",
            type: "theory",
        },
        {
            question: "Difference between JavaScript and Node.js?",
            answer:
                "JavaScript is a programming language. Node.js is a runtime environment that allows JavaScript to run outside the browser and interact with the operating system.",
            type: "theory",
        },
        {
            question: "What will be the output?",
            answer: "Output: Test",
            type: "code",
        },
        {
            question: 'What is the output of Boolean(" ")?',
            answer:
                "Output: true. A string containing a space is still considered a non-empty string, so it evaluates to true.",
            type: "code",
        },
        {
            question: "What is the output of let x = 10; { let x = 20; } console.log(x);",
            answer:
                "Output: 10. The inner x exists only inside the block scope and does not affect the outer variable.",
            type: "code",
        },
        {
            question: "What is the output of console.log([] + []);",
            answer:
                "Output: An empty string. Both arrays are converted to empty strings before concatenation.",
            type: "code",
        },
        {
            question:
                "What is the output of the setTimeout loop with var i from 0 to 2?",
            answer:
                "Output: 3 3 3. The callback executes after the loop completes, and var is function-scoped, so all callbacks access the same final value.",
            type: "code",
        },
    ],

    react: [
        {
            question: "React is a _______?",
            answer:
                "React is a JavaScript library developed by Meta for building user interfaces using reusable components.",
            type: "theory",
        },
        {
            question: "What is JSX?",
            answer:
                "JSX stands for JavaScript XML. It allows developers to write HTML-like syntax inside JavaScript, making UI code easier to understand and maintain.",
            type: "theory",
        },
        {
            question: "Which attribute is used instead of class in JSX?",
            answer:
                "className is used instead of class because class is a reserved keyword in JavaScript.",
            type: "theory",
        },
        {
            question: "What happens when state changes?",
            answer:
                "When state changes, React re-renders the component and updates the UI efficiently using the Virtual DOM.",
            type: "theory",
        },
        {
            question:
                "Which hook is used to persist a value between renders without causing re-renders?",
            answer:
                "The useRef hook stores values that persist across renders without triggering a re-render.",
            type: "theory",
        },
        {
            question: "Which hook runs after every render by default?",
            answer:
                "useEffect runs after every render unless a dependency array is provided.",
            type: "theory",
        },
        {
            question: "Which of the following causes a component re-render?",
            answer:
                "Updating state using setState or the useState setter function causes a component to re-render.",
            type: "theory",
        },
        {
            question: "Which statement about closures is correct?",
            answer:
                "A closure remembers variables from its lexical scope even after the outer function has finished executing.",
            type: "theory",
        },
        {
            question: "What will be rendered? const name='John';",
            answer:
                "Output: Hello John. JSX evaluates the JavaScript expression inside curly braces and renders its value.",
            type: "code",
        },
        {
            question:
                "What is the output of Promise and setTimeout execution order?",
            answer:
                "Output: 1 4 3 2. Synchronous code runs first, then microtasks (Promises), then macrotasks (setTimeout).",
            type: "code",
        },
    ],

    git: [
        {
            question: "What is Git?",
            answer:
                "Git is a distributed version control system used to track changes in source code and collaborate with other developers.",
            type: "theory",
        },
        {
            question: "What is the difference between Git and GitHub?",
            answer:
                "Git is a version control tool, while GitHub is a cloud platform that hosts Git repositories and enables collaboration.",
            type: "theory",
        },
        {
            question: "What is the purpose of git add?",
            answer:
                "git add moves changes from the working directory to the staging area before committing them.",
            type: "theory",
        },
        {
            question: "What is the purpose of git commit?",
            answer:
                "git commit saves a snapshot of staged changes into the repository history with a descriptive message.",
            type: "theory",
        },
        {
            question: "What is the difference between git pull and git push?",
            answer:
                "git pull downloads changes from a remote repository, while git push uploads local commits to a remote repository.",
            type: "theory",
        },
    ],

    dsa: [
        {
            question: "What is Data Structure?",
            answer:
                "A data structure is a way of organizing and storing data so that it can be accessed and modified efficiently.",
            type: "theory",
        },
        {
            question: "What is the difference between an Array and a Linked List?",
            answer:
                "Arrays store elements in contiguous memory locations, while linked lists store elements as nodes connected through pointers.",
            type: "theory",
        },
        {
            question: "What is the time complexity of Binary Search?",
            answer:
                "Binary Search has a time complexity of O(log n) because it repeatedly divides the search space in half.",
            type: "theory",
        },
        {
            question: "What is a Stack and where is it used?",
            answer:
                "A Stack follows the Last In First Out principle and is commonly used in recursion, function calls, undo operations, and expression evaluation.",
            type: "theory",
        },
        {
            question: "What is the difference between Queue and Stack?",
            answer:
                "A Stack follows LIFO (Last In First Out), while a Queue follows FIFO (First In First Out).",
            type: "theory",
        },
    ],
};

export default questions;