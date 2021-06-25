import React, { useContext, useEffect } from 'react'
import { NavbarContext } from './NavbarContext'
import Flex from '../../layout/Flex/Flex'
import Block from '../../layout/Block/Block'
import ServiceIcon from '../ServiceIcon/ServiceIcon'
import Accordion from '../Accordion/Accordion'
import AccordionItem from '../Accordion/AccordionItem'

export default function NavbarMenuDrawer({
    featuredLinks,
    loginLink,
    menuSections
}) {
    const [state, setState] = useContext(NavbarContext)

    const style = {
        transform: 'rotateX(0deg)',
        transformOrigin: 'top',
        opacity: '1',
        visibility: 'visible'
    }

    function handleWindowSizeChange() {
        setState((state) => ({ ...state, desktop: window.innerWidth >= 940 }))
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange)
        handleWindowSizeChange()
        return () =>
            window.removeEventListener('resize', handleWindowSizeChange)
    }, [])

    function FeaturedItem({ link }) {
        return (
            <li key={link.text}>
                <a href={link.href}>
                    <ServiceIcon
                        icon={link.icon}
                        title={link.text}
                        size='medium'
                    />
                    {link.text}
                </a>
            </li>
        )
    }

    function Desktop() {
        return (
            <div className='hw-navbar__drawer-desktop'>
                {featuredLinks && (
                    <ul className='hw-flex hw-flex--fourths hw-flex--gutter-large-desktop'>
                        {featuredLinks.map((featuredLink) => (
                            <FeaturedItem
                                link={featuredLink}
                                key={featuredLink.text}
                            />
                        ))}
                    </ul>
                )}
                <Flex gutterDesktop='large' wrap='fourths'>
                    {menuSections.map((section) => (
                        <Block key={section.title}>
                            <h5>{section.title}</h5>
                            <ul className='hw-linklist'>
                                {section.items.map((item) => (
                                    <li key={item.text}>
                                        <a href={item.href}>{item.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </Block>
                    ))}
                </Flex>
            </div>
        )
    }

    function Mobile() {
        return (
            <div className='hw-navbar__drawer-mobile'>
                {(featuredLinks || loginLink) && (
                    <Block mt='medium-2'>
                        <ul className='hw-linklist'>
                            {loginLink && (
                                <FeaturedItem
                                    link={{ ...loginLink, icon: 'person' }}
                                />
                            )}
                            {featuredLinks &&
                                featuredLinks.map((featuredLink) => (
                                    <FeaturedItem
                                        link={featuredLink}
                                        key={featuredLink.text}
                                    />
                                ))}
                        </ul>
                    </Block>
                )}
                <Accordion menu>
                    {menuSections.map((section) => (
                        <AccordionItem
                            title={section.title}
                            key={section.title}
                        >
                            <ul className='hw-accordion__link-items'>
                                {section.items.map((item) => (
                                    <li
                                        className='hw-accordion__link-item'
                                        key={item.text}
                                    >
                                        <a
                                            className='hw-accordion__link'
                                            href={item.href}
                                        >
                                            {item.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        )
    }

    return (
        state.menuOpen && (
            <section className='hw-navbar__drawer' style={style}>
                <div className='hw-navbar__drawer-content'>
                    {state.desktop && <Desktop />}
                    {!state.desktop && <Mobile />}
                </div>
            </section>
        )
    )
}
