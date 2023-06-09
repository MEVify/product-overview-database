## Mevify - Product Overview

An API for a contemporary [e-commerce](https://github.com/Wired-Wardrobe/project-atlier) website that is able to scale as its user base increases.

## Getting Started

Installation
- Clone the repository
    ```
        git clone https://github.com/MEVify/product-overview-database
    ```
- Install the dependencies
    ```
        npm install
    ```
- Run the following script
    ```
        npm start
        npm seed
    ```

## Author

[Brett Tanonaka](https://github.com/B-Tanonaka)

## Collaborators
[Mevludin Causevic](https://github.com/mevcaus)\
[Neil Xia](https://github.com/NeilLXia)

## Built With
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)![ExpressJS](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)![AWS](https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)![loader.io](https://img.shields.io/badge/loader.io-477cbc?&logoColor=white&style=for-the-badge)![k6](https://img.shields.io/badge/k6-7d64ff?logo=k6&logoColor=white&style=for-the-badge)![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)![ESLINT](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)

## Key Metrics
- Requests per second: 7,500
- Latency: 4ms average
- Error rate: 0%

<details>
  <summary>Loader.io test results</summary>
<img src="https://user-images.githubusercontent.com/118404699/232241888-09b4b35d-5232-4b93-a911-ec54e4c83c30.png" alt="loader stress test at 7,500 request per second" width="75%" height="50%" />
</details>

## Overview
This API handles requests for the product overview and related items section of Wired Wardrobe's [client-side application](https://github.com/Wired-Wardrobe/project-atlier). Approximately one million products are available in the database.

#### Server

Each server is able to handle around 2,500 requests per second with caching

#### Database

PostgreSQL, a relational database was used as each product has a set of associated styles, photos, and sku numbers

<details>
  <summary>Schema photo example</summary>
  <img src="https://user-images.githubusercontent.com/118404699/232244966-fe93e175-9f0f-46e5-8f28-5faae4dbf369.png" alt="PostgreSQL schema" width="50%" height="50%">
</details>

#### Deployment

Each component was hosted on an Amazon Web Services (AWS) EC2 instance. AWS RDS and Elastic Beanstalk were not used.
- Database, 1
- Load balancer, 1
- Servers, 3

## Optimizations

#### Adding servers
- NGINX load balancer distributes requests across the servers
- Benefit: Linear increase, each server was able to handle approximately 800 requests per second with less than 10ms latency
- Cost: Having to purchase more server space

#### Caching
- NGINX cache stores data for 10 minutes
- Benefit: Linear increase, improved each server capacity by 300% to handle about 2,500 requests per second with less than 5ms latency
- Cost: Increasing storage space

## Stress Testing

#### Loader.io - Deployed testing after optimizing

- Deployed testing was primarily on the styles endpoint because it is the most data demanding

<details>
    <summary>5,000 requests per second test results</summary>
    <ul>
      <li>Requests per second: 5,000</li>
      <li>Total requests: 300,000</li>
      <li>Latency: 1ms</li>
      <li>Error rate: 0%</li>
    </ul>
    <img src="https://user-images.githubusercontent.com/118404699/232247977-832f24fa-f640-45ab-96f3-b09c9143f801.png" alt="Loader.io deployed stress test at 5000 requests per second" width="100%" height="100%"/>
</details>

<details>
    <summary>7,500 requests per second test results</summary>
    <ul>
      <li>Requests per second: 7,500</li>
      <li>Total requests: 449,969</li>
      <li>Latency: 4ms</li>
      <li>Error rate: 0%</li>
    </ul>
    <img src="https://user-images.githubusercontent.com/118404699/232241888-09b4b35d-5232-4b93-a911-ec54e4c83c30.png" alt="Loader.io deployed stress test at 5000 requests per second" width="100%" height="100%"/>
</details>

#### k6 - Local testing before optimizing

<details>
    <summary>Product id test results</summary>
      <ul>
        <li>Requests per second: 2,730</li>
        <li>Total requests: 821,784</li>
        <li>Latency: 43ms</li>
        <li>Error rate: 0%</li>
    </ul>
    <img src="https://user-images.githubusercontent.com/118404699/232246178-6739aeb1-3b72-4246-8027-ab54a512d503.png" alt="k6 local stress test at product id endpoint" width="100%" height="100%"/>
</details>

<details>
    <summary>Styles test results</summary>
    <ul>
      <li>Requests per second: 1,319</li>
      <li>Total requests: 397,066</li>
      <li>Latency: 79ms</li>
      <li>Error rate: 0%</li>
    </ul>
    <img src="https://user-images.githubusercontent.com/118404699/232246237-53a1910c-572c-4d18-951b-ed9cd1635aaf.png" alt="k6 local stress test at styles endpoint" width="100%" height="100%"/>
</details>

