import React, { createRef, useEffect, useState } from "react";

export default function Item({ item: { title, content } }) {

    const [open, setOpen] = useState(false);
    const [triggerHeight, setTriggerHeight] = useState();
    const [contentHeight, setContentHeight] = useState();

    const item = createRef();
    const trigger = createRef();
    const contentRef = createRef();


    useEffect(() => {
        setTriggerHeight(trigger.current.offsetHeight);
        setContentHeight(contentRef.current.offsetHeight);        
        item.current.style.height =  trigger.current.offsetHeight + 'px';
    },[]);

    function toggleItem() {
        if(open){
            item.current.style.height = (triggerHeight) + 'px';
        } else {
            item.current.style.height = (triggerHeight + contentHeight) + 'px';
        }
        setOpen(!open);        
    }


    return (
        <li className="hw-accordion__item" ref={ item }>
            <button className="hw-accordion__trigger" onClick={ toggleItem } ref={ trigger }>
                { title }
                <div className="hw-accordion__icon"></div>
            </button>
            <div className="hw-accordion__contents" ref={ contentRef }>
                { content }
            </div>
        </li>
    )
}
