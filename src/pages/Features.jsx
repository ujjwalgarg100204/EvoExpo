import React from 'react'
import FeatureBox from './FeatureBox'
import '../landingPage.css'
import featureimage1 from '../images/feature_1.png'
import featureimage2 from '../images/feature_2.png'
import featureimage3 from '../images/feature_3.png'

const Features = () => {
  return (
    <div id="features">
        <div className="a-container">
            <FeatureBox image={featureimage1} title='Custom Landing Page' description='The landing pages can be customized 
            by the admin to give visitors with reelvant and targeted information about the event to their guests.'/>
            <FeatureBox image={featureimage2} title='Role assigning feature' description='Members of the event can be given roles, 
            and those roles can be given jobs with deadllines in accordance with their roles'/>
            <FeatureBox image={featureimage3} title='Human Error correction' description='Provides deadline warnings, push alerts, reminders, 
            and priorities.'/>
        </div>
    </div>
  )
}

export default Features