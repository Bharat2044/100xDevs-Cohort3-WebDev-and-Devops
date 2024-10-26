# **Week 11 - 11.2 | Recoil**

## Assignment #1 - Create Amazon Checkout

## Overview

This project demonstrates a shopping cart implementation in a React application using Recoil for state management. The focus is on managing cart items, updating quantities, and displaying the total price dynamically.

## Objectives

1. Implement shopping cart functionality using Recoil.
2. Update UI components based on the cart state.
3. Manage user actions like adding/removing items and checking out.

## Problem Statement

Create a React application with the following features:
- A shopping cart to manage products.
- Ability to update item quantities.
- Checkout modal to confirm purchases.

### Directory Structure Explanation

- `src/`: Root source directory
  - `components/`: Contains reusable React components
    - `AmazonCheckout.js`: Main checkout component with cart functionality.
  - `store/`: Contains Recoil state management files
    - `cartItemsState.js`: Atom for managing cart items.
    - `cartTotalSelector.js`: Selector for calculating the total price and item count.
  - `App.js`: Main application component.
  - `index.js`: Entry point of the application.
  - `AmazonCheckout.css`: CSS file for styling the checkout component.


## Implementation Approach
### AmazonCheckout Component

In this component:
- The cart items are managed using a Recoil atom (`cartItemsState`).
- The total price and item count are calculated using a Recoil selector (`cartTotalSelector`).
- Users can add, remove, or update item quantities directly in the cart.
- A modal confirms the purchase once the user checks out.


### Reference UI:

![Image](https://utfs.io/f/A8JZzw0Laf9jsWDdfREK4EWrL9nSe0giovIACkYzHDFRf3aM)
![Image](https://utfs.io/f/A8JZzw0Laf9j3K3HCB1eHnWBajspriovNKPtZG1MXc3mw4gR)
