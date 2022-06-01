import * as React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import { CookieCheckbox } from './CookieCheckbox';




export const ExampleComponent = () => {
  return (
    <div>
      <CookieCheckbox
        accordionData={{
          title: 'Manage consent preferences',
          sectionsData: [
            {
              title: 'Strictly Necessary Cookies',
              content: `These cookies are necessary for the website to function and cannot be switched
          off in our systems. They are usually only set in response to actions made by you which 
          amount to a request for services, such as setting your privacy preferences, logging in or 
          filling in forms. You can set your browser to block or alert you about these cookies, 
          but some parts of the site will not then work.`,
              strict: false,
              checkboxId: ''
            },
            {
              title: 'Functional Cookies',
              content: `These cookies enable the website to provide enhanced functionality and personalisation.
          They may be set by us or by third party providers whose services we have added to our pages.
          If you do not allow these cookies then some or all of these services may not function properly.`,
              strict: true,
              checkboxId: 'functional'
            },
            {
              title: 'Performance Cookies',
              content: `These cookies allow us to count visits and traffic sources so we can measure and 
          improve the performance of our site. They help us to know which pages are the most and least 
          popular and see how visitors move around the site. All information these cookies collect is 
          aggregated and therefore anonymous. If you do not allow these cookies we will not know when 
          you have visited our site, and will not be able to monitor its performance.`,
              strict: false,
              checkboxId: 'performance'
            },
            {
              title: 'Targeting Cookies',
              content: `These cookies may be set through our site by our advertising partners. They may be 
          used by those companies to build a profile of your interests and show you relevant adverts on 
          other sites. They do not store directly personal information, but are based on uniquely 
          identifying your browser and internet device. If you do not allow these cookies, you will 
          experience less targeted advertising.`,
              strict: false,
              checkboxId: 'targeting'
            }
          ]
        }}
      />
      {/* <div className=''>Example Component: {text}</div>
      <Button variant='danger'>{text}</Button> */}
    </div>
  )
}