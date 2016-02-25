# Containers

### 1. \<Form /\>
| Name | Type | Default Value | Description |
| ---- | ---- | ------------- | ----------- |
| action | string* | undefined |            |
| className | string | '' |                 |
| errorMessages | bool | true |             |
| eventAction | string | 'Completion' |     |
| eventCategory | string | 'Form' |         |
| eventLabel | string | '' |                |
| eventTracking | bool | false |            |
| eventValue | bool \| number \| string | 0 | |
| id | string | 'form' |                    |
| onFail | func | (error) => {} |           |
| onSuccess | func | () => {} |             |
| placeholders | bool | false |             |
| submitText | string | 'Submit' |          |
| successMessage | string | 'Thank You for Your Submission!' | |
| successModal | bool | false |             |

### 2. Fieldset
| Name | Type | Default Value | Description |
| ---- | ---- | ------------- | ----------- |
| className | string | '' |                 |
| title | string | '' |                     |

# Fields
### 1. \<Checkbox /\>
| Name | Type | Default Value | Description |
| ---- | ---- | ------------- | ----------- |
| className | string | '' |                 |
| id | string* | undefined |                |
| label | bool \| string | true |           |
| onChange | func | ({ value }) => {} |     |
| value | bool | false |                    |
