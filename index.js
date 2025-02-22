import React from "react";
import ReactDOM from "react-dom";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

const messages = {
  sad: [
    "Even on your worst days, you are still my sunshine.",
    "It’s okay to feel this way. I’m proud of you for carrying on.",
    "This moment will pass, but my love for you never will.",
    "You’re stronger than you think, and I believe in you.",
    "Cry if you need to—tears are proof of your strength.",
    // Add more messages here
  ],
  demotivated: [
    "You’ve conquered so much; this is just another hill to climb.",
    "Believe in yourself like I believe in you.",
    "Every step forward, no matter how small, is progress.",
    "Your potential is endless—don’t give up.",
    "Remember why you started; you’ve got this.",
    // Add more messages here
  ],
  happy: [
    "Seeing you happy makes my day brighter.",
    "Your smile is my favorite thing in the world.",
    "Let’s celebrate your happiness together, even from afar.",
    "You deserve all the joy in the world.",
    "Your laugh is music to my soul.",
    // Add more messages here
  ],
  missing: [
    "Even miles apart, my heart is always with you.",
    "Close your eyes and feel my hug—I’m right there.",
    "Distance can’t dim the light of our love.",
    "I’m counting the days until I can see you again.",
    "When you miss me, know that I’m missing you too.",
    // Add more messages here
  ],
  selfLove: [
    "You’re beautiful, inside and out—don’t forget that.",
    "Your kindness is your superpower.",
    "You deserve love and happiness just for being you.",
    "There’s no one else in the world like you—and that’s amazing.",
    "Your heart is your greatest strength.",
    // Add more messages here
  ],
};

const MessageBox = () => {
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");

  const handleGetMessage = () => {
    if (category && messages[category].length > 0) {
      const randomIndex = Math.floor(Math.random() * messages[category].length);
      setMessage(messages[category][randomIndex]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <Card className="w-full max-w-md p-4">
        <CardContent>
          <h1 className="text-xl font-bold text-center mb-4">Pick Your Mood</h1>
          <Select onValueChange={(value) => setCategory(value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sad">Sad/Low Days</SelectItem>
              <SelectItem value="demotivated">Demotivated</SelectItem>
              <SelectItem value="happy">Happy Moments</SelectItem>
              <SelectItem value="missing">Missing You</SelectItem>
              <SelectItem value="selfLove">Self-Love</SelectItem>
            </SelectContent>
          </Select>
          <Button className="w-full mt-4" onClick={handleGetMessage}>
            Get Message
          </Button>
          {message && (
            <div className="mt-4 p-4 border rounded-lg bg-gray-100 text-center">
              <p className="text-lg">{message}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default MessageBox;
ReactDOM.render(<MessageBox />, document.getElementById("root"));

