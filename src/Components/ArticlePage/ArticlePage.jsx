import { useEffect, useState } from "react";
import CommentSection from "../CommentSection/CommentSection";
import "./ArticlePage.css"

export default function ArticlePage() {
    const [comments, setComment] = useState([])
    const [input, setInput] = useState("")
    // const [addComnt, setAddComnt] = useState(se)
        
    const environmentalComments = [
        { author: "EcoEnthusiast22", comment: "We need to protect our planet for future generations!" },
        { author: "GreenThumb99", comment: "Reducing carbon emissions is crucial for a sustainable future." },
        { author: "NatureLover123", comment: "Preserving biodiversity should be a global priority." },
        { author: "RenewableEnergyFan", comment: "Switching to renewable sources is a step towards a cleaner Earth." },
        { author: "OceanGuardian56", comment: "Our oceans need immediate attention and conservation efforts." },
        { author: "TreeHugger87", comment: "Planting trees is one of the simplest ways to combat climate change." },
        { author: "CleanAirAdvocate", comment: "Clean air is a basic right for all living beings." },
        { author: "SustainableLife2023", comment: "Sustainability is not an option but a necessity." },
        { author: "ZeroWasteChampion", comment: "Reducing waste starts with individual actions." },
        { author: "ClimateActionNow", comment: "Acting on climate change is an urgent global responsibility." },
        { author: "EnviroWarrior", comment: "Protecting endangered species is crucial for ecosystem balance." },
       
      ];
      
      console.log(environmentalComments);
      
      
    const addCmnt = () => {
        const c = {
            author: `anonymous${Math.round(Math.random() * 100)}`,
            comment: input
        }

        setComment([...comments, c])
        setInput("")
    }

   
    
  return (
    <div>
        <div className="wrapper">
            <div className="artice">
                <div className="h-content">
                <h2>The Unfolding Reality of Environmental Change</h2>
                <p>Author: Sir Razu Ahammed</p>
                </div>
                <div className="c-text">
                <p>The global environment is undergoing unprecedented shifts, signaling a critical need for collective action. Climate change, deforestation, loss of biodiversity, and pollution stand as formidable challenges, reshaping landscapes and ecosystems worldwide.

                Rising temperatures, attributed to human activities, intensify natural disasters like hurricanes, wildfires, and droughts, disrupting lives and economies. Glaciers retreat, oceans warm, and sea levels surge, threatening coastal communities with inundation.

                Deforestation continues at an alarming rate, depleting vital habitats and contributing to the loss of countless species. This loss of biodiversity not only affects ecosystems but also jeopardizes essential resources and the delicate balance of our planet.

                Pollution, both air and waterborne, permeates the environment, impacting human health and ecosystems. Plastic waste accumulates in oceans, endangering marine life, while air pollution exacerbates respiratory illnesses and climate imbalances.

                Amidst these challenges, global awareness and initiatives emerge. Calls for renewable energy adoption, reforestation efforts, and sustainable practices resonate across nations. Collaboration between governments, industries, and individuals becomes paramount to mitigate and adapt to these environmental shifts.</p>
                </div>
            </div>
           <div className="comment">
            <h2>Comments...</h2>
           <CommentSection environmentalComments = {environmentalComments} comments = {comments}/>
           <div className="manageComments">
            <h2>Leave a comment....</h2>
            <div className="addComment">
            {/* <span>Input your Name: </span><input type="text" className="nameInput" /> */}
            <input onChange={(e) => setInput(e.target.value)} type="text" value={input} />
            <button onClick={addCmnt}>Save Comment</button>
            </div>
           </div>
           </div>
        </div>
    </div>
  )
}
