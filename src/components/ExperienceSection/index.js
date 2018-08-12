import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import etgLogo from '../../assets/images/experience/etglogo.png'
import shlogo from '../../assets/images/experience/shlogo.png'
import digarclogo from '../../assets/images/experience/digarclogo.png'

class ExperienceSection extends React.Component {
  render() {
    return (
      <Section title="Experience">
        <div className="row">
          <ExperienceUnit
            logo={etgLogo}
            colour='#020202'
            title='EnvironTek Games, LLC'
            timeperiod='2010 - 2012'
            subtitle='Game engine programmer working with a small team.  Worked on different components
             of the graphics and audio engines using SDL and C++.'
          />
          <ExperienceUnit
            logo={shlogo}
            colour='#FFFFFF'
            title='SingleHop'
            link='https://www.singlehop.com/'
            timeperiod='2015 - 2018'
            subtitle='As a System Administrator I managed the day to day
            operations of our managed services clients. After a year I was promoted to Senior
            System Administrator, where I performed the duties as a Technical Account Manager for 
            several of our high portfolio clients.'
          />
          <ExperienceUnit
            logo={digarclogo}
            colour='#004165'
            title='DIGARC'
            link='https://www.digarc.com/'
            timeperiod='2018 - Current'
            subtitle='Working as a System Administrator managing the AWS infrastructure of a SaaS company.  
            Maintaining the 24/7 online presence of an established piece of education software as well as 
            modernizing new systems using IAC (Terraform, Chef, Docker) and the latest DevOps standards.'
          />
        </div>
      </Section>
    )
  }
}

export default ExperienceSection
