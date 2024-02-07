import React from 'react'
import SectionWrapper from "../hoc/sectionWrapper.jsx";

const Contact = () => {
  return (
      <div className={"xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden content-center"}>
        <div className={"font-medium "}>Othman-hamzaoui@hotmail.com</div>
      </div>

  )
}

export default SectionWrapper(Contact, "contact")