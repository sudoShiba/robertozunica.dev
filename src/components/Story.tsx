import React from "react"

import StoryComponent from "./StoryComponent.tsx"

const Story: React.FC = () => {
  return (
    <article className="story-wrapper">
      <div className="col col-1">

      </div>
      <div className="col col-2">
        <StoryComponent
          title="Bachelor's Degree in Computer Science"
          content="I am currently pursuing a Bachelor's degree in Computer Science at KU Leuven. My studies have provided me with a solid foundation in programming, algorithms, and software development. I am passionate about learning and applying new technologies to solve real-world problems."
          size={1}
          image="https://wms.cs.kuleuven.be/cs/afbeeldingen/img-3869.jpg"
        />
        <StoryComponent
          title="High School Diploma in Maths & Sciences"
          content="I graduated from high school with a focus on Maths and Sciences. This background has equipped me with strong analytical and problem-solving skills, which I apply in my studies and projects."
          size={2}
          image="https://teksten.com/wp-content/uploads/2023/02/sint-leo-college-brugge-1.jpg"
        />
      </div>
      <div className="col col-3">

      </div>
    </article>
  )
}

export default Story