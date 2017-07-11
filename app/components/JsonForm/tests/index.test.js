// import React from 'react';
// import { shallow } from 'enzyme';
// import Form from 'react-jsonschema-form';
// import JsonForm from '../index';
//
// const schema = {
//   title: 'Todo',
//   type: 'object',
//   required: ['title'],
//   properties: {
//     title: { type: 'string', title: 'Title', default: 'A new task' },
//     done: { type: 'boolean', title: 'Done?', default: false },
//   },
// };
//
// const form = () => shallow(
//   <div>
//     <Form
//       schema={schema}
//     />
//   </div>
// );
//
// const renderComponent = (props = {}) => shallow(
//   <JsonForm {...props} />
// );
//
// it('should render the form', () => {
//   const renderedComponent = renderComponent();
//   expect(renderedComponent).toEqual(form);
// });
