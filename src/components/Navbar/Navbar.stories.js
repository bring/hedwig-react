import React from 'react'
import Navbar from './Navbar'
import NavbarLogoIcon from './NavbarLogoIcon'
import NavbarSkipToMain from './NavbarSkipToMain'
import NavbarSelector from './NavbarSelector'
import NavbarLoginLink from './NavbarLoginLink'
import NavbarMenu from './NavbarMenu'
import NavbarSearchButton from './NavbarSearchButton'
import NavbarSearch from './NavbarSearch'
import NavbarMenuButton from './NavbarMenuButton'
import NavbarMenuDrawer from './NavbarMenuDrawer'

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

const Template = (args) => (
    <div style={{ height: '600px' }}>
        <Navbar {...args}>
            <NavbarLogoIcon title='Go to homepage' icon='posten' href='#' />
            <NavbarSkipToMain title='Skip to main content' href='#main' />
            <NavbarSelector items={selectorItems} />
            <NavbarMenu>
                <NavbarSearchButton text='Search' />
                {/* <NavbarLoginMenu /> */}
                <NavbarLoginLink href='#' text='Min side' />
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
