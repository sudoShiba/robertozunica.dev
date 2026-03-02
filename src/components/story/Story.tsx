import React, { useState } from "react"

import "./story.css"
import {ColumnKey, columnMap, Columns} from "../../types/types.ts"

import MultiStory from "./MultiStory.tsx"
import MultiStoryItem from "./MultiStoryItem.tsx"
import Site from "./Site.tsx"
import Slider from "./Slider.tsx"
import StoryComponent from "./StoryComponent.tsx"

const getColumnFromUrl = (): Columns => {
  const params = new URLSearchParams(window.location.search)
  const col = params.get("column") as ColumnKey | null

  if (col && col in columnMap)
    return columnMap[col]

  return "col-2" // Default to "col-2" if no valid column is found
}

const Story: React.FC = () => {
  const [visibleColumn, setVisibleColumn] = useState<Columns>("col-2")

  React.useEffect(() => {
    setVisibleColumn(getColumnFromUrl())
  }, [])

  const handleToggle = (column: Columns) => {
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
            <MultiStory title="Codefever VZW" date="September 2023 - Present">
              <MultiStoryItem title="Teacher" date="Februari 2025 - Present">
                I became a teacher at Codefever after being an teacher's aid for a while. I've taught HTML/CSS/JS.
              </MultiStoryItem>
              <MultiStoryItem title="Teacher's Aid" date="September 2023 - Present">
                As a teacher's aid at Codefever, I assist in teaching programming and computer science to students. I've been helping out various classes, from skratch to python and web development.
              </MultiStoryItem>
              <Site url="https://codefever.be" />
            </MultiStory>
            <StoryComponent
              title="Frontend Developer"
              subtitle="Quivr"
              date="November 2024 - Present"
              size={2}
            >
              <p>
                I work on the Quivr frontend site (ReactTS) and app (React Native) I work on the Quivr app frontend site (ReactTS) and app (React Native)
              </p>
              <Site url="https://quivr.be" />
            </StoryComponent>
            <StoryComponent
              title="Intern"
              subtitle="Groen"
              date="August 2025 - September 2025"
              size={1}
            >
              <p>
                At Groen, I contributed to the development and conceptualization of an interactive platform that provides insight into citizens’ voting behavior. Using Python, I processed the voting data and imported it into the SQL database, and translated the data into a user-friendly web app with an Alpine.js frontend and a PHP backend. The application featured a fully responsive and dynamic design and could also be installed as a PWA.
              </p>
              <Site url="https://groen.be" />
            </StoryComponent>
          </>)}
        {(visibleColumn !== "col-1" && visibleColumn !== "col-3") && (
          <>
            <StoryComponent
              title="Bachelor's Degree in Computer Science"
              subtitle="KU Leuven"
              date="2024 - Present"
              size={1}
              image="assets/KUL.jpg"
              caption="Department of Computer Science &copy; KU Leuven"
            >
              I am currently pursuing a Bachelor's degree in Computer Science at KU Leuven. My studies have provided me with a solid foundation in programming, algorithms, and software development. I am passionate about learning and applying new technologies to solve real-world problems.
              <Site url="https://wms.cs.kuleuven.be" />
            </StoryComponent>
            <StoryComponent
              title="High School Diploma in Maths & Sciences"
              subtitle="Sint-Leo Hemelsdaele"
              date="2018 - 2024"
              size={1}
              image="assets/SLHD.jpeg"
              caption="Sint-Leo Hemelsdaele"
            >
              I graduated from high school with a focus on Maths and Sciences. This background has equipped me with strong analytical and problem-solving skills, which I apply in my studies and projects.
              <Site url="https://sint-leo.be" />
            </StoryComponent>
          </>
        )}
        {visibleColumn === "col-3" && (
          <>
            <StoryComponent
              title="BEST coding challenge winner"
              subtitle="BEST Leuven"
              date="November 2024"
              size={1}
              image="assets/BEST2024.jpg"
              caption="Rik, Thomas and I recieving our prize"
            >
              <p>
                Together with two fellow students <a href="https://www.linkedin.com/in/thomas-verboven/" target="_blank">Thomas Verboven</a> and Rik Van den Eynde, we won the BEST-NMBS coding challenge on November 26. The competition consisted of a series of small but tricky coding challenges in Python, each designed to test our problem-solving skills and teamwork under time pressure. Throughout the event, we managed to earn points by solving as many challenges as possible within the time limit. Our efforts paid off, and we were awarded the prize for best beginner team.
              </p>
              <Site url="https://bestleuven.eu" />
            </StoryComponent>
            <StoryComponent
              title="ULYSSIS"
              date="October 2024 - Present"
              image="assets/ULYSSIS.jpg"
              caption="the ULYSSIS team at Walibi during teambuilding"
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
              caption="I am the fourth from the left"
              size={2}
            >
              <p>
                Together with my randomly assembled team, we were the winners of the De Lijn Best Youth Developer Challenge 2024.
              </p>
              <Site url="https://www.leuvenactueel.be/nieuws/leuven/de-lijn-bekroont-top-talenten-in-best-youth-developer-challenge?nid=17897" />
              <Site url="https://pub.be/nl/de-lijn-bekroont-toptalenten-in-best-youth-developer-challenge/" />
            </StoryComponent>
            <MultiStory title="KSA Kriko" date="2021 - 2025">
              <MultiStoryItem title="Treasurer" date="2024 - 2025">
                As treasurer at KSA Kriko, I managed the group's finances and budget.
              </MultiStoryItem>
              <MultiStoryItem title="Youth Leader" date="2023 - 2025">
                As a leader at KSA, I organize and guide activities for young people. I'm also the group's webmaster and have been responsible for coordinating a specific age group.
              </MultiStoryItem>
              <Site url="https://ksa-kriko.be" />
            </MultiStory>
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
