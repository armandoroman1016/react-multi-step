# React Multi Step

## Introduction

React Multi Step is a NPM package for easily building multi-step-forms with React.
This package will provide you the Components and utilities to quickly build a multi-step-form.

**Install**
`npm install react-multi-step`
or
`yarn add react-multi-step`

## Usage

---

### MultiStep

`import MultiStep from 'react-multi-step'`

This will be the _only required component_ to create a multi-step-form with this package.
Props
| Name           | Description                                                      | Required |
| -------------- | ---------------------------------------------------------------- | -------- |
| steps          | Array of objects, each object has a component and label property | true     |
| formTransition | CSS transition string                                            | false    |
Children

1. ProgressBar
2. Controls

Example

```
import React from react
import MultiStep from 'react-multi-step'
import { FormOne, FormTwo, FormThree } from '../your/components'

const EasyMultiForm = () => {
    return (
        <div>
            <MultiStep
                steps={[
                {
                    component: Test,
                    name: "Contact",
                },
                {
                    component: Test2,
                    name: "Personal",
                },
                {
                    component: Test3,
                    name: "Payment",
                }]}
            />
        <div>
    )
}
```

### ProgressBar

```import { ProgressBar } from 'react-multi-step```
The ProgressBar component is rendered by default when using the MultiStep component. In order to easily style the progress bar you can render the ProgressBar as a child of MultiStep.

Props - None Required
| Name                 | Description                                                                           |
| -------------------- | ------------------------------------------------------------------------------------- |
| completedBackground  | Background color of completed step(s)                                                 |
| completedFontColor   | Font color of completed step(s)                                                       |
| activeBackground     | Background color of active step                                                       |
| activeFontColor      | Font color of active step                                                             |
| incompleteBackground | Background color of incomplete step(s)                                                |
| incompleteFontColor  | Font color of incomplete step(s)                                                      |
| errorBackground      | Background color of step with error                                                   |
| errorFontColor       | Font color of step with error                                                         |
| labelColor           | Font color of every label (will be applied to all labels regardless of current state) |
| completeLabelColor   | Font color for the label of complete step(s)                                          |
| activeLabelColor     | Font color for the label of active step                                               |
| incompleteLabelColor | Font color for the label of incomplete steps(s)                                       |

Example

```
import React from react
import MultiStep, { ProgressBar } from 'react-multi-step'
import { FormOne, FormTwo, FormThree } from '../your/components'

const EasyMultiForm = () => {
    return (
        <div>
            <MultiStep
                steps={*Your Steps Array Here*}
            >
                <ProgressBar completedBackground = "#ff5252" activeBackground = "#0097a7">
            </MultiStep>
        <div>
    )
}
```

### Controls

```import { Controls } from 'react-multi-step```

Like the ProgressBar component, the Controls component is rendered by default. In order to easily customize your controls render Controls as a child of MultiStep.

Props - None Required
| Name           | Description                                                                               |
| -------------- | ----------------------------------------------------------------------------------------- |
| buttonStyles   | Style object to be applied to each of the default buttons                                 |
| prevButtonText | Inner text of the default 'previous' button                                               |
| nextButtonText | Inner text of the default 'previous' button                                               |
| controls       | Object with 'next' and 'prev' properties where you can assign your own control components |


Examples
```
import React from react
import MultiStep, { Controls } from 'react-multi-step'
import { FormOne, FormTwo, FormThree } from '../your/components'
import { MyCustomPrevBtn, MyCustomNxtBtn } from '../your/components'

// Overriding default styles
const OverrideStyles = () => {
    return (
        <div>
            <MultiStep
                steps={*Your Steps Array Here*}
            >
                <Controls buttonStyles={{background: "red"}}/>
            </MultiStep>
        <div>
    )
}


// Providing your own custom control
const CustomComponents = () => {
    return (
        <div>
            <MultiStep
                steps={*Your Steps Array Here*}
            >
                <Controls controls = {{prev: MyCustomPrevBtn, next: MyCustomNxtBtn}}/>
            </MultiStep>
        <div>
    )
}
```

### Collecting Form Data

#### Updating Form Values

In order to keep track of the input values across all of your forms, your going to need to make use of the ```updateVals``` function.
This function will store the values which you can retrieve upon final step submission.

Example
```
    import React, { useState } from "react";
    import { useMultiStep } from "react-multi-step";

    const MyForm = () => {
        ...
        const { updateVals } = useMultiStep();
        const handleChange = (e) => {
            ...
            updateVals(e.target.name, e.target.value);
        };

        return (
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" value={val} name="name" onChange={handleChange} />
            </form>
        );
    };
```

#### Retrieving Form Values

Once your final step is complete you can easily grab all of your values using the ```complete``` function, which will return the an object with the field values from every step. You can use this function at any step but you will most likely use it only on your last step. 

Example
```
    import React, { useState } from "react";
    import { useMultiStep } from "react-multi-step";

    const MyForm = () => {
        ...
        const { complete } = useMultiStep();
        const handleSubmit = (e) => {
            ...
            const allFieldValues = complete(); // allFieldValues will store the fields input
        };

        return (
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" value={val} name="name" onChange={*Your handle change function*} />
            </form>
        );
    };
```

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
