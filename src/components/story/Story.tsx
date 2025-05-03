import React, { useState } from "react"

import "./story.css"

import Site from "./Site.tsx"
import Slider from "./Slider.tsx"
import StoryComponent from "./StoryComponent.tsx"

const Story: React.FC = () => {
  const [visibleColumn, setVisibleColumn] = useState<"col-1" | "col-2" | "col-3">("col-2")

  const handleToggle = (column: "col-1" | "col-2" | "col-3") => {
    setVisibleColumn(column)
  }

  return (
    <>
      <Slider
        handleToggle={handleToggle}
        visibleColumn={visibleColumn} />
      <article className="story-wrapper">
        {visibleColumn === "col-1" && (
          <>
            <StoryComponent
              title="Quivr"
              subtitle="Frontend Developer"
              date="November 2024 - Present"
              size={2}
            >
              <p>
                I work on the Quivr frontend site (ReactTS) and app (React Native) I work on the Quivr app frontend site (ReactTS) and app (React Native)
              </p>
              <Site url="https://quivr.be" />
            </StoryComponent>
            <StoryComponent
              title="Teacher's Aid"
              subtitle="Codefever VZW"
              date="September 2023 - Present"
              size={2}
            >
              <p>
                I work as a teacher's aid at Codefever, where I assist in teaching programming and computer science to students. This role allows me to share my knowledge and passion for technology with others.
              </p>
              <Site url="https://codefever.be" />
            </StoryComponent>
          </>)}
        {(visibleColumn !== "col-1" && visibleColumn !== "col-3") && (
          <>
            <StoryComponent
              title="Bachelor's Degree in Computer Science"
              subtitle="KU Leuven"
              date="2024 - Present"
              size={1}
              image="https://wms.cs.kuleuven.be/cs/afbeeldingen/img-3869.jpg"
            >
              I am currently pursuing a Bachelor's degree in Computer Science at KU Leuven. My studies have provided me with a solid foundation in programming, algorithms, and software development. I am passionate about learning and applying new technologies to solve real-world problems.
            </StoryComponent>
            <StoryComponent
              title="High School Diploma in Maths & Sciences"
              subtitle="Sint-Leo Hemelsdaele"
              date="2018 - 2024"
              size={1}
              image="assets/SLHD.jpeg"
            >
              I graduated from high school with a focus on Maths and Sciences. This background has equipped me with strong analytical and problem-solving skills, which I apply in my studies and projects.
            </StoryComponent>
          </>
        )}
        {visibleColumn === "col-3" && (
          <>
            <StoryComponent
              title="BEST coding challenge winner"
              subtitle="BEST Leuven"
              date="November 2024"
              size={2}
            >
              Together with two fellow students, we won the BEST-NMBS coding challenge on November 26. We had to solve small coding challenges in Python to earn points, and we ended up scoring the most points.
            </StoryComponent>
            <StoryComponent
              title="ULYSSIS"
              date="October 2024 - Present"
              image="assets/ULYSSIS.jpg"
              size={1}
            >
              <p>
                ULYSSIS is a student organization at KU Leuven that focuses on making computer science and open source more accessible to students. We combine technical projects with workshops and events to share technology in a hands-on, approachable way within the student community.
              </p>
              <Site url="https://ulyssis.org" />
            </StoryComponent>
            <StoryComponent
              title="Best Youth Developer 2024"
              subtitle="De Lijn"
              date="January 2024"
              image="assets/delijn.jpeg"
              size={2}
            >
              <p>
                Together with my randomly assembled team, we were the winners of the De Lijn Best Youth Developer Challenge 2024.
              </p>
              <Site url="https://www.leuvenactueel.be/nieuws/leuven/de-lijn-bekroont-top-talenten-in-best-youth-developer-challenge?nid=17897" />
              <Site url="https://pub.be/nl/de-lijn-bekroont-toptalenten-in-best-youth-developer-challenge/" />
            </StoryComponent>
            <StoryComponent
              title="Youth Leader"
              subtitle="KSA Kriko"
              date="2023 - Present"
              size={2}>
              <p>
                As a leader at KSA, I organize and guide activities for young people. I'm also the group's webmaster and have been responsible for coordinating a specific age group. I also have
              </p>
              <Site url="https://ksa-kriko.be" />
            </StoryComponent>
            <StoryComponent
              title="Youth Camp Animator"
              subtitle="Kazou"
              date="2023 - Present"
              image="assets/kazou.jpeg"
              size={1}>
              <p>
                As a volunteer at Kazou, I help organize and supervise youth camps, focusing on creating a fun and safe environment for all participants. I also hold a certified youth animator's certificate recognized by the Flemish government.
              </p>
              <Site url="https://kazou.be" />
            </StoryComponent>
          </>
        )}
      </article>
    </>
  )
}

export default Story