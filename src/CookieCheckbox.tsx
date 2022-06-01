import * as React from 'react'
import {Accordion } from 'react-bootstrap'

interface ORProps {
  accordionData: {
    title: string
    sectionsData: {
      title: string
      content: string
      strict: boolean
      checkboxId: string
    }[]
  }
}

interface ToggleProps {
  strict: boolean
  index: number
  checkboxId: string
}

function updateCBs(checkboxId: any) {
  console.log(checkboxId)
}

function CookieText() {
  return <span>Strictly required</span>
}

function CookieSwitch(props: { index: number; checkboxId: string }) {
  return (
    <label className='switch' style={{ textAlign: 'right' }}>
      <input type='checkbox' name='cookies[]' value={props.index} />
      <span
        className='slider round'
        onClick={() => updateCBs(props.checkboxId)}
      ></span>
    </label>
  )
}

function CookieSwitchOrText(props: ToggleProps) {
  const strict = props.strict
  if (strict) {
    return <CookieText />
  }
  return <CookieSwitch index={props.index} checkboxId={props.checkboxId} />
}


export const CookieCheckbox = ({ accordionData }: ORProps) => {
  return (
    <div>
      <Accordion defaultActiveKey='0'>
        {accordionData.sectionsData.map(
          (
            element: {
              title: string
              content: string
              strict: boolean
              checkboxId: string
            },
            index: any
          ) => (
            <Accordion.Item eventKey={index} key={index}>
              <Accordion.Header>
                <p className='sectionTitle'>{element.title}</p>
                <CookieSwitchOrText
                  strict={element.strict}
                  index={index}
                  checkboxId={element.checkboxId}
                />
              </Accordion.Header>
              <Accordion.Body>{element.content}</Accordion.Body>
            </Accordion.Item>
          )
        )}
      </Accordion>
    </div>
  )
}
