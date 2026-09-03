Below are the additional notes that I have forgotten to mention in the #resume.md file.

## Events:
### Year End Events:
- I have also planned and conducted year end events for my entire onshore and offshore team from the day I joined cognizant till 2024. 
- I have created year end deck videos to show case our Delivery Leads on the key changes, turn overs, achievements and innovation ideas and success, KPI's in a presentable PPT and the year end deck video for show casing into the year end Delivery Leads meeting.

## Innovation Tools:
### XML Test Data Tool:
- I have created XML test data creation tool using Serenity Cucumber Java framework when I was in the Progrmmer Analyst role for the entire team to create the test data instead of doing it manually. It reduces the test data creation time from 30 minutes to 5 minutes.
- Later I have moved that tool to the ExpressJs based framework. I have done this during the same role as Programmer Analyst.
- Then I have upgraded that tool dynamically fetch the latest available XML schema from the developer repo from Azure DevOps and dynamically create the valid XML test data file based on the latest schema rules. This reduced the maintainence work to update the tool when the developer changes or introduces the latest XML schema. I have done this when I was in the Associate role.

### Mock Server Tool:
- I have done this when I was in Associate role. I have created a mock server tool which is a clone of the "Fiddler" mock tool. I have enabled the feature to dynamicly mock the response for all types of APIs based on the static response mock or programatic mock response developed at runtime. This tool monitors the configured API calls made in the system through apps like Chrome, Postman, Edge or other applications and send the mock response. More than one API can be mocked at the same time. Entire response object can be mocked say for example, reponse header, body, cookie. The API URL mock can be entered as static or can be used as pattern matching format.

### AI Mesh Tool:
- this is an AI usage idea. AI iteself creates a self notes like what worked and what not went well and based on that it updates its feedback loop on how to process the request, steps to followed, and the way the result is presented. It is kind of creating an md file of knowledge and feedback look for self evalution for the different AI agents to update itself and improve.

### JSON File Creation Tool:
- Similar to the XML dat creation tool, we have one more data creation file in the JSON format. Similar to the XML data creation tool I have also created one more tool called JSON file creation tool. I have created it during the Programmer Analyst role.

### Custom Agent using md files:
- I have created md file like agent skills, agent.md files and created hooks based on the project requirement to create a simple custom AI agent to work on the BDD Test Automation. This produced a better result on the AI generated BDD Test Automation Code. This agent is capable of creating new Test Automation code, Modifying or Debugging the Test Automation code. This reduced the new modifications to be made manually by the QA on the AI generated code.

### AI Test Case Creation Agent:
- I have created a Test Case creation agent using GitHub Copilot SDK. This agent uses custom MCP to connect to the Azure DevOps and GitHub Project board to fetch the relavent User Story requirements, Description, Acceptance Criteria. It also fetches the previous related user story details using search patterns like keyword matching and fetching those details and optimisingly sending it to the LLM to conserve token consumption. And finally creating a valid Test Cases for the given User Story for the QA team to work on.
- This drastically reduced the manuall effort of creating the Test Case from scratch.
- The Test Case agent was created with necessary guardrails, human in the loop and human approvals, and necessary review to users at different stage to proceed and be trasparent, responsible and secured.
- A security analyst ratio factor is kept to analyse whether the review is needed to be checked with the user. The ratio factor is based on multiple things like security level, unclearness and etc.
- I have done this when I was in the Associate role.

## Extra notes:
_if needed add this_:
- I have used the GitHub Copilot to read through the Application code repo understand the logic, create the required mock response to mock the API response. This also helps in early identifying on bugs and identify the edge cases and loop holes.

## Automation Framework Migration:
### Serenity to Cypress framework Migration:
- I have planned and led the Serenity Java based Cucumber BDD digital portal Test Automation scripts to Cypress Javascript based Cucumber BDD framework. I have done the POC and created the Cypress Javascript Cucumber BDD framework from scratch. And lead the 4 member team to migrated the 1400 automation scripts from Serenity Java based Cucumber BDD framework Digital portal Test Automation scripts to Cypress Javascript Cucucmber BDD framework. See the #resume.md file on when I have done this. If it is not there then ask me.

### Serenity to WebDriverIO framework Migration:
- I have planned and led the Serenity Java based Cucumber BDD Salesforce Test Automation script to WebDriverIO Javascript Cucumber BDD framework. I have done the POC and created the WebDriverIO Javascript Cucumber BDD framework from scratch.
And lead the 15 members team to migrate the Serenity Cucumber BDD framework Salesforce Application Test Automation scripts to WebDriverIO Javascript Cucumber BDD framework. See the #resume.md file on when I have done this, If it is not there then ask me.

### Application Lead:
- I have lead the AWS Digital Customer based Web portal QA team of 8 members. I have participated in the Agile ceremonies, tested the web portal from Customer and Business perspective preserving the customer experience and the Business requirements.
- I have implemented the InSprint Test Automation to create and manage the required Test Automation scripts for Web portal.
- We have a release of weekly twice. So we automated and maintained the automation coverage and pass percentage of 80% of the web portal test. To test the application as early as possible and report the issues asap. And to maintain bug free and maintain zero production bugs.
- I have created a scheduled pipeline running the smoke test on daily nigtly basis and sending the test result reports by hosting the report in GitHub Pages and sending the link to the user via mail with test result percentage and status.
- I have also created a auto trigger pipeline which gets triggered when the developer deployed changes to the UAT/ Staging environment. All the regression test cases will get tested and sending the test result reports by hosting the report in GitHub Pages and sending the link to the user via mail with test result percentage and status.
- I have mainted the pipeline at 80% coverage and pass percentage by fixing the test flakyness, resolving test data issues and update the fixes based on the new changes being deployed. 
- I have conducted adequate audits to verify if the QA process is followed by the QAs for the application I lead.
- Collected Daily Status Report (DSR) on team progress. And supported the team to achieve the target deleviry on time.
- I have sent Monthly Status Reports (MSR), Key Automation Metrics, Key Deliverable Highlights to my Manager and required stakeholders.
- I have sent the Bug Triage mails and messages to the developers and other stakeholders on timely basis on highlightling the bugs found, fixed, pending to the developers and other stakeholders on time.
- I have conducted quality metrics checks across the application and made sure the Software Development Lifecyle (SDLC) follows client agreed quality measures, making sure Quality as a common goal across the squads and followed.
- I have created necessary Synthetic test in DataDog in production to continuously test and monitor the basis checks in prod for monitoring purpose.
- I have also monitored the production DataDog alters and metrics to verify the errors, issues, thresholds value pikes in production.
- I have also created a production based real time multi device test using DataDog and BrowserStack. I have created a script that fetches the top 10 used production devices and browser details in real time and use that device and browser details to match the available devices in BrowserStack and automate the test in the matching devices and browsers in BrowserStack.
- Conducted learning practice on each sprint documented and improved the quality perspective based on agile incremental framework.

## Other changes lead:
Apart from the above mentioned AWS Digital web application, I have led two main important migrations.
- First Migrating the complete user, bills, payments, meter and industry details from the SAP systems to Salesforce and backend custom energy CRM connected with UK energy industry. I have done this when I was in Programmer Analyst role.
- Second Migrating the complete user authentication service from Spring Boot and AWS cognito service to Microsoft Entra for End Customer using Digital Web application and Mobile app. I have done this when I was in Associate role.


## During Intership:
- I have completed ASP.NET with C# development certification with ISO certification from HP. Also created a admin CRM for Solar retail company using ASP.NET with C#.

## Note:
- Programmer Analyst or Progammer Analyst means the role is Quality Analyst.
- Associate means the role is Senior Quality Analyst.
- Programmer means the role is Junior Quality Analyst.
- Junior Quality Analyst, Quality Analyst, Senior Quality Analyst are the roles given in my experience letter, so it is the roles visible to outside world. So I suggest to use that roles.