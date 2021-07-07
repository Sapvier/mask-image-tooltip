import React, {useState} from 'react';

const App = () => {
    const [data, setData] = useState([{text: 'Hello World!'}])
    return (
        <div className="container">
            {data.map(i =>
                <div>
                    <div className="text-message">
                        <p> {i.text} Lorem ipsum dolor sit amet.
                       psum mollitia quasi quisquam quos repellendus totam vitae voluptatem?</p>
                    </div>
                    <div className="tooltip"/>
                </div>)}
        </div>
    )
};


export default App;