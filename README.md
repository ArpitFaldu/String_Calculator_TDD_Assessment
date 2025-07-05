# 📟 String Calculator – TDD with Jest

This project demonstrates a **String Calculator** built using **Test-Driven Development (TDD)** in **JavaScript**, tested using **Jest**.

---

## 🧠 What is TDD?

**Test-Driven Development** is a software development approach where tests are written **before** the implementation code. It follows this cycle:

1. Start by writing a small, failing test that defines the expected behavior.
2. Implement the minimal code required to make the test pass.
3. Refactor the code while ensuring all tests continue to pass.
4. Repeat this cycle to build the complete functionality step-by-step.
   

This leads to **modular**, **well-tested**, and **clean code**.

---

## ⚙️ Tech Stack

- **Language**: JavaScript (Node.js)
- **Test Framework**: Jest

---

## ✅ Implemented Test Cases

| Test Description                                                                 | Input Example                      | Expected Output or Behavior                            | Status |
|----------------------------------------------------------------------------------|------------------------------------|---------------------------------------------------------|--------|
| Return 0 for empty string                                                       | `""`                               | `0`                                                     | ✅     |
| Return the number itself for single number input                                | `"1"`                              | `1`                                                     | ✅     |
| Return sum of two or more comma-separated numbers                               | `"1,2"`<br>`"1,2,3,4,5"`            | `3` and `15`                                            | ✅     |
| Return sum for input using both newline and comma as delimiters                 | `"1\n2,3"`                          | `6`                                                     | ✅     |
| Handle custom single-character delimiter after `//`                             | `"//;\n1;2"`                        | `3`                                                     | ✅     |
| Handle custom delimiter of length > 1                                           | `"//[***]\n1***2***3"`             | `6`                                                     | ✅     |
| Support multiple custom delimiters                                              | `"//[*][%]\n1*2%3"`                | `6`                                                     | ✅     |
| Support multiple custom delimiters of any length                                | `"//[**][%%]\n1**2%%3"`            | `6`                                                     | ✅     |
| Throw error when negative numbers are passed, listing all negatives             | `"1,-2,3,-4"`                      | Error: `negative numbers not allowed -2,-4`             | ✅     |
| Return number of times `add()` was called                                       | 3 function calls                   | `getCalledCount()` returns `3`                          | ✅     |
| Ignore numbers greater than 1000 when summing                                   | `"2,1001,3"`                        | `5`                                                     | ✅     |

---

## ✅ Test Results
# From:-
![Screenshot 2025-07-05 150021](https://github.com/user-attachments/assets/7557deed-e738-4e00-b679-d3152d816553)

# To:-
![Screenshot 2025-07-05 170033](https://github.com/user-attachments/assets/de3445f2-8608-4049-b46b-2a20d26ab933)


## 🚀 Getting Started

### 📂 Clone the Repository
https://github.com/ArpitFaldu/String_Calculator_TDD_Assessment.git

# Install dependencies
npm install

# Run tests
npm run test


## 📚 References

- https://www.freecodecamp.org/news/an-introduction-to-test-driven-development-c4de6dce5c/
