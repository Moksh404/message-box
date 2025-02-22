import React, { useState } from "react";

const messages = {
    happy: ["Enjoy the little moments!", "Happiness is a choice.", "Smile, it suits you!", "Today is a great day!"],
    sad: ["It's okay to feel sad.", "You are not alone.", "Better days are coming.", "I'm here for you."],
    motivation: ["You can do it!", "Keep pushing!", "Believe in yourself!", "Never give up!"]
};

function MessageBox() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [message, setMessage] = useState("");

    const getRandomMessage = (category) => {
        const msgs = messages[category];
        setMessage(msgs[Math.floor(Math.random() * msgs.length)]);
    };

    return (
        <div style={{ textAlign: "center", padding: "20px", fontFamily: "Arial" }}>
            <h2>Pick a category</h2>
            {Object.keys(messages).map((category) => (
                <button key={category} onClick={() => getRandomMessage(category)} style={{ margin: "10px", padding: "10px" }}>
                    {category.toUpperCase()}
                </button>
            ))}
            {message && <h3>{message}</h3>}
        </div>
    );
}

export default MessageBox;
