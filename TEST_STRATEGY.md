# **Test Strategy for Employee Pulse Survey Application**

## **1. Introduction**
The **Employee Pulse Survey Application** enables employees to submit surveys and allows admins to manage responses. This test strategy ensures that the application meets **functional, security, and performance** requirements.

---

## **2. Test Scope**

### ✅ **Features to be Tested**
- **Authentication:** Register/Login for employees and admins  
- **Survey Submission:** Employees can submit and view surveys  
- **Admin Dashboard:** Admins can view and export survey data  
- **Role-based Access:** Employees can't access admin features  
- **API Integration:** Backend correctly processes requests  
- **Data Persistence:** Responses are stored in MongoDB  

### ❌ **Features NOT in Scope**
- UI Styling improvements  
- Performance testing beyond basic response times  

---

## **3. Testing Approach**

### **A. Test Types**

#### **1. Unit Testing**
- Ensures individual functions work correctly  
- **Example:** User authentication, survey submission logic  

#### **2. Integration Testing**
- Tests API interactions between frontend & backend  
- **Example:** Submitting a survey and retrieving past responses  

#### **3. End-to-End (E2E) Testing**
- Tests user flows from login to survey submission  
- **Example:** An employee logs in, submits a survey, and views responses  

#### **4. Security Testing**
- JWT token validation & unauthorized access checks  

#### **5. Performance Testing**
- Ensures API response times are acceptable  

---

## **4. Test Cases**

### **A. Authentication**
| ID   | Test Case | Steps | Expected Result |
|------|----------|-------|----------------|
| TC1  | User Registration | Register with valid details | User is created |
| TC2  | Duplicate Email Registration | Register with existing email | Error message shown |
| TC3  | User Login | Login with valid credentials | Token is received |
| TC4  | Invalid Login | Login with incorrect credentials | Error message shown |
| TC5  | Unauthorized Access | Access protected API without token | Request denied |

### **B. Employee Survey**
| ID   | Test Case | Steps | Expected Result |
|------|----------|-------|----------------|
| TC6  | Submit Survey | Fill and submit survey | Survey saved successfully |
| TC7  | View Past Submissions | Open dashboard after submitting | Past responses are shown |

### **C. Admin Dashboard**
| ID   | Test Case | Steps | Expected Result |
|------|----------|-------|----------------|
| TC8  | Admin View Responses | Admin logs in and checks dashboard | All surveys are visible |
| TC9  | Unauthorized Admin Access | Employee tries to open admin dashboard | Access denied |
| TC10 | Data Export | Admin clicks export button | Data downloaded in CSV/JSON |

---

### 🚀 **This strategy ensures high quality & reliability for the Employee Pulse Survey App.**  
Let me know if you need any modifications! 😊  
