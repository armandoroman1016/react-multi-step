

function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

function createCtx(defaultValue) {
    var defaultUpdate = function () { return defaultValue; };
    var ctx = React.createContext({
        state: defaultValue,
        update: defaultUpdate,
    });
    function Provider(props) {
        var _a = React.useState(defaultValue), state = _a[0], update = _a[1];
        return React.createElement(ctx.Provider, __assign({ value: { state: state, update: update } }, props));
    }
    return [ctx, Provider];
}

var ctx = {
    inputFields: {},
    currentPosition: 0,
    maxPosition: 0,
    errors: false,
    completed: false,
    stepNames: [],
    addStepName: function (stepName) {
        this.stepNames.push(stepName);
    }
};
var _a = createCtx(ctx), formCtx = _a[0], FormProvider = _a[1];

var useMultiStep = function () {
    var _a = React.useContext(formCtx), state = _a.state, update = _a.update;
    function complete() {
        if (!state.errors) {
            update(__assign(__assign({}, state), { completed: true }));
        }
        return state.inputFields;
    }
    function updateVals(fieldName, fieldValue) {
        var _a;
        update(__assign(__assign({}, state), { inputFields: __assign(__assign({}, state.inputFields), (_a = {}, _a[fieldName] = fieldValue, _a)) }));
    }
    function setError(b) {
        update(__assign(__assign({}, state), { errors: b }));
    }
    return { stepForm: state, updateMultiStep: update, complete: complete, updateVals: updateVals, setError: setError };
};

var Button = styled__default['default'].button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    border-radius: 4px;\n    border: none;\n    padding: 8px 10px;\n    background: #5c8ef2;\n    color: #fff;\n    cursor: pointer;\n    width: 150px;\n    margin-bottom: 12px;\n"], ["\n    border-radius: 4px;\n    border: none;\n    padding: 8px 10px;\n    background: #5c8ef2;\n    color: #fff;\n    cursor: pointer;\n    width: 150px;\n    margin-bottom: 12px;\n"])));
var Container = styled__default['default'].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    width: 100%;\n    flex-direction: column;\n    align-items: center;\n"], ["\n    display: flex;\n    width: 100%;\n    flex-direction: column;\n    align-items: center;\n"])));
var Controls = function (props) {
    var buttonStyles = props.buttonStyles, controls = props.controls, prevButtonText = props.prevButtonText, nextButtonText = props.nextButtonText;
    var _a = useMultiStep(), stepForm = _a.stepForm, updateMultiStep = _a.updateMultiStep;
    var currentPosition = stepForm.currentPosition, maxPosition = stepForm.maxPosition;
    var toggleSteps = function (command) {
        // increment step
        if (command === "increment") {
            if (currentPosition < maxPosition)
                updateMultiStep(__assign(__assign({}, stepForm), { currentPosition: currentPosition + 1 }));
        }
        // decrement step
        else if (command === "decrement") {
            if (currentPosition > 0)
                updateMultiStep(__assign(__assign({}, stepForm), { currentPosition: (stepForm.currentPosition -= 1) }));
        }
    };
    var useButton = function (direction, buttonText) {
        // rendering users custom controls, passing a toggle steps fn that the user must call on for functionality
        var Prev;
        var Next;
        if (controls) {
            Prev = controls.prev;
            Next = controls.next;
        }
        if (Prev && direction === "decrement")
            return React.createElement(Prev, { toggleSteps: function () { return toggleSteps(direction); } });
        if (Next && direction === "increment")
            return React.createElement(Next, { toggleSteps: function () { return toggleSteps(direction); } });
        var errorStyles = {};
        if (stepForm.errors)
            errorStyles = {
                background: " #f73a60"
            };
        // default controls
        var defaultText = direction === "decrement" ? "Previous" : "Next";
        return React.createElement(Button, { disabled: stepForm.errors, style: stepForm.errors ? __assign(__assign({}, buttonStyles), errorStyles) : buttonStyles, onClick: function () { return toggleSteps(direction); } }, buttonText || defaultText);
    };
    return (React.createElement(Container, null,
        currentPosition > 0 && useButton("decrement", prevButtonText),
        currentPosition < maxPosition && useButton("increment", nextButtonText)));
};
var templateObject_1, templateObject_2;

___$insertStyle(".progress-container {\n  border-radius: 2px;\n  margin: 10px auto;\n  padding: 20px;\n  width: 80%;\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n}\n\n.progress-step .step-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n.progress-step .step-wrapper .step-idx {\n  margin: auto 0;\n  border-radius: 80%;\n  background: #fff;\n  border: 1px solid #D3D3D3;\n  width: 20px;\n  height: 20px;\n  padding: 3px;\n  text-align: center;\n  margin-bottom: 12px;\n  color: #D3D3D3;\n}\n.progress-step .step-wrapper .step-idx::before {\n  position: absolute;\n  z-index: -1;\n  top: 22%;\n  left: -45%;\n  content: \"\";\n  width: 90%;\n  height: 1px;\n  background: #D3D3D3;\n}\n.progress-step .step-wrapper .step-idx.first::before {\n  width: 0;\n}\n.progress-step .step-wrapper .step-idx.completed, .progress-step .step-wrapper .step-idx.current {\n  background-color: #5c8ef2;\n  color: #fff;\n  border: 2px solid #fff;\n}\n.progress-step .step-wrapper .step-idx.completed::before, .progress-step .step-wrapper .step-idx.current::before {\n  height: 2px;\n  background: #5c8ef2;\n}\n.progress-step .step-wrapper .step-idx.current.error {\n  background-color: #f73a60;\n}\n.progress-step .step-wrapper .step-idx.completed {\n  font-weight: bold;\n  cursor: pointer;\n}");

var ProgressBar = function () {
    var _a = useMultiStep(), stepForm = _a.stepForm, updateMultiStep = _a.updateMultiStep;
    var stepNames = stepForm.stepNames, maxPosition = stepForm.maxPosition, currentPosition = stepForm.currentPosition, errors = stepForm.errors;
    var goToStep = function (selectedIdx) {
        if (currentPosition > selectedIdx) {
            updateMultiStep(__assign(__assign({}, stepForm), { currentPosition: selectedIdx, completed: false }));
        }
    };
    var getClass = function (idx) {
        var str = "";
        if (idx === 0)
            str += "first";
        if (currentPosition === idx && errors)
            return str + " current error";
        if (currentPosition === idx)
            return str + " current";
        if (currentPosition > idx || currentPosition === maxPosition || stepForm.completed)
            return str + " completed";
        return str + "uncomplete";
    };
    var getContent = function (idx) {
        if (idx < currentPosition || stepForm.completed)
            return React.createElement("span", null, "\u2713");
        return idx + 1;
    };
    return (React.createElement("div", { className: 'progress-container' }, stepNames && stepNames.map(function (name, idx) {
        return (React.createElement("div", { key: idx, className: 'progress-step', style: { width: 100 / (maxPosition + 1) + "%" } },
            React.createElement("div", { className: "step-wrapper" },
                React.createElement("div", { onClick: function () { return goToStep(idx); }, className: 'step-idx ' + getClass(idx) }, getContent(idx)),
                React.createElement("div", { className: 'step-label' }, name))));
    })));
};

___$insertStyle(".steps-carousel {\n  overflow: hidden;\n}\n.steps-carousel .inner {\n  display: flex;\n}\n\n.form-step {\n  min-width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  visibility: hidden;\n}\n.form-step:first-child {\n  width: 50%;\n}\n\n.form-step.active {\n  visibility: visible;\n}");

var FormStep = function (props) {
    var Component = props.component, stepIndex = props.stepIndex;
    var _a = useMultiStep(), stepForm = _a.stepForm, updateMultiStep = _a.updateMultiStep;
    var currentPosition = stepForm.currentPosition, maxPosition = stepForm.maxPosition;
    var checkForEnter = function (e) {
        if (e.key === "Enter") {
            if (currentPosition < maxPosition)
                updateMultiStep(__assign(__assign({}, stepForm), { currentPosition: currentPosition + 1 }));
        }
    };
    return (React.createElement("div", { className: currentPosition === stepIndex ? "form-step active" : "form-step", onKeyDown: checkForEnter },
        React.createElement(Component, null)));
};

var useEffect = React.useEffect, useRef = React.useRef, useState = React.useState;
var FormCarousel = function (props) {
    var steps = props.steps;
    var stepForm = useMultiStep().stepForm;
    var currentPosition = stepForm.currentPosition;
    var stepRef = useRef(null);
    var _a = useState(0), carouselWidth = _a[0], setCarouselWidth = _a[1];
    // carousel
    useEffect(function () {
        if (carouselWidth === 0 && (stepRef === null || stepRef === void 0 ? void 0 : stepRef.current)) {
            setCarouselWidth(stepRef.current.clientWidth);
        }
        if (stepRef === null || stepRef === void 0 ? void 0 : stepRef.current) {
            var n = stepRef.current.children;
            if (n.length < 1)
                return;
            var carouselPosition = carouselWidth * stepForm.currentPosition;
            stepRef.current.style.transform = "translateX(-" + carouselPosition + "px)";
            stepRef.current.style.transition = "transform .6s cubic-bezier(.62,.23,.27,1.44)";
        }
    }, [stepRef, currentPosition, carouselWidth]);
    useEffect(function () {
        function moveCarousel() {
            if (stepRef.current)
                setCarouselWidth(stepRef.current.clientWidth);
        }
        window.addEventListener("resize", moveCarousel);
        return function () {
            window.removeEventListener("resize", moveCarousel);
        };
    }, []);
    return (React.createElement("div", { className: "steps-carousel" },
        React.createElement("div", { ref: stepRef, className: "inner" }, steps &&
            steps.map(function (_a, idx) {
                var Step = _a.component;
                return React.createElement(FormStep, { component: Step, stepIndex: idx, key: idx });
            }))));
};

var useEffect$1 = React.useEffect;
var Container$1 = styled__default['default'].div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n"], ["\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n"])));
var FormContainer = function (_a) {
    var styles = _a.styles, steps = _a.steps, children = _a.children;
    var _b = useMultiStep(), stepForm = _b.stepForm, updateMultiStep = _b.updateMultiStep;
    useEffect$1(function () {
        if (steps) {
            var maxPosition = steps.length - 1;
            updateMultiStep(__assign(__assign({}, stepForm), { maxPosition: maxPosition }));
            steps.forEach(function (step) { return stepForm.addStepName(step.name); });
        }
    }, [steps, updateMultiStep]);
    return (React.createElement(Container$1, { style: styles },
        React.createElement(ProgressBar, null),
        React.createElement(FormCarousel, { steps: steps }),
        !React.Children.count(children) && React.createElement(Controls, null),
        children));
};
var templateObject_1$1;

var MultiStep = function (props) {
    var children = props.children;
    return (React.createElement(React.Fragment, null,
        React.createElement(FormProvider, null,
            React.createElement(FormContainer, { steps: props.steps, children: children }))));
};

exports.Controls = Controls;
exports.default = MultiStep;
exports.useMultiStep = useMultiStep;
//# sourceMappingURL=index.js.map
