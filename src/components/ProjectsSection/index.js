import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import githubLogo from '../../assets/images/projects/githublogo.svg'

class ProjectsSection extends React.Component {
  render() {
    return (
      <Section title="Projects">
        <div className="row">
          <ExperienceUnit
            logo={githubLogo}
            colour="#FFFFFF"
            title="NodeChat"
            link="https://github.com/BMonsalvatge/nodechat"
            timeperiod="2016 - Current"
            subtitle="Expanded from the socket.io chat room example.  Added room functionality, and will soon be working on a new 
            frontend built in React."
          />
          <ExperienceUnit
            logo={githubLogo}
            colour="#FFFFFF"
            title="More to Come!"
            link="https://github.com/BMonsalvatge"
            timeperiod="Current"
            subtitle="Have some additional projects in the works that will be highlighted here soon!"
          />
        </div>
      </Section>
    )
  }
}

export default ProjectsSection
