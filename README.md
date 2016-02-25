## IWS Form Component

## Getting Started

If the `iws-form-component` is not already located within your `package.json` file and `node_modules` folder:
```
npm install --save github:ideawork/iws-form-component
```

This is the minimum amount of configuration and code needed for the form component to work properly. Note: your id properties located on each field should correspond to the key you are attempting to send to the server.
```jsx
import { 
  Checkbox, 
  Datepicker, 
  Email,
  Fieldset,
  File
  Form, 
  Hidden, 
  Radio, 
  Select, 
  Text,
  Textarea, 
} from 'iws-form-component';

import Page from './../Page/Page.js';

class Home extends React.Component {
  ... PropTypes, DefaultProps, State, Lifecycle & Class Methods
  render() {
    return (
      <div className={ this.props.className }>
        <Form action="post-path">
          <Checkbox id="checkbox" />
          <Datepicker id="datepicker" />
          <Email id="email" />
          <File id="file" />
          <Hidden id="hidden" />
          <Radio id="radio" />
          <Select id="select" />
          <Text id="text" />
          <Textarea id="textarea" />
        </Form>
      </div>
    ); 
  }
}

export default Page(Home);
```


## PropTypes
#### Containers

1. [\<Form /\>](https://github.com/ideawork/iws-form-component/#1-form-)
2. [\<Fieldset /\>](https://github.com/ideawork/iws-form-component/#2-fieldset-)

#### Fields

1. [\<Checkbox /\>](https://github.com/ideawork/iws-form-component/#1-checkbox-)
2. [\<Datepicker /\>](https://github.com/ideawork/iws-form-component/#2-datepicker-)
3. [\<Email /\>](https://github.com/ideawork/iws-form-component/#3-email-)
4. [\<File /\>](https://github.com/ideawork/iws-form-component/#4-file-)
5. [\<Hidden /\>](https://github.com/ideawork/iws-form-component/#5-hidden-)
6. [\<Radio /\>](https://github.com/ideawork/iws-form-component/#6-radio-)
7. [\<Select /\>](https://github.com/ideawork/iws-form-component/#7-select-)
8. [\<Text /\>](https://github.com/ideawork/iws-form-component/#8-text-)
9. [\<Textarea /\>](https://github.com/ideawork/iws-form-component/#9-textarea-)

## Containers

#### 1. \<Form /\>
| Name | Type | Default Value | Description |
| ---- | ---- | ------------- | ----------- |
| action | string* | undefined | This corresponds to the url you will be posting your data to. |
| className | string | '' | Custom className you may want to add for styling purposes. |
| errorMessages | bool | true | By default when validation occurs, error messages will pop up. You can choose to shut these off globally using this property. |
| eventAction | string | 'Completion' | The event action you want to send for form event tracking. |
| eventCategory | string | 'Form' | The event category you want to send for form event tracking. |
| eventLabel | string | '' | The event label you want to send for form event tracking. |
| eventTracking | bool | false | Turns on/off form event tracking. |
| eventValue | bool \| number \| string | 0 | The event value you want to send for form event tracking. |
| id | string | 'form' | Custom id you may want to add to the form component for styling purposes. |
| onFail | func | (error) => {} | Callback for when the form fails to post on submit. |
| onSuccess | func | () => {} | Callback for when the form successfully posts on submit. |
| placeholders | bool | false | Toggles between labels and placeholders. Labels are turned on by default. |
| submitText | string | 'Submit' | Text to be displayed on the submit button. |
| successMessage | string | 'Thank You for Your Submission!' | Text to be displayed within the success message. You can also pass in html: '\<div\>Thanks!\</div\>'. |
| successModal | bool | false | Option to display success message inside of a modal. |

#### 2. \<Fieldset /\>
| Name | Type | Default Value | Description |
| ---- | ---- | ------------- | ----------- |
| className | string | '' | Custom className you may want to add for styling purposes. |
| title | string | '' | Optional title to be displayed. You can also pass in html: '\<h2\>Title\</h2\>'. |

## Fields

#### 1. \<Checkbox /\>
| Name | Type | Default Value | Description |
| ---- | ---- | ------------- | ----------- |
| className | string | '' | Custom className you may want to add for styling purposes. |
| id | string* | undefined | Property that determines the key that will be sent to the server. Also, if label is not provided, then a label will be titleized according to this id. |
| label | bool \| string | true |           |
| onChange | func | ({ value }) => {} |     |
| value | bool | false |                    |

#### 2. \<Datepicker /\>
| Name | Type | Default Value | Description |
| ---- | ---- | ------------- | ----------- |
| className | string | '' | Custom className you may want to add for styling purposes. |
| dateFormat | string | 'MM/DD/YYYY' |      |
| errorMessage | bool \| string | true |    |
| id | string* | undefined | Property that determines the key that will be sent to the server. Also, if label is not provided, then a label will be titleized according to this id. |
| label | bool \| string | true |           |
| maxDate | string | undefined |            |
| minDate | string | undefined |            |
| onChange | func | ({ value }) => {} |     |
| validate | bool \| func | false |         |
| value | string | '' |                     |
| weekStart | string | '0' |                |


#### 3. \<Email /\>
| Name | Type | Default Value | Description |
| ---- | ---- | ------------- | ----------- |
| className | string | '' | Custom className you may want to add for styling purposes. |
| errorMessage | bool \| string | true |    |
| id | string* | undefined | Property that determines the key that will be sent to the server. Also, if label is not provided, then a label will be titleized according to this id. |
| label | bool \| string | true |           |
| onChange | func | ({ value }) => {} |     |
| validate | bool \| func | false |         |
| value | string | '' |                     |

#### 4. \<File /\>
| Name | Type | Default Value | Description |
| ---- | ---- | ------------- | ----------- |
| accepts | arrayOf(string) | ['doc', 'docx', 'gif', 'jpg', 'jpeg', 'pdf', 'png'] | |
| className | string | '' | Custom className you may want to add for styling purposes. |
| id | string* | undefined | Property that determines the key that will be sent to the server. Also, if label is not provided, then a label will be titleized according to this id. |
| label | bool \| string | true |           |
| maxSize | number | 2 |                    |
| onChange | func | ({ value }) => {} |     |
| validate | bool | false |                 |
| value | object | {} |                     |

#### 5. \<Hidden /\>
| Name | Type | Default Value | Description |
| ---- | ---- | ------------- | ----------- |
| className | string | '' | Custom className you may want to add for styling purposes. |
| id | string* | undefined | Property that determines the key that will be sent to the server. Also, if label is not provided, then a label will be titleized according to this id. |
| value | string | '' |                     |

#### 6. \<Radio /\>
| Name | Type | Default Value | Description |
| ---- | ---- | ------------- | ----------- |
| className | string | '' | Custom className you may want to add for styling purposes. |
| id | string* | undefined | Property that determines the key that will be sent to the server. Also, if label is not provided, then a label will be titleized according to this id. |
| label | bool \| string | true |           |
| onChange | func | ({ value }) => {} |     |
| options | arrayOf(shape(label: string, value: string) \| string) | undefined | |
| value | string | '' |                     |

#### 7. \<Select /\>
| Name | Type | Default Value | Description |
| ---- | ---- | ------------- | ----------- |
| className | string | '' | Custom className you may want to add for styling purposes. |
| errorMessage | bool \| string | true |    |
| id | string* | undefined | Property that determines the key that will be sent to the server. Also, if label is not provided, then a label will be titleized according to this id. |
| label | bool \| string | true |           |
| onChange | func | ({ value }) => {} |     |
| options | arrayOf(shape(label: string, value: string) \| string) | undefined | |
| value | string | '' |                     |

#### 8. \<Text /\>
| Name | Type | Default Value | Description |
| ---- | ---- | ------------- | ----------- |
| className | string | '' | Custom className you may want to add for styling purposes. |
| errorMessage | bool \| string | true |    |
| id | string* | undefined | Property that determines the key that will be sent to the server. Also, if label is not provided, then a label will be titleized according to this id. |
| label | bool \| string | true |           |
| onChange | func | ({ value }) => {} |     |
| validate | bool \| func | false |         |
| value | string | '' |                     |

#### 9. \<Textarea /\>
| Name | Type | Default Value | Description |
| ---- | ---- | ------------- | ----------- |
| className | string | '' | Custom className you may want to add for styling purposes. |
| errorMessage | bool \| string | true |    |
| id | string* | undefined | Property that determines the key that will be sent to the server. Also, if label is not provided, then a label will be titleized according to this id. |
| label | bool \| string | true |           |
| onChange | func | ({ value }) => {} |     |
| validate | bool \| func | false |         |
| value | string | '' |                     |
