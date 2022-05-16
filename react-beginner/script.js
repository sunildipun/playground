console.log('Will render react');
//Task 1 Render normal text using h1 or p tag, using reactDOM
// ReactDOM.render(<p>Hello My God</p>, document.getElementById('root'));

// Task 2 render <ul> with 2+ list in same root id
// ReactDOM.render(<ul><li>Hello</li><li>Hello 2 Hi</li></ul>, document.getElementById('root'));


// Task 3 render functional component (Making code composable and resuable)
// function MainContent() {
//     return (
//         <div>
//             <h1>Main Content Inside body!</h1>
//         </div>
//     )
// }

// ReactDOM.render(<div>
//     <MainContent />
// </div>, document.getElementById('root'));


//Using vanilla js print h1 tag inside root (Imperative way of implementing)
const rootElement = document.getElementById('root');
const h1 = document.createElement('h1');
h1.textContent = 'Hello World from Earth 52';
h1.className = 'hello'
rootElement.appendChild(h1)
