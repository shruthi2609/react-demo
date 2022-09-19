import React from 'react';
import ReactDOM from 'react-dom/client';

import AppComponent from './AppCopy';
import App from './App'
import SimpleEffect from './UseEffectEg/SimpleEffect';
import ContactList from './UseEffectEg/ContactList';
import ContactSearchById from './UseEffectEg/ContactSearchById';
import ProviderContext from './Context/ProviderContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<>
<ProviderContext></ProviderContext>
</>
)

//JSX - JS +XHTML
//JSX Rules
/*
JS formats like variables - {}
*/

//components
/**
 * return JSX
 * class component
 * functional component
 */
