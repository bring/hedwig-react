import React from 'react'

import {
    LightOutlineButton,
    PrimaryButton,
    PrimaryOutlineButton
} from 'hedwig-react'
import { SecondaryButton, SecondaryOutlineButton } from 'hedwig-react'
import { TextInput } from 'hedwig-react'
import { Block } from 'hedwig-react'
import { Card } from 'hedwig-react'
import { StandaloneSearch } from 'hedwig-react'
import 'hedwig-react/dist/index.css'



const App = () => {

  function testButton(e) {
    alert('Button pressed')
}

function testSearch(e) {
  alert("Search button was pressed with value: " + e)
}


    return (
        <div className='hw-container'>
            <Block mb='medium-2'>
                <h2>Search</h2>
            </Block>
            <Block>
                <StandaloneSearch buttonLabel="Search" label="Search" onClick={testSearch}></StandaloneSearch>
            </Block>
            <Block mb='large-2'>
                <h1>Hedwig react example app</h1>
            </Block>

            <Block mb='medium-2'>
                <h2>Buttons</h2>
            </Block>
            <Block mb='medim-2'>
                It’s about making placeholder text great again. That’s what
                people want, they want placeholder text to be great again. He’s
                not a word hero. He’s a word hero because he was captured. I
                like text that wasn’t captured. You're telling the enemy exactly
                what you're going to do. No wonder you've been fighting Lorem
                Ipsum your entire adult life.test
            </Block>
            <Block mb='medium-2'>
                <PrimaryButton onClick={(e) => testButton(e)}>
                    Primary button
                </PrimaryButton>
                <SecondaryButton>Secondary button</SecondaryButton>
                <PrimaryOutlineButton>
                    Primary outline button
                </PrimaryOutlineButton>
                <SecondaryOutlineButton>
                    Secondary outline button
                </SecondaryOutlineButton>
                <PrimaryButton disabled>Disabled button</PrimaryButton>
            </Block>
            <Block
                mb='medium-2'
                px='on'
                py='on'
                classList='hw-background-color-black'
            >
                <LightOutlineButton>Light outline button</LightOutlineButton>
            </Block>

            <Block mb='medium-2'>
                <h2>Input</h2>
            </Block>

            <Block mb='medium-2'>
                <TextInput
                    label='A text input'
                    placeholder='with a placeholder'
                ></TextInput>
            </Block>

            <Block mb='medium-2'>
                <Block mb='medium-2'>
                    <h2>Cards</h2>
                </Block>
                <div className='hw-flex hw-flex--fourths'>
                    <Card
                        title='Tittel 1'
                        description='Teksten er her da liksom'
                        imgUrl='http://placekitten.com/201/300'
                        url='http://www.posten.no'
                        imgFormat='4_3'
                    />
                    <Card
                        title='Tittel 1'
                        description='Teksten er her da liksom'
                        imgUrl='http://placekitten.com/201/300'
                        url='http://www.posten.no'
                        imgFormat='4_3'
                    />
                </div>
            </Block>

        </div>
    )
}

export default App
