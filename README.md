# Intro

install packages:

```
$ npm i
```

run the app:

```
$ npm run start
```

## Note

`http://localhost:3000/v1/dummyjson/products` will outout data

`http://localhost:3000/v1/smartjson/items` will give 'Error retrieving items from SmartJSON' error as we don't have a real data source it is just for demo strcuture.

## Data Formats

We are formatting the data in a common way despite of the source of that data. In our case we are considering 2 formats for this example. One `dummyJson` products response second `smatJson` (made up) products response. The approach we used is extandable i.e. for any new data source we need a parsing function in `dataFormatter.js`.

Currently we are exposing the choice of data-source to external user. Another apprach could be to hide the details abuot data-source in a way that the user doesn't know form where we fetch the data and user always sees the same structure of the data. But, our current approach seems a better option for user experience.

Both of the sample responses are shared below:

## Input Formats

**dummyJson**

```{
  "products": [http://localhost:3000/v1/dummyjson/products
    {
      "id": 1,
      "title": "Essence Mascara Lash Princess",
      "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      "category": "beauty",
      "price": 9.99,
      "discountPercentage": 7.17,
      "rating": 4.94,
      "stock": 5,
      "tags": [
        "beauty",
        "mascara"
      ],
      "brand": "Essence",
      "sku": "RCH45Q1A",
      "weight": 2,
      "dimensions": {
        "width": 23.17,
        "height": 14.43,
        "depth": 28.01
      },
      "warrantyInformation": "1 month warranty",
      "shippingInformation": "Ships in 1 month",
      "availabilityStatus": "Low Stock",
      "reviews": [
        {
          "rating": 2,
          "comment": "Very unhappy with my purchase!",
          "date": "2024-05-23T08:56:21.618Z",
          "reviewerName": "John Doe",
          "reviewerEmail": "john.doe@x.dummyjson.com"
        },
        {
          "rating": 2,
          "comment": "Not as described!",
          "date": "2024-05-23T08:56:21.618Z",
          "reviewerName": "Nolan Gonzalez",
          "reviewerEmail": "nolan.gonzalez@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Very satisfied!",
          "date": "2024-05-23T08:56:21.618Z",
          "reviewerName": "Scarlett Wright",
          "reviewerEmail": "scarlett.wright@x.dummyjson.com"
        }
      ],
      "returnPolicy": "30 days return policy",
      "minimumOrderQuantity": 24,
      "meta": {
        "createdAt": "2024-05-23T08:56:21.618Z",
        "updatedAt": "2024-05-23T08:56:21.618Z",
        "barcode": "9164035109868",
        "qrCode": "..."
      },
      "thumbnail": "...",
      "images": ["...", "...", "..."]
    }
  ],
  "total": 194,
  "skip": 0,
  "limit": 30
}

```

**smatJson**

```{
  "items": [
    {
      "itemId": 1,
      "name": "Essence Mascara Lash Princess",
      "details": {
        "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        "category": "beauty",
        "price": 9.99,
        "discount": 7.17
      },
      "stars": 4.94,
      "inventory": {
        "available": 5,
        "status": "Low Stock"
      },
      "attributes": {
        "tags": [
          "beauty",
          "mascara"
        ],
        "brand": "Essence",
        "sku": "RCH45Q1A",
        "weightInGrams": 2,
        "dimensions": {
          "widthCm": 23.17,
          "heightCm": 14.43,
          "depthCm": 28.01
        }
      },
      "policies": {
        "warranty": "1 month warranty",
        "shipping": "Ships in 1 month",
        "return": "30 days return policy",
        "minOrderQty": 24
      },
      "reviews": [
        {
          "stars": 2,
          "feedback": "Very unhappy with my purchase!",
          "date": "2024-05-23T08:56:21.618Z",
          "reviewer": {
            "name": "John Doe",
            "email": "john.doe@x.dummyjson.com"
          }
        },
        {
          "stars": 2,
          "feedback": "Not as described!",
          "date": "2024-05-23T08:56:21.618Z",
          "reviewer": {
            "name": "Nolan Gonzalez",
            "email": "nolan.gonzalez@x.dummyjson.com"
          }
        },
        {
          "stars": 5,
          "feedback": "Very satisfied!",
          "date": "2024-05-23T08:56:21.618Z",
          "reviewer": {
            "name": "Scarlett Wright",
            "email": "scarlett.wright@x.dummyjson.com"
          }
        }
      ],
      "metadata": {
        "createdOn": "2024-05-23T08:56:21.618Z",
        "updatedOn": "2024-05-23T08:56:21.618Z",
        "barcode": "9164035109868",
        "qrCode": "..."
      },
      "media": {
        "thumbnailUrl": "...",
        "imageUrls": ["...", "...", "..."]
      }
    },
  ],
  "summary": {
    "totalItems": 194,
    "itemsSkipped": 0,
    "itemsPerPage": 10
  }
}

```

## Output Format

We are parsing the data to a common outputformat, regardless of data source, check `src/utils/dataFormatter.js` file
