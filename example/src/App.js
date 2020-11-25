import React from 'react'

import { Button } from 'hedwig-react'
import { PrimaryButton } from 'hedwig-react'
import { SecondaryButton } from 'hedwig-react'
import { Card } from 'hedwig-react'
import 'hedwig-react/dist/index.css'

function testButton(e) {
  alert("Button pressed");
}

const App = () => {
  return <div className="hw-container">
  <div className="hw-block hw-block--mb-large-2">
  <h1>Hedwig react component library</h1>
  </div>

  <div className="hw-block hw-block--mb-medium-2">
  <h2>Buttons</h2>
  </div>
  <div className="hw-block hw-block--mb-medium-2">
  It’s about making placeholder text great again. That’s what people want, they want placeholder text to be great again. He’s not a word hero. He’s a word hero because he was captured. I like text that wasn’t captured. You're telling the enemy exactly what you're going to do. No wonder you've been fighting Lorem Ipsum your entire adult life.test
  </div>
  <div className="hw-block hw-block--mb-medium-2">
  <Button>Normal button</Button>
  <PrimaryButton onClick={(e) => testButton(e)}>Primary button</PrimaryButton>
  <SecondaryButton>Secondary button</SecondaryButton>

  </div>
  <div className="hw-block hw-block--mb-medium-2">
  <h2>Cards</h2>
  <div className="hw-flex hw-flex--fourths">
  <Card title="Tittel 1" description="Teksten er her da liksom" imgUrl="http://placekitten.com/201/300" url="http://www.posten.no" imgFormat="4_3" />
  </div>

  </div>
  </div>
}

export default App
