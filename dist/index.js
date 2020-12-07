

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

var _a = createCtx({
    inputFields: {},
    currentPosition: 0,
    maxPosition: 0,
    allowNext: true,
    allowSubmission: true,
    errors: false,
    complete: false,
    onNext: function (continueWithoutFieldFufillment) {
        if (continueWithoutFieldFufillment === void 0) { continueWithoutFieldFufillment = true; }
        this.allowNext = continueWithoutFieldFufillment;
    },
    onComplete: function () {
        this.complete = true;
        return this.inputFields;
    },
    updateFormValues: function (fieldName, fieldValue) {
        var _a;
        this.inputFields = __assign(__assign({}, this.inputFields), (_a = {}, _a[fieldName] = fieldValue, _a));
    },
    stepNames: [],
    addStepName: function (stepName) {
        this.stepNames.push(stepName);
    },
}), formCtx = _a[0], FormProvider = _a[1];

var useMultiStep = function () {
    var _a = React.useContext(formCtx), state = _a.state, update = _a.update;
    return { stepForm: state, updateMultiStep: update };
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
        // default controls
        var defaultText = direction === "decrement" ? "Previous" : "Next";
        return React.createElement(Button, { style: buttonStyles, onClick: function () { return toggleSteps(direction); } }, buttonText || defaultText);
    };
    return (React.createElement(Container, null,
        currentPosition > 0 && useButton("decrement", prevButtonText),
        currentPosition < maxPosition && useButton("increment", nextButtonText)));
};
var templateObject_1, templateObject_2;

___$insertStyle(".wrapper {\n  height: 120px;\n}\n\n.progress-bar-container {\n  display: flex;\n  width: 100%;\n  justify-content: space-around;\n  align-items: flex-end;\n  padding-bottom: 20px;\n}\n.progress-bar-container .progress-step {\n  text-align: center;\n  width: 25%;\n  position: relative;\n}\n.progress-bar-container .progress-step .label {\n  color: #adadad;\n  position: absolute;\n  left: 30%;\n  width: 46px;\n  text-align: center;\n  top: 0px;\n}\n.progress-bar-container .progress-step .index {\n  height: 30px;\n  width: 30px;\n  width: 100%;\n  display: inline-block;\n  transition: background-color 500ms;\n  line-height: 20px;\n  z-index: 1;\n  border-radius: 50%;\n  position: absolute;\n  left: 30%;\n  top: 40px;\n}\n.progress-bar-container .progress-step .index .content {\n  border-radius: 50%;\n  width: 26px;\n  height: 26px;\n  padding: 8px;\n  border: 2px solid #6cf05b;\n  color: #6cf05b;\n  text-align: center;\n  font: 24px Arial, sans-serif;\n  background: linear-gradient(to left, #fff 50%, #a1fc95 50%);\n  background-position: right bottom;\n  background-size: 200% 100%;\n}\n.progress-bar-container .progress-step .index.completed .content {\n  color: #fff;\n  background-position: left bottom;\n  transition: background 0.3s ease-in;\n}\n.progress-bar-container .progress-step .index.current .content {\n  background: #a1fc95;\n  color: #fff;\n}\n.progress-bar-container .progress-step .index.completed.final:after {\n  width: 0;\n  height: 0;\n}\n.progress-bar-container .progress-step .index.completed:after {\n  content: \"\";\n  position: absolute;\n  left: 2%;\n  bottom: 5px;\n  height: 3px;\n  width: 100%;\n  z-index: -1;\n  background-color: #a1fc95;\n  right: 0;\n  transition: all 0.3s ease-in;\n  transition-delay: 0.2s;\n}\n.progress-bar-container .progress-step .index:after {\n  content: \"\";\n  width: 0;\n}\n.progress-bar-container .progress-step .index + p {\n  font-weight: bold;\n}\n.progress-bar-container .progress-step .index.current + p {\n  margin: 0;\n  padding: 0;\n  margin-top: 10px;\n  font-size: 18px;\n  transition: font-size 0.25s ease;\n  transition-delay: 0.5s;\n}\n.progress-bar-container .progress-step .index.uncomplete + p:only-of-type {\n  color: #adadad;\n}");

var ProgressBar = function () {
    var stepForm = useMultiStep().stepForm;
    var maxPosition = stepForm.maxPosition, complete = stepForm.complete, currentPosition = stepForm.currentPosition, stepNames = stepForm.stepNames;
    var getClass = function (idx) {
        if (idx === maxPosition && complete)
            return "index completed final";
        if (currentPosition === idx)
            return "index current";
        if (currentPosition > idx || currentPosition === maxPosition)
            return "index completed";
        return "index uncomplete";
    };
    var getContent = function (idx) {
        if (currentPosition > idx)
            return "✔";
        if (complete && currentPosition === maxPosition)
            return "✔";
        return idx + 1;
    };
    return (React.createElement("div", { className: "wrapper" },
        React.createElement("div", { className: "progress-bar-container" }, stepNames &&
            stepNames.map(function (step, idx) {
                return (React.createElement("div", { className: "progress-step", key: idx },
                    React.createElement("div", { className: getClass(idx) },
                        React.createElement("div", { className: "content" }, getContent(idx))),
                    React.createElement("p", { className: "label" }, step)));
            }))));
};

___$insertStyle(".steps-carousel {\n  overflow: hidden;\n}\n.steps-carousel .inner {\n  display: flex;\n}\n\n.form-step {\n  min-width: 100%;\n  height: 200px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.form-step:first-child {\n  width: 50%;\n}");

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

var useEffect = React.useEffect, useRef = React.useRef;
var FormCarousel = function (props) {
    var steps = props.steps;
    var stepForm = useMultiStep().stepForm;
    var currentPosition = stepForm.currentPosition;
    var stepRef = useRef(null);
    // carousel
    useEffect(function () {
        if (stepRef === null || stepRef === void 0 ? void 0 : stepRef.current) {
            var n = stepRef.current.children;
            if (n.length < 1)
                return;
            var formWidth = n[0].clientWidth;
            var amountToMove = formWidth * currentPosition;
            stepRef.current.style.transform = "translateX(-" + amountToMove + "px)";
            stepRef.current.style.transition = "transform .6s cubic-bezier(.62,.23,.27,1.44)";
        }
    }, [stepRef, currentPosition]);
    return (React.createElement("div", { className: "steps-carousel" },
        React.createElement("div", { ref: stepRef, className: "inner" }, steps &&
            steps.map(function (_a, idx) {
                var Step = _a.component;
                return React.createElement(FormStep, { component: Step, stepIndex: idx, key: idx });
            }))));
};

var useEffect$1 = React.useEffect;
var Container$1 = styled__default['default'].div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n    width: 100%';\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    border:2px solid red;\n"], ["\n    width: 100%';\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    border:2px solid red;\n"])));
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
