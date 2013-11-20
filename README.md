Howl: Enterprise Reviews
========================

Howl fills a vacuum in the enterprise product marketplace. Similar to Amazon's product reviews, Howl provides a way for enterprise customers to voice, record and share their opinion. This makes the market competitive, transparent and accessible.

Today's typical enterprise service buying scenario: an IT architect is asked to provide recommendations on say, purchasing a CDN service. He formulates an early opinion either based on vendors' websites (biased) or painstakingly research blog posts (questionable credibility) or through expensive analyst materials (artificial and maybe biased). A thorough investigation is almost always impossible. This needs to change.

Salesforce's rich CRM and Support databases provide a rare opportunity and permission to build Howl enterprise reviews and become a *ubiquitous influencer on enterprise market*, similar to say Amazon's influence over the retail product market or Yelp in casual dining market.

Mobile Application
------------------

Howl's user experience is to keep it simple: a search bar for searching across enterprise services and products and then a detail review page for the service/ product.

The search is implemented using SOQL API. We created a custom object Product_Review table for storing reviews. Appery.io is used to build the mobile application, and custom REST/ JSON services are written  using nodejs.

Future Enhancements
-------------------

Build call to action on the detail review page. These could include:
- generating a lead
- starting a trial
- leaving a new review
