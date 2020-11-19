import React from 'react'

import { Button } from 'hedwig-react'
import 'hedwig-react/dist/index.css'

const App = () => {
  return <div className="hw-container">
  <div className="hw-block hw-block--mb-large-2">
  <h1>Hedwig react component library</h1>
  </div>

  <div class="hw-block hw-block--mb-medium-2">
  <h2>Buttons</h2>
  </div>
  <div className="hw-block hw-block--mb-medium-2">
  It’s about making placeholder text great again. That’s what people want, they want placeholder text to be great again. He’s not a word hero. He’s a word hero because he was captured. I like text that wasn’t captured. You're telling the enemy exactly what you're going to do. No wonder you've been fighting Lorem Ipsum your entire adult life.
  </div>
  <div className="hw-block">
  <Button>Normal button</Button>
  <Button color="secondary">Secondary button</Button>
  </div>
  <div className="hw-block">

  </div>
  </div>
}

export default App
