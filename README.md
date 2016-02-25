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

### 2. \<Fieldset /\>
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


### 2. \<Email /\>
| Name | Type | Default Value | Description |
| ---- | ---- | ------------- | ----------- |
| className | string | '' |                 |
| errorMessage | bool \| string | true |    |
| id | string* | undefined |                |
| label | bool \| string | true |           |
| onChange | func | ({ value }) => {} |     |
| validate | bool \| func | false |         |
| value | bool \| number \| string | '' |   |

### 3. \<File /\>
| Name | Type | Default Value | Description |
| ---- | ---- | ------------- | ----------- |
| accepts | arrayOf(string) | ['doc', 'docx', 'gif', 'jpg', 'jpeg', 'pdf', 'png'] | |
| className | string | '' |                 |
| id | string* | undefined |                |
| label | bool \| string | true |           |
| maxSize | number | 2 |                    |
| onChange | func | ({ value }) => {} |     |
| validate | bool | false |                 |
| value | object | {} |                     |

### 4. \<Hidden /\>
| Name | Type | Default Value | Description |
| ---- | ---- | ------------- | ----------- |
| className | string | '' |                 |
| id | string* | undefined |                |
| value | bool \| number \| string | '' |   |
