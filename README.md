# _Beep Boop Project_

#### _This webpage takes a name and a number from a user and returns a range of numbers from 0 to the input number, 3/30/18_

#### By _**Azamat Bekmuratov**_

## Description

This webpage returns a range of numbers from 0 to the input number with the following exceptions:
* Program replaces 0 with "Beep!":
  * Example Input: 0
  * Example Output: ['Beep!'']
* Program replaces 1 with "Boop!":
  * Example Input: 1
  * Example Output: ['Beep!', 'Boop!']
* Program replaces 3 with "I'm sorry,[inputName]. I'm afraid I can't do that.":
  * Example Input: 3
  * Example Output: ['Beep!', 'Boop!', 2, 'I'm sorry,[inputName]. I'm afraid I can't do that']
* Numbers in the range that contain 0 are replaced (all digits) with "Beep!":
  * Example Input: 20
  * Example Output: [..., 'Beep!', ...]
* Numbers in the range that contain 1 are replaced (all digits) with "Boop!":
  * Example Input: 14
  * Example Output: [..., 'Boop!', ...]
* Numbers in the range divisible by 3 are replaced with "I'm sorry,[inputName]. I'm afraid I can't do that":
  * Example Input: 33
  * Example Output: [..., 'I'm sorry,[inputName]...', ...]
* If number in the range contains 0 and 1, then number will be replaced with "Boop!":
  * Example Input: 10
  * Example Output: [..., 'Boop!', ...]
* If number in the range contains 1 and divisible by 3, then number will be replaced with "I'm sorry,[inputName]. I'm afraid I can't do that":
  * Example Input: 12
  * Example Output: [..., 'I'm sorry,[inputName]...', ...]
* If number in the range contains 0 and divisible by 3, then number will be replaced with "I'm sorry,[inputName]. I'm afraid I can't do that":
  * Example Input: 30
  * Example Output: [..., 'I'm sorry,[inputName]...', ...]
* If number in the range contains 0, 1 and divisible by 3, then number will be replaced with "I'm sorry,[inputName]. I'm afraid I can't do that":
  * Example Input: 120
  * Example Output: [..., 'I'm sorry,[inputName]...', ...]

## Setup/Installation Requirements

* _Clone the repository_
* _Open index.html file on a browser_

## Known Bugs

_No known bugs as of today_

## Support and contact details

_contact Azamat Bekmuratov with any suggestions or feedback_

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _Javascript_
* _JQuery_

## License

##### Copyright (c) 2018 **_Azamat Bekmuratov_**
##### This software is licensed under the GPL License
