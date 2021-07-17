# Meet App

# Features
As a user, I should be able to filter events by city, so that I can see the list of events that take place in that city.

As a user, I should be able to show and hide an event's details, so that I can learn more about an event when I need more detailed information.

As a user, I should be able to specify the number of events that are shown, so that I can tailor the way I scroll through the events to my current device or my needs.

As a user, I should be able to use the app when being offline, so that I do not have to rely on having a stable internet connection and am therefore able to use the app in any situation.

As a user, I should be able to see event data visualized in a dashboard, so that I can get an overview over certain characteristics of the events quickly and comfortably.

# User Stories
As a user, I should be able to show/hide an event's details,
So that I can learn more about an event when I need more detailed information


As a user, I should be able to specify the number of events that are shown,
So that I can tailor the way I scroll through the events to my current device or my needs
 
 As a user, I should be able to use the app when being offline,
 So that I do not have to rely on having a stable internet connection and am therefore able to use the app in any situation regardless of the internet connection


 As a user, I should be able to see event data visualized in a dashboard
So that I can get an overview over certain characteristics of the events quickly and comfortably 

# Scenarios

## 1.1	Scenario: When user hasn't searched for a city, show upcoming events from all cities
Given user hasn't searched for any city

When the user opens the app

Then the user will see a list of all upcoming events
 
## 1.2	Scenario: User should see a list of suggestions when they search for a city

Given the main page is open

When user starts typing in the city textbox

Then the user should see a list of cities (suggestions) that match what they've typed

## 1.3	Scenario: User can select a city from the suggested list

Given the user was typing "Berlin" in the city textbox

And the list of suggested cities is showing

When the user selects a city (e.g., "Atlanta, Georgia") from the list

Then their city should be changed to that city (i.e., "Atlanta, Georgia")

And the user should receive a list of upcoming events in that city
## 2.1	Scenario: An event element is collapsed by default

Given the list of events has been loaded

When the user does not perform any action

Then the event element should be collapsed

## 2.2	Scenario: User can expand an event to see its details

Given the list of events has been loaded

And a user has not expanded a certain event yet

When user clicks on "Show details" button for an event

Then the event element will be expanded to show the event details

## 2.3	Scenario: User can collapse an event to hide its details

Given the list of events has been loaded

And a user has already expanded a certain event

When user clicks on "Hide details" button for that event

Then the event element will be collapsed to hide the event details

## 3.1	Scenario: When user hasn't specified a number, 32 is the default number

Given the list of events has been loaded

When a user does not enter or select a specific number of events to be shown

Then 32 will be the number of events displayed

## 3.2	Scenario: User can change the number of events they want to see

Given the list of events has been loaded

When a user enters or selects the number of events to be shown

Then the list of events will be re-rendered, as a result displaying the number of events that the user has specified
## 4.1	Scenario: Show cached data when there's no internet connection

Given that the user lost its connection to the internet

Or opened the app without having an internet connection

And data has been cached in a prior session

When a user intends to use the application

Then the application will work with the data that has been previously cached

## 4.2	Scenario: Show error when user changes the settings (city, time range)

Given that the user lost its connection to the internet

Or opened the app without having an internet connection

And data has been cached in a prior session for specific settings (city, time range)

When a user attempts to change settings and to view data that was not requested in a prior session

Then the application will show an error, informing the user about the inability to retrieve this data

## 5.1	Scenario: Show a chart with the number of upcoming events in each city

Given the list of events has been loaded

When a user clicks on "Statistics" in the navigation menu

Then a chart with the number of upcoming events in each city will be rendered
