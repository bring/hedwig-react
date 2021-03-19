import React from 'react';
import Accordion from './Accordion';

export default {
  title: 'Components/Accordion',
  component: Accordion
};

const Template = (args) => <Accordion {...args}></Accordion>;

export const Default = Template.bind({});
Default.args = {
    items: [{
        title: 'Hva er hentefristen', 
        content:<div className="hw-wysiwyg hw-wysiwyg--small">
                    <p>Fristen for å hente pakker og andre sendinger på postkontorene er 14 dager. Dersom du ikke henter sendingen innen 14 dager blir sendingen returnert til avsender.</p>
                    <ul>
                        <li>List item 1</li>
                        <li>List item 2</li>
                        <li>List item 3</li>
                    </ul>
                </div>
    },{
        title: 'Hvordan finner jeg hvilket hentested som tilhører min adresse?',
        content:<div className="hw-wysiwyg hw-wysiwyg--small">
                    <p>I vårt Adressesøk kan du finne hvilket hentested som er knyttet til adressen din. I søket får du listet opp alle adressene inkludert husnummer og tilhørende postnummer. Holder du markøren over adressen vil du se hentested (for pakker og store sendinger). Du kan ved å klikke på husnummeret gå til kartløsningen, som vil vise deg mer informasjon om hentestedet.</p>
                </div>
    },{
        title: 'Hvilke regler gjelder når jeg skal motta en sending fra utlandet?',
        content:<div className="hw-wysiwyg hw-wysiwyg--small">
                    <p>Alle sendinger fra utlandet og som kan ha tollpliktig innhold vil bli tollbehandlet/tollvurdert.</p>
                    <p>Private gaver med verdi inntil kr 1000 er som oftest toll og avgiftsfrie så fremt de ikke inneholder eks alkohol og tobakksvarer</p>
                    <p>For all annen import hvor verdien er kr 350 (inkludert frakt og forsikring) eller mer må du som oftest betale mva (ev andre avgifter) til staten. Posten fortoller sendingen for deg mot betaling av tollklaring.</p>
                </div>
    }]
  };
  