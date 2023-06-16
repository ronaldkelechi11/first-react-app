import { useRef } from 'react'
import '../styling/home.css'

function App() {
    const username = useRef();

    const user = {
        name: "Ronald Kelechi",
        job: "Mobile Application Developer & Full Stack Web Developer",
    }
    return (
        <>
            <div className="about">
                <div className="first_div">
                    <div className="first_text">
                        <div className="text">I am</div></div>
                    <div className="second_text" ref={username}>{user.name}</div>
                    <div className="third_text">{user.job}</div>
                    <div className="fourth_text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea sunt voluptatibus pariatur est eligendi provident voluptates? Magnam aut possimus asperiores atque qui sed pariatur iste perferendis laborum, eveniet laboriosam rerum maiores vel temporibus molestiae ea vitae esse, suscipit nesciunt architecto distinctio perspiciatis neque. Modi rerum, eos itaque deserunt totam illo.</div>
                    <div className="button">More</div>
                </div>
                <div className="second_div">
                    <img src="/vite.svg" alt="" />
                </div>

                <div className="social_icons">
                </div>
            </div>
        </>
    )
}

export default App