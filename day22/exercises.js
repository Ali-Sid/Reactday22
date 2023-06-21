// 30-days-of-react: Forms using hooks

// Exercises: Level 1

// 1. What is the importance of form?
// Form are used to collect information from the user, it allows a user to enter data that is sent to a server for processing. It is crucial tool for businesses to obtain the information they need from their potential customers.

// 2. How many input types do you know?
// There are many input types, like: checkbox, radio, text, range, number, email, password, color, tel, image, file, url, etc..

// 3. Mention at least four attributes of an input element
// id, name, type, placeholder, value, onChange

// 4. What is the importance of htmlFor?
// htmlFor is like 'for' in HTML used in label tag. The for attribute specifies which form element a label is bound to.

// 5. Write an input type which is not given in the example if there is?
// tel, image, range, search. These are already mentioned in the examples but I'm mentioning because these is rarely used.

// 6. What is a controlled input?
// A controlled input in React refers to an input form element whose value is controlled by React state.It means that the value of the input field is stored in the component's state, and any changes to the input value are reflected in the state. The state is then used to update the value of the input field, creating a two-way binding between the input field and the state.

// 7. What do you need to write a controlled input?
// To create a controlled input, we need a state to hold the input value, an event handler to update the state. Finally, we need to bind the input value and the event handler to the input field. This is done by setting the value attribute of the input field to the state variable and the onChange attribute to the event handler.

// 8. What event type do you use to listen changes on an input field?
// onInput and onChange are the type of events that is used to listen changes on an input field.

// 9. What is the value of a checked checkbox?
// The value of a checked checkbox is a string representing the value of the checkbox. This value is not displayed on the client-side, but on the server, this is the value given to the data submitted with the checkbox’s name. When a form is submitted, only checkboxes which are currently checked are submitted to the server, and the reported value is the value of the value attribute.
// For example, if you have a checkbox with a name of subscribe and a value of newsletter, when the form is submitted, the data name/value pair will be subscribe=newsletter. If the value attribute was omitted, the default value for the checkbox is on, so the submitted data in that case would be subscribe=on.

// 10. When do you use onChange, onBlur, onSubmit?
// We use onChange when the text in a select, text, or textarea form item is changed by the user.
// When the item loses focus by the user, the onBlur event triggers.
// the onSubmit, validates the form at the end, as the user presses the submit button.

// 11. What is the purpose of writing e.preventDefault() inside the submit handler method?
// The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
// For example, this can be useful when: Clicking on a "Submit" button, prevent it from submitting a form.

// 12. How do you bind data in React? The first input field example is data binding in React.
// To bind data in React, you can use controlled components. Controlled components are form elements whose values are controlled by React state. This allows you to sync the form input values with the state and update the state when the form values change.

// 13. What is validation?
// It is the process of ensuring that the data entered in a form meets certain criteria or requirements. It is used to verify the correctness and integrity of user input before it is submitted to the server or used in further processing.

// 14. What is the event type you use to listen when an input changes?
// onChange event type is used to when an input changes.

// 15. What are event types do you use to validate an input?
// onChange, onBlur and onSubmit are the event types I use to validate an input.