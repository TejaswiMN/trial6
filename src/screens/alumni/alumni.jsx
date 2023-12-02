
import React from 'react';
import Blog from '../../components/blog/blog';
import Navbar from '../../components/Navbar/Navbar';
import Bottom from '../../components/bottom/bottom';
import MakeBlog from '../../components/makeblog/makeblog';

function Alumni() {
  return (
    <div className="Alumni">
      <Navbar />
      <MakeBlog />   
        <Blog Name={"Aditi K"} Year={"2019"} Title={"My SWE Interviews"} Article={"My experience with Software Engineering (SWE) interviews has been both challenging and enlightening. The technical assessments tested my problem-solving abilities and coding skills, pushing me to think critically under time constraints. Each interview provided an opportunity to showcase my knowledge, but more importantly, it emphasized the significance of effective communication in presenting solutions. Facing diverse coding challenges and discussing algorithmic approaches with interviewers not only honed my technical prowess but also improved my collaboration and articulation skills. Despite initial nerves, the experience strengthened my resilience and determination to continuously learn and adapt, ultimately fostering personal and professional growth in the dynamic field of software engineering."}/>  
      <Bottom />
    </div>
  );
}

export default Alumni;
