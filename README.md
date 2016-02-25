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

### 2. \<Datepicker /\>
| Name | Type | Default Value | Description |
| ---- | ---- | ------------- | ----------- |
| className | string | '' |                 |
| dateFormat | string | 'MM/DD/YYYY' |      |
| errorMessage | bool \| string | true |    |
| id | string* | undefined |                |
| label | bool \| string | true |           |
| maxDate | string | undefined |            |
| minDate | string | undefined |            |
| onChange | func | ({ value }) => {} |     |
| validate | bool \| func | false |         |
| value | string | '' |                     |
| weekStart | string | '0' |                |


### 3. \<Email /\>
| Name | Type | Default Value | Description |
| ---- | ---- | ------------- | ----------- |
| className | string | '' |                 |
| errorMessage | bool \| string | true |    |
| id | string* | undefined |                |
| label | bool \| string | true |           |
| onChange | func | ({ value }) => {} |     |
| validate | bool \| func | false |         |
| value | string | '' |                     |

### 4. \<File /\>
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

### 5. \<Hidden /\>
| Name | Type | Default Value | Description |
| ---- | ---- | ------------- | ----------- |
| className | string | '' |                 |
| id | string* | undefined |                |
| value | string | '' |                     |

### 6. \<Radio /\>
| Name | Type | Default Value | Description |
| ---- | ---- | ------------- | ----------- |
| className | string | '' |                 |
| id | string* | undefined |                |
| label | bool \| string | true |           |
| onChange | func | ({ value }) => {} |     |
| options | arrayOf(shape(label: string, value: string) \| string) | undefined | |
| value | string | '' |                     |

### 7. \<Select /\>
| Name | Type | Default Value | Description |
| ---- | ---- | ------------- | ----------- |
| className | string | '' |                 |
| errorMessage | bool \| string | true |    |
| id | string* | undefined |                |
| label | bool \| string | true |           |
| onChange | func | ({ value }) => {} |     |
| options | arrayOf(shape(label: string, value: string) \| string) | undefined | |
| value | string | '' |                     |

### 8. \<Text /\>
| Name | Type | Default Value | Description |
| ---- | ---- | ------------- | ----------- |
| className | string | '' |                 |
| errorMessage | bool \| string | true |    |
| id | string* | undefined |                |
| label | bool \| string | true |           |
| onChange | func | ({ value }) => {} |     |
| validate | bool \| func | false |         |
| value | string | '' |                     |

### 9. \<Textarea /\>
| Name | Type | Default Value | Description |
| ---- | ---- | ------------- | ----------- |
| className | string | '' |                 |
| errorMessage | bool \| string | true |    |
| id | string* | undefined |                |
| label | bool \| string | true |           |
| onChange | func | ({ value }) => {} |     |
| validate | bool \| func | false |         |
| value | string | '' |                     |
