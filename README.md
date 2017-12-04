![Verify](app/assets/img/verify-logo-rect.png "Verify")

Verify is a reputation protocol that tracks the transaction history of participants (buyers, sellers) and unlocks benefits for those with good reputation.

## Introduction

A key factor in assessing the strength of a product offering is determining if a team is able to execute on the project under consideration. No matter how well thought-out an idea may be, without the operational ability to execute on the plan the project stands little chance of success.

A core facet of the Verify Payments solution is the checkout page. Until we provide sellers with a Checkout page that they can integrate, no buyer will be able to complete a single transaction. Therefore, the focus at the early MVP development phase was to create this checkout page to demonstrate the Improved Checkout experience described in [Section 4.1.1 of our whitepaper](https://verify.as/files/whitepaper.pdf).

By the time of this writing, we developed and deployed an early version of this demo checkout experience at https://verify.as/demo. We encourage readers to browse through to the demo site and try out the checkout experience for themselves!

A screenshot of the checkout page is included below for reference:
![Verify Checkout page](/app/assets/img/screen@2x.png)

The decision to use a hosted checkout page (which overlays a modal dialog over the seller’s website) enables us to make continuous updates to the embedded script to optimize the checkout flow, or improve conversion without the need for sellers to make any changes on their websites. This means we can deploy changes to Verify Payments instantly to all our sellers, anywhere in the world.


## Setup Instructions

In order to run this project locally, make sure you have NodeJS installed, and run the below commands:

```bash
npm install
gulp
```

## Purpose of MVP
The purpose of this demo is to help sellers, and general users alike, to understand how the Verify solution differs from traditional payment solutions &mdash; and how the checkout experience may look like.

This demo is **illustrative**, and will of course change with time, to optimize for conversion and usability. However, it's primary purpose is to demonstrate the checkout experience. Using a light demo, we're able to show this to early sellers and quickly make modifications to illustrate different checkout experiences. This means we only build out the full-fledged version once we're certain we've found a checkout experience that sellers love.

## MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
