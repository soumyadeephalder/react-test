import React from "react";
import Card from "../../Component/Card";

const data = [
    {
        "titel": "The JavaScript framework war is over",
        "description": "David Rodenas, Ph. D. in CodeX ·Feb 26",
        "img": "https://miro.medium.com/max/1400/0*ldeDpTSwdMfJIwVp",
        "contestants": `The war among frameworks is a hot topic in the JavaScript community, and it is one of many holy wars in the profession. Since the beginning, with jQuery, followed by AngularJS to modern frameworks, the war has been fierce. Many has fallen in the path, like Backbone or Sencha, leaving corpses: tons of legacy code that has to maintained. Others survive, like jQuery, that surprisingly still have a large community. Others, like Angular, does not seem to lift off as expected or promised.`
    },
    {
        "titel": "10 React Native Component Libraries Every Mobile Developer Should know",
        "description": "Top React Native Developer Tools to Use in 2022",
        "img":"https://miro.medium.com/max/700/1*ZdfNSG0heaXf2u7pDlGV8Q.png",
        "contestants": "People these days are highly dependent on applications for their daily functioning. Therefore, you can find applications that make people’s lives quite easily. Furthermore, people’s app-centric lifestyles have led to businesses developing applications that ate easy and quick to market and low-cost so that everyone can afford these. That being said, React Native is becoming increasingly popular, and its advanced features make it possible to create high-quality cross-platform apps."
    }
]

const Home = (props) => {
    return (
        <>
            <div className="row">
                <div className="leftcolumn">
                    {
                        data.map((item, index)=> <Card data={item} key={index} />)
                    }
                    
                </div>
                <div className="rightcolumn">
                    <div className="card">
                        <h2>About Me</h2>
                        <div className="fakeimg" style={{ height: 100 }}>Image</div>
                        <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
                    </div>
                    <div className="card">
                        <h3>Popular Post</h3>
                        <div className="fakeimg"><p>Image</p></div>
                        <div className="fakeimg"><p>Image</p></div>
                        <div className="fakeimg"><p>Image</p></div>
                    </div>
                    <div className="card">
                        <h3>Follow Me</h3>
                        <p>Some text..</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;

