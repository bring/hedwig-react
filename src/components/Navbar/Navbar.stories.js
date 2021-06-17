import React from 'react'
import Navbar from './Navbar'
import NavbarLogoIcon from './NavbarLogoIcon'
import NavbarSkipToMain from './NavbarSkipToMain'
import NavbarSelector from './NavbarSelector'
import NavbarLoginLink from './NavbarLoginLink'
import NavbarDrawer from './NavbarDrawer'
import NavbarMenu from './NavbarMenu'
import NavbarSearchButton from './NavbarSearchButton'
import NavbarSearch from './NavbarSearch'
import NavbarMenuButton from './NavbarMenuButton'
import NavbarMenuDrawer from './NavbarMenuDrawer'
import Block from '../../layout/Block/Block'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/pro-regular-svg-icons'

export default {
    title: 'Components/Navbar',
    component: Navbar,
    parameters: {
        layout: 'fullscreen'
    }
}

const selectorItems = [
    {
        title: 'Business',
        href: '/business',
        selected: false
    },
    {
        title: 'Private',
        href: '/private',
        selected: true
    }
]

// const loginLink = { text: 'Login', href: '#' }

// const loginMenu = { text: 'Login', icon: 'user', items: [] }

const featuredLinks = [
    { href: '#', text: 'Track a shipment', icon: 'pakke' },
    { href: '#', text: 'Mybring', icon: 'leverttilbedrift' },
    { href: '#', text: 'Magazine', icon: 'avis' },
    { href: '#', text: 'Contact us', icon: 'kundeservice' }
]

const menuSections = [
    {
        title: 'Send',
        items: [
            { href: '#', text: 'Parcels in Norway' },
            { href: '#', text: 'Parcels abroad' },
            { href: '#', text: 'Letters in Norway' },
            { href: '#', text: 'Return' },
            { href: '#', text: 'Letters abroad' },
            { href: '#', text: 'Addressing and wrapping' },
            { href: '#', text: 'Customs when sending abroad' }
        ]
    },
    {
        title: 'Receive',
        items: [
            { href: '#', text: 'On what days does my mail arrive?' },
            { href: '#', text: 'Home delivery' },
            { href: '#', text: 'Pick up yourself' },
            { href: '#', text: 'Customs when receiving' }
        ]
    }
]

function DrawerContents() {
    return (
        <>
            <Block mb='on' classList='hw-text-center'>
                <FontAwesomeIcon
                    icon={faUser}
                    size='7x'
                    className='hw-color-gray-light'
                />
            </Block>
            <Block mb='on'>
                <h3 className='hw-text-center'>Where do you want to log in?</h3>
            </Block>
            <Block mt='medium-3'>
                <a
                    className='hw-button hw-button--large hw-button--full hw-button--primary'
                    href='#'
                >
                    Mybring
                </a>
                <a
                    className='hw-button hw-button--large hw-button--full hw-button--secondary'
                    href='#'
                >
                    My post
                </a>
                <a
                    className='hw-button hw-button--large hw-button--full hw-button--secondary'
                    href='#'
                >
                    Stamp store
                </a>
                <a
                    className='hw-button hw-button--large hw-button--full hw-button--secondary'
                    href='#'
                >
                    Digipost
                </a>
                <a
                    className='hw-button hw-button--large hw-button--full hw-button--secondary'
                    href='#'
                >
                    MINe - Offshore &amp; Energy
                </a>
            </Block>
        </>
    )
}

const Template = (args) => (
    <div style={{ height: '600px' }}>
        <Navbar {...args}>
            <NavbarLogoIcon
                title='Posten logo'
                logo='posten'
                href='#'
                ariaLabel='Go to homepage'
            />
            <NavbarSkipToMain title='Skip to main content' href='#main' />
            <NavbarSelector items={selectorItems} />
            <NavbarMenu>
                <NavbarSearchButton text='Search' />
                {/* <NavbarLoginMenu /> */}
                <NavbarLoginLink
                    href='#'
                    text='My profile'
                    ariaLabel='Go to my profile'
                />
                <NavbarDrawer buttonText='Drawer' closeTitle='Close'>
                    <DrawerContents />
                </NavbarDrawer>
                <NavbarMenuButton
                    menuName='Menu'
                    menuTitle='Show menu'
                    closeName='Close'
                    closeTitle='Close menu'
                />
                <NavbarMenuDrawer
                    selectorItems={selectorItems}
                    featuredLinks={featuredLinks}
                    menuSections={menuSections}
                    loginLink={{ href: '#', text: 'Min side' }}
                    /* loginMenu={loginMenu} */
                />
            </NavbarMenu>
            <NavbarSearch placeholder='Search' ariaLabel='Search' />
        </Navbar>
    </div>
)

export const Default = Template.bind({})
