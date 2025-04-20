import React from "react"

import StoryComponent from "./StoryComponent.tsx"

const Story: React.FC = () => {
  return (
    <article className="story-wrapper">
      <div className="col col-1">
        <br />
        <StoryComponent
          title="Quivr"
          size={2}
          icon="https://quivr.be/static/quivr-logo-d5c320ef1703e3e9f234a39e2d15040a.png"
        >
          I work on the Quivr frontend site (ReactTS) and app (React Native) I work on the Quivr app frontend site (ReactTS) and app (React Native)
        </StoryComponent>
      </div>
      <div className="col col-2">
        <StoryComponent
          title="Bachelor's Degree in Computer Science"
          size={1}
          image="https://wms.cs.kuleuven.be/cs/afbeeldingen/img-3869.jpg"
        >
          I am currently pursuing a Bachelor's degree in Computer Science at KU Leuven. My studies have provided me with a solid foundation in programming, algorithms, and software development. I am passionate about learning and applying new technologies to solve real-world problems.
        </StoryComponent>
        <StoryComponent
          title="High School Diploma in Maths & Sciences"
          size={2}
          image="https://teksten.com/wp-content/uploads/2023/02/sint-leo-college-brugge-1.jpg"
        >
          I graduated from high school with a focus on Maths and Sciences. This background has equipped me with strong analytical and problem-solving skills, which I apply in my studies and projects.
        </StoryComponent>
      </div>
      <div className="col col-3">

      </div>
    </article>
  )
}

export default Story