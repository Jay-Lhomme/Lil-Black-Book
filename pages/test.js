// import React, { useEffect, useState } from 'react';
// import './google.js';

// function App() {
//   const [htmlFileString, setHtmlFileString] = useState();

//   async function fetchHtml() {
//     setHtmlFileString(await (await fetch('google.html')).text());
//   }
//   useEffect(() => {
//     fetchHtml();
//   }, []);

//   return (
//     <div className="App">
//       <div dangerouslySetInnerHTML={{ __html: htmlFileString }} />
//     </div>
//   );
// }

// export default App;

// import { createRoot } from 'react-dom';
// import './google.html';

// function Google() {
//   return <h1>Hello from React!</h1>;
// }

// const domNode = document.getElementById('google');
// document.body.innerHTML = '<div id=google"></div>';

// const root = createRoot(domNode);
// root.render(<Google />);
