# React Multi Step

## Introduction

React Multi Step is a NPM package for easily building multi-step-forms with React.
This package will provide you the Components and utilities to quickly build a multi-step-form.

## Install

`npm install @armandoroman1016/react-multi-step-form`

or

`yarn add @armandoroman1016/react-multi-step-form`

## Usage

---

### MultiStep

`import MultiStep from '@armandoroman1016/react-multi-step-form'`

This will be the _only required component_ to create a multi-step-form with this package.
Props
| Name           | Description                                                      | Type   | Required |
| -------------- | ---------------------------------------------------------------- | ------ | -------- |
| steps          | Array of objects, each object has a component and label property | ```array```  | true     |
| formTransition | CSS Transition between each step                                 | ```string``` | false    |

Children

1. ProgressBar
2. Controls

Example

```
import React from react
import MultiStep from '@armandoroman1016/react-multi-step-form'
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

```import { ProgressBar } from '@armandoroman1016/react-multi-step-form```
The ProgressBar component is rendered by default when using the MultiStep component. In order to easily style the progress bar you can render the ProgressBar as a child of MultiStep.

Props - None Required
| Name                 | Description                                                                           | Type         | Required |
| -------------------- | ------------------------------------------------------------------------------------- | ------------ | -------- |
| completedBackground  | Background color of completed step(s)                                                 | ```string``` | false     |
| completedFontColor   | Font color of completed step(s)                                                       | ```String``` | false     |
| activeBackground     | Background color of active step                                                       | ```string``` | false     |
| activeFontColor      | Font color of active step                                                             | ```string``` | false     |
| incompleteBackground | Background color of incomplete step(s)                                                | ```string``` | false     |
| incompleteFontColor  | Font color of incomplete step(s)                                                      | ```string``` | false     |
| errorBackground      | Background color of step with error                                                   | ```string``` | false     |
| errorFontColor       | Font color of step with error                                                         | ```string``` | false     |
| labelColor           | Font color of every label (will be applied to all labels regardless of current state) | ```string``` | false     |
| completeLabelColor   | Font color for the label of complete step(s)                                          | ```string``` | false     |
| activeLabelColor     | Font color for the label of active step                                               | ```string``` | false     |
| incompleteLabelColor | Font color for the label of incomplete steps(s)                                       | ```string``` | false     |

Example

```
import React from react
import MultiStep, { ProgressBar } from '@armandoroman1016/react-multi-step-form'
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

```import { Controls } from '@armandoroman1016/react-multi-step-form'```

Like the ProgressBar component, the Controls component is rendered by default. In order to easily customize your controls render Controls as a child of MultiStep.

Props -
| Name           | Description                                                                               | type         | required |
| -------------- | ----------------------------------------------------------------------------------------- | ------------ | -------- |
| buttonStyles   | CSS styles to be applied to each of the default buttons                                   | ```object``` | false     |
| prevButtonText | Inner text of the default 'previous' button                                               | ```string``` | false     |
| nextButtonText | Inner text of the default 'next' button                                                   | ```string``` | false     |
| controls       | Object with 'next' and 'prev' properties where you can assign your own control components | ```object``` | false     |

Examples

```
import React from react
import MultiStep, { Controls } from '@armandoroman1016/react-multi-step-form'
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
    import { useMultiStep } from "@armandoroman1016/react-multi-step-form";

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

Upon completion of your final step you can easily retrieve all of your values using the ```complete``` function, which will return the an object with the field values from every step. You can use this function at any step but you will most likely use it only on your last step. 

Example
```
    import React, { useState } from "react";
    import { useMultiStep } from "@armandoroman1016/react-multi-step-form";

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

## Additional

### Using your own controls

When using your own controls your component will receive a function -```toggleSteps```- via props. You will need to utilize this function to toggle between steps.

Arguments for ```toggleSteps```

1) "increment" | "decrement"

Example
```
    ...
    const MyCustomControl = ({ toggleSteps }) => {

        return (
            <>
                <button onClick = {() => toggleSteps("increment")}></button>
            </>
        )
    }
```

### Handling errors

When a field in your form has invalid input you can disable toggling between steps with the ```setError``` function.

```
    import React, { useState } from "react";
    import { useMultiStep } from "@armandoroman1016/react-multi-step-form";

    const MyForm = () => {
        ...
        const { setError, stepForm } = useMultiStep();

        const handleChange = (e) => {
            ...
            if(e.target.length < 8) setError(true) // will disable toggling between steps
            
            else if(stepForm.error) setError(false)
        };

        return (
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" value={val} name="name" onChange={handleChange} />
            </form>
        );
    };
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

## 📃 License

Copyright &#169; 2020 Armando Roman
This project is MIT licensed.
